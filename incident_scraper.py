#!/usr/bin/env python3
"""Download incident rows from Google Sheets and scrape their original sources."""

from __future__ import annotations

import argparse
import csv
import io
import os
import re
import sqlite3
import sys
import tempfile
import time
from dataclasses import dataclass, replace
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable
from urllib.parse import urldefrag, urlparse

import requests
from bs4 import BeautifulSoup
from pypdf import PdfReader
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

SPREADSHEET_ID = "1kt1Rz-DtPSf0faz_EICI50sYWglEy1-LGBRq57X58J0"
DEFAULT_GID = "0"
DEFAULT_DATABASE = Path("incidents.sqlite")
USER_AGENT = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)
BOT_USER_AGENT = "failure-reports/1.0 (+https://github.com/tomoyk/failure-reports)"
WAYBACK_URL = "https://web.archive.org/web/2/{url}"
WAYBACK_HOST = "web.archive.org"
WAYBACK_INTERVAL = 5.0

# スプレッドシートにどの列にもURLが無い行の出典。キーは (Provider, Articles)。
SUPPLEMENTAL_SOURCES = {
    ("Tumblr", "Database cluster crashed during maintenance"): (
        "https://techcrunch.com/2010/12/06/tumblr-downtime/"
    ),
}
URL_PATTERN = re.compile(r"https?://[^\s<>\"'）)」]+")

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


def make_session() -> requests.Session:
    session = requests.Session()
    session.headers["User-Agent"] = USER_AGENT
    retry = Retry(
        total=2,
        backoff_factor=1,
        status_forcelist=(429, 500, 502, 503, 504),
        allowed_methods=("GET",),
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount("https://", adapter)
    session.mount("http://", adapter)
    wayback_retry = Retry(
        total=2,
        backoff_factor=10,
        status_forcelist=(429, 500, 502, 503, 504),
        allowed_methods=("GET",),
    )
    session.mount(f"https://{WAYBACK_HOST}", HTTPAdapter(max_retries=wayback_retry))
    return session


def candidate_urls(row: dict[str, str]) -> list[str]:
    """Source (original) を最優先に、他の列に書かれたURLも順に候補にする。"""
    found: list[str] = []
    for column in ("source_original", "source2_original", "articles", "provider"):
        for url in URL_PATTERN.findall(row.get(column, "")):
            if url not in found:
                found.append(url)
    supplemental = SUPPLEMENTAL_SOURCES.get((row.get("provider", ""), row.get("articles", "")))
    if supplemental and supplemental not in found:
        found.append(supplemental)
    return found


def normalize_text(value: str) -> str:
    return " ".join(value.split())


def join_lines(lines: list[str]) -> str:
    text = ""
    for line in lines:
        if text and text[-1].isascii() and line[0].isascii():
            text += " "
        text += line
    return text


def html_title(soup: BeautifulSoup) -> str:
    for attrs in (
        {"property": "og:title"},
        {"name": "og:title"},
        {"name": "twitter:title"},
    ):
        tag = soup.find("meta", attrs=attrs)
        if tag and tag.get("content") and normalize_text(tag["content"]):
            return normalize_text(tag["content"])
    if soup.title:
        title = normalize_text(soup.title.get_text(" "))
        if title:
            return title
    for heading in soup.find_all("h1"):
        title = normalize_text(heading.get_text(" "))
        if title:
            return title
    return ""


def pdf_title_and_text(data: bytes) -> tuple[str, str]:
    reader = PdfReader(io.BytesIO(data))
    pages = [(page.extract_text() or "") for page in reader.pages]
    metadata_title = normalize_text((reader.metadata.title if reader.metadata else "") or "")
    if metadata_title:
        return metadata_title, "\n".join(pages)

    heading: list[str] = []
    for page in pages:
        for line in page.splitlines():
            line = normalize_text(line)
            if line:
                heading.append(line)
            elif heading:
                break
        if heading:
            break
    return join_lines(heading), "\n".join(pages)


def parse_response(url: str, response: requests.Response) -> ScrapeResult:
    content_type = response.headers.get("content-type", "").lower()
    is_pdf = "pdf" in content_type or response.content[:5] == b"%PDF-"
    common = {"url": url, "final_url": response.url, "http_status": response.status_code}

    if is_pdf:
        title, content = pdf_title_and_text(response.content)
        return ScrapeResult(title=title, content=content, status="success", **common)

    if "html" in content_type or "xml" in content_type:
        soup = BeautifulSoup(response.content, "html.parser")
        title = html_title(soup)
        for tag in soup.select("#wm-ipp-base, #wm-ipp, #donato"):
            tag.decompose()
        for tag in soup(["script", "style", "nav", "footer", "header", "noscript"]):
            tag.decompose()
        content = "\n".join(
            line.strip() for line in soup.get_text("\n").splitlines() if line.strip()
        )
        return ScrapeResult(title=title, content=content, status="success", **common)

    if content_type.startswith("text/"):
        return ScrapeResult(content=response.text, status="success", **common)
    return ScrapeResult(status="success", **common)


def fetch(
    session: requests.Session,
    url: str,
    fetch_url: str | None = None,
    headers: dict[str, str] | None = None,
) -> ScrapeResult:
    try:
        response = session.get(fetch_url or url, headers=headers, timeout=45)
        response.raise_for_status()
        return parse_response(url, response)
    except requests.RequestException as exc:
        status = exc.response.status_code if exc.response is not None else None
        return ScrapeResult(url=url, status="error", error=str(exc), http_status=status)
    except Exception as exc:
        return ScrapeResult(url=url, status="error", error=f"parse failed: {exc}")


def scrape_url(session: requests.Session, url: str) -> ScrapeResult:
    """タイトルが取れた場合のみ success を返す。直接取得に失敗したら Wayback Machine を試す。"""
    if not is_http_url(url):
        return ScrapeResult(url=url, error="Source (original) is empty or invalid")

    target = urldefrag(url).url
    result = fetch(session, url, target)
    if result.status == "success" and result.title:
        return result

    direct_problem = result.error or "no title found in response"
    if urlparse(target).hostname == WAYBACK_HOST:
        return replace(result, status="error", error=direct_problem)

    time.sleep(WAYBACK_INTERVAL)
    # Wayback Machine はブラウザを装ったUAを不審なボットとして429で拒否する
    archived = fetch(
        session,
        url,
        WAYBACK_URL.format(url=target),
        headers={"User-Agent": BOT_USER_AGENT},
    )
    if archived.status == "success" and archived.title:
        return replace(
            archived,
            error=f"Fetched from Wayback Machine (direct access failed: {direct_problem})",
        )
    archive_problem = archived.error or "no title found in response"
    return replace(
        result,
        status="error",
        error=f"{direct_problem}; Wayback Machine: {archive_problem}",
    )


def scrape_row(
    session: requests.Session,
    row: dict[str, str],
    cache: dict[str, ScrapeResult],
    delay: float,
) -> ScrapeResult:
    urls = candidate_urls(row)
    if not urls:
        return ScrapeResult(url="", error="No source URL in any column")

    failures: list[ScrapeResult] = []
    for url in urls:
        if url not in cache:
            print(f"  scraping {url}")
            cache[url] = scrape_url(session, url)
            if delay:
                time.sleep(delay)
        result = cache[url]
        if result.status == "success" and result.title:
            return result
        failures.append(result)

    first = failures[0]
    errors = "; ".join(f"{item.url}: {item.error}" for item in failures)
    return replace(first, status="error", error=errors)


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
    results: list[ScrapeResult],
) -> None:
    scraped_at = datetime.now(timezone.utc).isoformat()
    for row, result in zip(rows, results, strict=True):
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


