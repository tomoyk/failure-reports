#!/usr/bin/env python3
"""Download incident rows from Google Sheets and scrape their original sources."""

from __future__ import annotations

import argparse
import csv
import io
import os
import sqlite3
import tempfile
import time
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

import requests
from bs4 import BeautifulSoup

SPREADSHEET_ID = "1kt1Rz-DtPSf0faz_EICI50sYWglEy1-LGBRq57X58J0"
DEFAULT_GID = "0"
DEFAULT_DATABASE = Path("incidents.sqlite")
USER_AGENT = "failure-reports/1.0 (+https://github.com/tomoyk/failure-reports)"

COLUMN_MAP = {
    "TZ": "tz",
    "Datetime Begin": "datetime_begin",
    "Datetime End": "datetime_end",
    "Duration": "duration",
    "Provider": "provider",
    "Source (original)": "source_original",
    "Source 2 (original)": "source2_original",
    "Articles": "articles",
    "Root cause analysis": "root_cause_analysis",
    "Trigger": "trigger",
}


@dataclass(frozen=True)
class ScrapeResult:
    url: str
    final_url: str = ""
    title: str = ""
    content: str = ""
    status: str = "skipped"
    error: str = ""
    http_status: int | None = None


def export_url(gid: str = DEFAULT_GID) -> str:
    return (
        f"https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/export"
        f"?format=csv&gid={gid}"
    )


def download_rows(session: requests.Session, gid: str = DEFAULT_GID) -> list[dict[str, str]]:
    response = session.get(export_url(gid), timeout=60)
    response.raise_for_status()
    csv_rows = list(csv.reader(io.StringIO(response.text)))

    try:
        header_index = next(
            index
            for index, row in enumerate(csv_rows)
            if "Source (original)" in row and "Provider" in row
        )
    except StopIteration as exc:
        raise ValueError("Spreadsheet header row was not found") from exc

    header = csv_rows[header_index]
    records: list[dict[str, str]] = []
    for sheet_row, values in enumerate(csv_rows[header_index + 1 :], header_index + 2):
        padded = values + [""] * (len(header) - len(values))
        raw = dict(zip(header, padded, strict=False))
        if not any(value.strip() for value in raw.values()):
            continue
        record = {
            destination: raw.get(source, "").strip()
            for source, destination in COLUMN_MAP.items()
        }
        record["sheet_gid"] = gid
        record["sheet_row"] = str(sheet_row)
        records.append(record)
    return records


def is_http_url(value: str) -> bool:
    return value.startswith(("https://", "http://"))


def scrape_url(session: requests.Session, url: str) -> ScrapeResult:
    if not is_http_url(url):
        return ScrapeResult(url=url, error="Source (original) is empty or invalid")

    try:
        response = session.get(url, timeout=45)
        response.raise_for_status()
        content_type = response.headers.get("content-type", "").lower()
        if "html" not in content_type and "xml" not in content_type:
            return ScrapeResult(
                url=url,
                final_url=response.url,
                content=response.text,
                status="success",
                http_status=response.status_code,
            )

        soup = BeautifulSoup(response.content, "html.parser")
        title = soup.title.get_text(" ", strip=True) if soup.title else ""
        for tag in soup(["script", "style", "nav", "footer", "header", "noscript"]):
            tag.decompose()
        content = "\n".join(
            line.strip() for line in soup.get_text("\n").splitlines() if line.strip()
        )
        return ScrapeResult(
            url=url,
            final_url=response.url,
            title=title,
            content=content,
            status="success",
            http_status=response.status_code,
        )
    except requests.RequestException as exc:
        status = exc.response.status_code if exc.response is not None else None
        return ScrapeResult(url=url, status="error", error=str(exc), http_status=status)


