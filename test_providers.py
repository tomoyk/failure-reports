#!/usr/bin/env python3
"""サービス名の分類に関する回帰テスト。"""

import json
import sqlite3
from pathlib import Path

from export_site_data import display_provider


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


def test_hacks_is_mozilla() -> None:
    url = "https://hacks.mozilla.org/2022/02/retrospective-and-technical-details-on-the-recent-firefox-outage"
    assert display_provider(_row("Hacks", url)) == "Mozilla"
    assert display_provider(_row("", url)) == "Mozilla"


def test_exported_hacks_rows_are_mozilla() -> None:
    text = Path("docs/data/incidents.js").read_text(encoding="utf-8")
    payload = json.loads(text.replace("window.FAILURE_REPORTS = ", "", 1).rstrip(";\n"))
    mozilla = [
        incident
        for incident in payload["incidents"]
        if "hacks.mozilla.org" in incident["url"]
    ]
    assert len(mozilla) == 2
    assert {incident["provider"] for incident in mozilla} == {"Mozilla"}
    assert all(incident["provider"] != "Hacks" for incident in payload["incidents"])


if __name__ == "__main__":
    test_hacks_is_mozilla()
    test_exported_hacks_rows_are_mozilla()
    print("ok: hacks is mozilla")
