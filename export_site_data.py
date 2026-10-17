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
    "Security": "セキュリティ",
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
CLOCK_PATTERN = re.compile(r"^\s*(?:約)?\s*(\d{1,2}):(\d{2}):(\d{2})\s*$")
DAY_PATTERN = re.compile(r"(\d+)\s*日")
HOUR_PATTERN = re.compile(r"(\d+(?:\.\d+)?)\s*(?:時間|hours?|hrs?|h)(?![a-zA-Z])", re.I)
MINUTE_PATTERN = re.compile(r"(\d+(?:\.\d+)?)\s*(?:分|minutes?|mins?|min)(?![a-zA-Z])", re.I)
VAGUE_DURATION = re.compile(r"数週間|数時間|数十分")


def parse_duration_minutes(value: str | None) -> int | None:
    """自由記述の継続時間から分を取り出す。複数の値があるときは最大値（全復旧=TTR）を使う。"""
    raw = (value or "").strip()
    if not raw or raw == "-":
        return None
    best: float | None = None
    for segment in raw.split("／"):
        minutes = _parse_duration_segment(segment)
        if minutes is None:
            continue
        if best is None or minutes > best:
            best = minutes
    if best is None or best <= 0:
        return None
    return round(best)


def _parse_duration_segment(segment: str) -> float | None:
    segment = segment.strip()
    if not segment:
        return None
    has_digit = bool(re.search(r"\d", segment))
    if VAGUE_DURATION.search(segment) and not has_digit:
        return None
    if "不明" in segment and not has_digit:
        return None

    clock = CLOCK_PATTERN.match(segment)
    if clock:
        hours, minutes, seconds = (int(group) for group in clock.groups())
        return hours * 60 + minutes + seconds / 60

    total = 0.0
    found = False
    for match in DAY_PATTERN.finditer(segment):
        total += int(match.group(1)) * 1440
        found = True
    for match in HOUR_PATTERN.finditer(segment):
        total += float(match.group(1)) * 60
        found = True
    for match in MINUTE_PATTERN.finditer(segment):
        total += float(match.group(1))
        found = True
    return total if found and total > 0 else None


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
    """分類として使えるタグと、分類に当てはまらない自由記述を返す。

    カンマ区切りの既知ラベルは、1件のインシデントに複数付けられる。
    既知ラベルと自由記述が混ざるときは既知ラベルを残し、自由記述だけを補足にする。
    既知ラベルが一つも無ければ「その他」にする。
    """
    value = (value or "").strip()
    if not value:
        return [], ""
    parts = [part.strip() for part in re.split(r"[,、]", value) if part.strip()]
    tags: list[str] = []
    notes: list[str] = []
    for part in parts:
        tag = TRIGGER_ALIASES.get(part, part)
        if tag in TRIGGER_LABELS:
            if tag not in tags:
                tags.append(tag)
        else:
            notes.append(part)
    if not tags:
        return [OTHER_TRIGGER], value
    return tags, "、".join(notes)


def host_of(url: str) -> str:
    try:
        return (urlparse(url).hostname or "").lower()
    except ValueError:
        return ""


GOOGLE_DOC_PROVIDERS = {
    "1ScqXAdb6BjhsDzCo3qdPYbt1uULzgZqPO8zHeHHarS0": "GitLab",
}


def provider_from_google_doc(url: str) -> str:
    """Google ドキュメントの掲載先ではなく、文書が書いているサービスの名前を返す。"""
    text = url or ""
    for doc_id, name in GOOGLE_DOC_PROVIDERS.items():
        if doc_id in text:
            return name
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
    for url in (row["source_original"], row["scraped_url"], row["source2_original"]):
        document_provider = provider_from_google_doc(url or "")
        if document_provider:
            return document_provider
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
                "durationMinutes": parse_duration_minutes(row["duration"]),
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
