#!/usr/bin/env python3
"""Medium 掲載記事のサービス名が、書いた会社になることの回帰テスト。"""

import json
import sqlite3
from pathlib import Path

from export_site_data import display_provider, provider_from_medium

COMPANIES = {
    "https://medium.com/xandr-tech/2013-09-17-outage-postmortem-586b19ae4307": "Xandr",
    "https://medium.com/preply-engineering/dns-postmortem-e169efd45afd": "Preply",
    "https://medium.com/@florian_7764/technical-post-mortem-of-the-august-incident-82ab4c3d6547": "Platform.sh",
    "https://danveloper.medium.com/on-infrastructure-at-scale-a-cascading-failure-of-distributed-systems-7cff2a3cd2df": "Target",
    "https://medium.com/making-instapaper/instapaper-outage-cause-recovery-3c32a7e9cc5f": "Instapaper",
    "https://medium.com/@SkyscannerEng/how-a-couple-of-characters-brought-down-our-site-356ccaf1fbc3": "Skyscanner",
    "https://medium.com/square-corner-blog/incident-summary-2017-03-16-2f65be39297": "Square",
    "https://medium.com/@CivisAnalytics/breaking-kubernetes": "Civis Analytics",
    "https://medium.com/techmindtickle/intermittent-delays-in-kubernetes-e9de8239e2fa": "Mindtickle",
    "https://medium.com/jw-player-engineering/how-a-cryptocurrency-miner": "JW Player",
    "https://medium.com/medium-eng/the-curious-case-of-disappearing-polish-s": "Medium",
    "https://medium.com/acme-engineering/post": "Acme",
}


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


def test_medium_urls_use_the_company() -> None:
    for url, expected in COMPANIES.items():
        got = provider_from_medium(url)
        assert got == expected, f"{url}: expected {expected}, got {got}"


def test_platform_label_does_not_hide_the_company() -> None:
    preply = "https://medium.com/preply-engineering/dns-postmortem-e169efd45afd"
    target = "https://danveloper.medium.com/on-infrastructure-at-scale-a-cascading-failure-of-distributed-systems-7cff2a3cd2df"
    assert display_provider(_row("Medium", preply)) == "Preply"
    assert display_provider(_row("Danveloper", target)) == "Target"
    assert display_provider(_row("Cloudflare", "https://blog.cloudflare.com/outage")) == "Cloudflare"


def test_exported_articles_are_not_labeled_medium() -> None:
    text = Path("docs/data/incidents.js").read_text(encoding="utf-8")
    payload = json.loads(text.replace("window.FAILURE_REPORTS = ", "", 1).rstrip(";\n"))
    providers = {incident["provider"] for incident in payload["incidents"]}
    assert "Medium" not in providers
    assert "Danveloper" not in providers
    expected = {
        "Xandr",
        "Preply",
        "Platform.sh",
        "Target",
        "Instapaper",
        "Skyscanner",
        "Square",
        "Civis Analytics",
        "Mindtickle",
        "JW Player",
    }
    assert expected <= providers


if __name__ == "__main__":
    test_medium_urls_use_the_company()
    test_platform_label_does_not_hide_the_company()
    test_exported_articles_are_not_labeled_medium()
    print(f"ok: {len(COMPANIES)} medium urls")