def create_schema(connection: sqlite3.Connection) -> None:
    connection.executescript(
        """
        CREATE TABLE incidents (
            id INTEGER PRIMARY KEY,
            sheet_gid TEXT NOT NULL,
            sheet_row INTEGER NOT NULL,
            tz TEXT NOT NULL,
            datetime_begin TEXT NOT NULL,
            datetime_end TEXT NOT NULL,
            duration TEXT NOT NULL,
            provider TEXT NOT NULL,
            source_original TEXT NOT NULL,
            source2_original TEXT NOT NULL,
            articles TEXT NOT NULL,
            root_cause_analysis TEXT NOT NULL,
            trigger TEXT NOT NULL,
            scraped_url TEXT NOT NULL,
            scraped_final_url TEXT NOT NULL,
            scraped_title TEXT NOT NULL,
            scraped_content TEXT NOT NULL,
            scraped_at TEXT NOT NULL,
            scrape_status TEXT NOT NULL,
            scrape_error TEXT NOT NULL,
            http_status INTEGER,
            UNIQUE(sheet_gid, sheet_row)
        );

        CREATE INDEX incidents_source_original_idx ON incidents(source_original);
        CREATE INDEX incidents_scrape_status_idx ON incidents(scrape_status);
        """
    )


def insert_rows(
    connection: sqlite3.Connection,
    rows: Iterable[dict[str, str]],
    results: dict[str, ScrapeResult],
) -> None:
    scraped_at = datetime.now(timezone.utc).isoformat()
    for row in rows:
        result = results[row["source_original"]]
        connection.execute(
            """
            INSERT INTO incidents (
                sheet_gid, sheet_row, tz, datetime_begin, datetime_end, duration,
                provider, source_original, source2_original, articles,
                root_cause_analysis, trigger, scraped_url, scraped_final_url,
                scraped_title, scraped_content, scraped_at, scrape_status,
                scrape_error, http_status
            ) VALUES (
                :sheet_gid, :sheet_row, :tz, :datetime_begin, :datetime_end, :duration,
                :provider, :source_original, :source2_original, :articles,
                :root_cause_analysis, :trigger, :scraped_url, :scraped_final_url,
                :scraped_title, :scraped_content, :scraped_at, :scrape_status,
                :scrape_error, :http_status
            )
            """,
            {
                **row,
                "scraped_url": result.url,
                "scraped_final_url": result.final_url,
                "scraped_title": result.title,
                "scraped_content": result.content,
                "scraped_at": scraped_at,
                "scrape_status": result.status,
                "scrape_error": result.error,
                "http_status": result.http_status,
            },
        )


def build_database(
    database: Path = DEFAULT_DATABASE,
    gid: str = DEFAULT_GID,
    delay: float = 0.25,
) -> dict[str, int]:
    session = requests.Session()
    session.headers["User-Agent"] = USER_AGENT
    rows = download_rows(session, gid)

    urls = list(dict.fromkeys(row["source_original"] for row in rows))
    results: dict[str, ScrapeResult] = {}
    for index, url in enumerate(urls, 1):
        print(f"[{index}/{len(urls)}] {url or '(empty Source)'}")
        results[url] = scrape_url(session, url)
        if delay and index < len(urls) and is_http_url(url):
            time.sleep(delay)

    database = database.resolve()
    database.parent.mkdir(parents=True, exist_ok=True)
    file_descriptor, temporary_name = tempfile.mkstemp(
        prefix=f".{database.name}.", suffix=".tmp", dir=database.parent
    )
    os.close(file_descriptor)
    temporary = Path(temporary_name)
    try:
        connection = sqlite3.connect(temporary)
        try:
            create_schema(connection)
            insert_rows(connection, rows, results)
            connection.commit()
        finally:
            connection.close()
        temporary.replace(database)
    except Exception:
        temporary.unlink(missing_ok=True)
        raise

    summary = {
        "rows": len(rows),
        "source_urls": sum(is_http_url(row["source_original"]) for row in rows),
        "unique_source_urls": sum(is_http_url(url) for url in urls),
        "success": sum(
            result.status == "success" and is_http_url(url)
            for url, result in results.items()
        ),
        "error": sum(result.status == "error" for result in results.values()),
        "missing_source": sum(
            not is_http_url(row["source_original"]) for row in rows
        ),
    }
    return summary


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--database", type=Path, default=DEFAULT_DATABASE)
    parser.add_argument("--gid", default=DEFAULT_GID)
    parser.add_argument("--delay", type=float, default=0.25)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    summary = build_database(args.database, args.gid, args.delay)
    print("Completed:", ", ".join(f"{key}={value}" for key, value in summary.items()))


if __name__ == "__main__":
    main()