class EmptyTitleError(RuntimeError):
    pass


def build_database(
    database: Path = DEFAULT_DATABASE,
    gid: str = DEFAULT_GID,
    delay: float = 0.25,
) -> dict[str, int]:
    session = make_session()
    rows = download_rows(session, gid)

    cache: dict[str, ScrapeResult] = {}
    results: list[ScrapeResult] = []
    for index, row in enumerate(rows, 1):
        print(f"[{index}/{len(rows)}] sheet_row={row['sheet_row']} {row['provider']}")
        results.append(scrape_row(session, row, cache, delay))

    untitled = [
        (row, result)
        for row, result in zip(rows, results, strict=True)
        if not result.title.strip()
    ]
    if untitled:
        lines = [
            f"  sheet_row={row['sheet_row']} provider={row['provider']!r}: {result.error}"
            for row, result in untitled
        ]
        raise EmptyTitleError(
            f"{len(untitled)} row(s) have no scraped title; database was not updated\n"
            + "\n".join(lines)
        )

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

    return {
        "rows": len(rows),
        "unique_scraped_urls": len({result.url for result in results}),
        "success": sum(result.status == "success" for result in results),
        "via_wayback": sum(
            result.error.startswith("Fetched from Wayback Machine") for result in results
        ),
        "source_from_other_column": sum(
            result.url != row["source_original"]
            for row, result in zip(rows, results, strict=True)
        ),
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--database", type=Path, default=DEFAULT_DATABASE)
    parser.add_argument("--gid", default=DEFAULT_GID)
    parser.add_argument("--delay", type=float, default=0.25)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    try:
        summary = build_database(args.database, args.gid, args.delay)
    except EmptyTitleError as exc:
        sys.exit(f"ERROR: {exc}")
    print("Completed:", ", ".join(f"{key}={value}" for key, value in summary.items()))


if __name__ == "__main__":
    main()
