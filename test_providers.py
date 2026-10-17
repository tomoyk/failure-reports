#!/usr/bin/env python3
"""サービス名の分類に関する回帰テスト。"""

import json
import sqlite3
from pathlib import Path

from export_site_data import display_provider

GITLAB_DOC = (
    "https://docs.google.com/document/d/1ScqXAdb6BjhsDzCo3qdPYbt1uULzgZqPO8zHeHHarS0/preview"
)


def _row(provider: str, url: str) -> sqlite3.Row:
    connection = sqlite3.connect(":memory:")
    connection.row_factory = sqlite3.Row
    connection.execute(
        """
        CREATE TABLE incidents (
            provider TEXT,
            source_original TEXT,
            scraped_url TEXT,
            source2_original TEXT
        )
        """
    )
    connection.execute(
        "INSERT INTO incidents VALUES (?, ?, '', '')",
        (provider, url),
    )
    return connection.execute("SELECT * FROM incidents").fetchone()


def test_gitlab_downtime_doc_is_gitlab() -> None:
    assert display_provider(_row("Docs", GITLAB_DOC)) == "GitLab"
    assert display_provider(_row("", GITLAB_DOC)) == "GitLab"
    assert display_provider(_row("Cloudflare", "https://blog.cloudflare.com/outage")) == "Cloudflare"


def test_exported_gitlab_downtime_doc() -> None:
    text = Path("docs/data/incidents.js").read_text(encoding="utf-8")
    payload = json.loads(text.replace("window.FAILURE_REPORTS = ", "", 1).rstrip(";\n"))
    matches = [
        incident
        for incident in payload["incidents"]
        if "1ScqXAdb6BjhsDzCo3qdPYbt1uULzgZqPO8zHeHHarS0" in incident["url"]
    ]
    assert len(matches) == 1
    assert matches[0]["provider"] == "GitLab"
    assert matches[0]["title"] == "GitLab .com Downtime 2014-07-08 Postmortem"
    assert all(incident["provider"] != "Docs" for incident in payload["incidents"])


if __name__ == "__main__":
    test_gitlab_downtime_doc_is_gitlab()
    test_exported_gitlab_downtime_doc()
    print("ok: gitlab downtime doc is gitlab")
