#!/usr/bin/env python3
"""incidents.sqlite から公開サイト用のデータ (docs/data/incidents.js) を書き出す。"""

from __future__ import annotations

import argparse
import json
import re
import sqlite3
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

DEFAULT_DATABASE = Path("incidents.sqlite")
DEFAULT_OUTPUT = Path("docs/data/incidents.js")

TRIGGER_LABELS = {
    "Application bugs": "アプリケーションのバグ",
    "Hardware fault": "ハードウェア障害",
    "Infrastructure failure": "インフラ障害",
    "Job Failure": "ジョブの失敗",
    "Maintainance": "メンテナンス",
    "Misconfiguration": "設定ミス",
    "Request increase": "リクエスト増加",
    "External failure": "外部要因",
}
TRIGGER_ALIASES = {"Maintenance": "Maintainance"}
OTHER_TRIGGER = "Other"
OTHER_TRIGGER_LABEL = "その他"

PROVIDER_ALIASES = {
    "salesforce's": "Salesforce",
    "honey comb": "Honeycomb",
    "pagerduty": "PagerDuty",
    "buildkite": "Buildkite",
    "anthoropic": "Anthropic",
}
PROVIDER_URL_HINTS = {"x.com/askplaystation": "PlayStation"}
HOST_PROVIDERS = {
    "aws.amazon.com": "AWS",
    "github.blog": "GitHub",
    "engineering.fb.com": "Meta",
    "status.cloud.google.com": "Google Cloud",
    "cloudflare.com": "Cloudflare",
    "gocardless.com": "GoCardless",
    "careersatdoordash.com": "DoorDash",
    "datacenterdynamics.com": "Salesforce",
    "xtech.nikkei.com": "IBM Cloud",
    "pagerduty.com": "PagerDuty",
    "bbc.co.uk": "BBC",
    "tarsnap.com": "Tarsnap",
    "fortnite.com": "Fortnite",
    "openai.com": "OpenAI",
}
NO_PROVIDER = re.compile(r"^(なし|-|ー)?$|^なし")
GENERIC_SUBDOMAINS = {"www", "blog", "status", "engineering", "news", "support", "help"}
SECOND_LEVEL = {"co", "com", "ne", "or", "ac", "go"}

DATE_PATTERN = re.compile(r"(\d{4})[-/](\d{1,2})[-/](\d{1,2})")


def parse_date(value: str) -> str | None:
    match = DATE_PATTERN.search(value or "")
    if not match:
        return None
    year, month, day = (int(group) for group in match.groups())
    try:
        return datetime(year, month, day).date().isoformat()
    except ValueError:
        return None


def parse_triggers(value: str) -> tuple[list[str], str]:
    """分類として使えるタグと、分類に当てはまらない自由記述を返す。"""
    value = (value or "").strip()
    if not value:
        return [], ""
    parts = [part.strip() for part in re.split(r"[,、]", value) if part.strip()]
    tags = [TRIGGER_ALIASES.get(part, part) for part in parts]
    if all(tag in TRIGGER_LABELS for tag in tags):
        return list(dict.fromkeys(tags)), ""
    return [OTHER_TRIGGER], value


def host_of(url: str) -> str:
    try:
        return (urlparse(url).hostname or "").lower()
    except ValueError:
        return ""


def provider_from_host(host: str) -> str:
    for suffix, name in HOST_PROVIDERS.items():
        if host == suffix or host.endswith("." + suffix):
            return name
    labels = host.split(".")
    while len(labels) > 2 and labels[0] in GENERIC_SUBDOMAINS:
        labels = labels[1:]
    if len(labels) >= 3 and labels[-2] in SECOND_LEVEL:
        name = labels[-3]
    elif len(labels) >= 2:
        name = labels[-2]
    else:
        name = host
    return name.capitalize() if name else ""


def display_provider(row: sqlite3.Row) -> str:
    provider = (row["provider"] or "").strip()
    alias = PROVIDER_ALIASES.get(provider.lower())
    if alias:
        return alias
    for hint, name in PROVIDER_URL_HINTS.items():
        if hint in provider:
            return name
    if provider and not provider.startswith("http") and not NO_PROVIDER.match(provider):
        return provider
    for url in (row["source_original"], row["scraped_url"], row["source2_original"]):
        host = host_of(url or "")
        if host and host != "web.archive.org":
            return provider_from_host(host)
    return "不明"


def clean(value: str | None) -> str:
    return (value or "").strip()


def build_records(connection: sqlite3.Connection) -> list[dict]:
    connection.row_factory = sqlite3.Row
    records = []
    for row in connection.execute("SELECT * FROM incidents ORDER BY id"):
        triggers, trigger_note = parse_triggers(row["trigger"])
        begin = parse_date(row["datetime_begin"])
        articles = clean(row["articles"])
        records.append(
            {
                "id": row["id"],
                "title": clean(row["scraped_title"]),
                "url": clean(row["scraped_url"]) or clean(row["source_original"]),
                "provider": display_provider(row),
                "date": begin,
                "year": int(begin[:4]) if begin else None,
                "datetimeBegin": clean(row["datetime_begin"]),
                "datetimeEnd": clean(row["datetime_end"]),
                "tz": clean(row["tz"]),
                "duration": clean(row["duration"]),
                "triggers": triggers,
                "triggerNote": trigger_note,
                "summary": "" if articles.startswith("http") else articles,
                "rootCause": clean(row["root_cause_analysis"]),
                "extraUrl": clean(row["source2_original"])
                or (articles if articles.startswith("http") else ""),
                "archived": clean(row["scrape_error"]).startswith("Fetched from Wayback"),
            }
        )
    return records


def export(database: Path, output: Path) -> int:
    connection = sqlite3.connect(database)
    try:
        records = build_records(connection)
    finally:
        connection.close()

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "triggerLabels": {**TRIGGER_LABELS, OTHER_TRIGGER: OTHER_TRIGGER_LABEL},
        "incidents": records,
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    body = json.dumps(payload, ensure_ascii=False, indent=1)
    output.write_text(f"window.FAILURE_REPORTS = {body};\n", encoding="utf-8")
    return len(records)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--database", type=Path, default=DEFAULT_DATABASE)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    args = parser.parse_args()
    count = export(args.database, args.output)
    print(f"Wrote {count} incidents to {args.output}")


if __name__ == "__main__":
    main()
