#!/usr/bin/env python3
"""サービス名の分類に関する回帰テスト。"""

import json
import sqlite3
from pathlib import Path

from export_site_data import display_provider

ALLEGRO_POSTMORTEM = "https://blog.allegro.tech/2018/08/postmortem-why-allegro-went-down.html"


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


def test_allegro_blog_is_allegro() -> None:
    assert display_provider(_row("Blog", ALLEGRO_POSTMORTEM)) == "Allegro"
    assert display_provider(_row("", ALLEGRO_POSTMORTEM)) == "Allegro"
    assert display_provider(_row("Cloudflare", "https://blog.cloudflare.com/outage")) == "Cloudflare"


def test_exported_allegro_postmortem() -> None:
    text = Path("docs/data/incidents.js").read_text(encoding="utf-8")
    payload = json.loads(text.replace("window.FAILURE_REPORTS = ", "", 1).rstrip(";\n"))
    matches = [
        incident
        for incident in payload["incidents"]
        if incident["title"] == "Postmortem — why Allegro went down"
    ]
    assert len(matches) == 1
    assert matches[0]["provider"] == "Allegro"
    assert all(incident["provider"] != "Blog" for incident in payload["incidents"])


if __name__ == "__main__":
    test_allegro_blog_is_allegro()
    test_exported_allegro_postmortem()
    print("ok: allegro blog is allegro")
