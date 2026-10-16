#!/usr/bin/env python3
"""parse_duration_minutes の回帰テスト。"""

from export_site_data import parse_duration_minutes

CASES = {
    "24 hours": 24 * 60,
    "約83分": 83,
    "68 min": 68,
    "約1時間50分": 110,
    "約2時間45分（インスタンス停止・EBS劣化）／約5時間54分（API完全復旧含む）": 354,
    "40:42:00": 40 * 60 + 42,
    "9h": 9 * 60,
    "13 hours": 13 * 60,
    "約6時間（EBS復旧）／約12時間（全復旧）": 12 * 60,
    "20 min": 20,
    "5:16:00": 5 * 60 + 16,
    "0:39:00": 39,
    "40:34:00": 40 * 60 + 34,
    "9:27:00": 9 * 60 + 27,
    "約24時間11分": 24 * 60 + 11,
    "24h 11min": 24 * 60 + 11,
    "4:22:00": 4 * 60 + 22,
    "約27分（大規模影響）／約70分（WAF機能完全復旧）": 70,
    "1日": 24 * 60,
    "30 min": 30,
    "約59分（R2完全障害）／約82分（エラー収束含む）": 82,
    "約26分（第1回）／約1時間33分（第2回）": 93,
    "5:49:00": 5 * 60 + 49,
    "1:50:00": 110,
    "2:15:00": 135,
    "約3時間11分（大幅影響）／約3時間51分（断続影響含む）": 231,
    "1時間24分": 84,
    "4時間15分": 255,
    "23分": 23,
    "2時間30分": 150,
    "19分": 19,
    "3時間47分": 227,
    "4時間": 240,
    "3日1時間": 3 * 1440 + 60,
    "2日10時間": 2 * 1440 + 10 * 60,
    "19時間12分": 19 * 60 + 12,
    "10時間42分": 10 * 60 + 42,
    "9時間": 9 * 60,
    "2時間": 120,
    "1時間5分": 65,
    "13分": 13,
}

UNPARSED = [
    "",
    "-",
    "約数十分以内（詳細なDuration不明）",
    "数時間〜US営業時間中（詳細Duration不明）",
    "約数十分",
    "数十分（推定）",
    "数週間以上の調査期間（正確なDuration不明）",
]


def test_known_durations() -> None:
    for text, expected in CASES.items():
        got = parse_duration_minutes(text)
        assert got == expected, f"{text!r}: expected {expected}, got {got}"


def test_vague_durations_are_none() -> None:
    for text in UNPARSED:
        got = parse_duration_minutes(text)
        assert got is None, f"{text!r}: expected None, got {got}"


def test_exported_incidents_match_parser() -> None:
    import json
    from pathlib import Path

    text = Path("docs/data/incidents.js").read_text(encoding="utf-8")
    payload = json.loads(text.replace("window.FAILURE_REPORTS = ", "", 1).rstrip(";\n"))
    for incident in payload["incidents"]:
        expected = parse_duration_minutes(incident["duration"])
        assert incident["durationMinutes"] == expected, incident["duration"]


def test_fastly_june_8_timeline() -> None:
    import json
    from pathlib import Path

    text = Path("docs/data/incidents.js").read_text(encoding="utf-8")
    payload = json.loads(text.replace("window.FAILURE_REPORTS = ", "", 1).rstrip(";\n"))
    incident = next(item for item in payload["incidents"] if "summary-of-june-8-outage" in item["url"])
    assert incident["date"] == "2021-06-08"
    assert incident["datetimeBegin"] == "2021-06-08T09:47:00Z"
    assert "12:35" in incident["datetimeEnd"]
    assert incident["durationMinutes"] == 2 * 60 + 48


if __name__ == "__main__":
    test_known_durations()
    test_vague_durations_are_none()
    test_exported_incidents_match_parser()
    test_fastly_june_8_timeline()
    print(f"ok: {len(CASES)} parsed, {len(UNPARSED)} skipped, export matches")
