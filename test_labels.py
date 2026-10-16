#!/usr/bin/env python3
"""引き金ラベルの複数付与と、セキュリティラベルの回帰テスト。"""

import json
from pathlib import Path

from export_site_data import OTHER_TRIGGER, parse_triggers

SECURITY_IDS = {
    65, 78, 82, 104, 133, 141, 143, 171, 185, 194, 197, 207, 209, 229,
    234, 235, 275, 310, 315, 347, 350, 364, 378, 384, 385, 414,
}


def test_multiple_known_labels() -> None:
    tags, note = parse_triggers("Maintainance, Misconfiguration")
    assert tags == ["Maintainance", "Misconfiguration"], tags
    assert note == ""

    tags, note = parse_triggers("Maintenance、Request increase")
    assert tags == ["Maintainance", "Request increase"], tags
    assert note == ""

    tags, note = parse_triggers("External failure, Security, External failure")
    assert tags == ["External failure", "Security"], tags
    assert note == ""


def test_known_labels_keep_free_text_note() -> None:
    tags, note = parse_triggers("本文を取得できず、引き金を特定できない, Security")
    assert tags == ["Security"], tags
    assert note == "本文を取得できず、引き金を特定できない"


def test_unknown_text_stays_other() -> None:
    text = "報告時点では原因は調査中"
    tags, note = parse_triggers(text)
    assert tags == [OTHER_TRIGGER]
    assert note == text

    mixed = "本文を取得できず、引き金を特定できない"
    tags, note = parse_triggers(mixed)
    assert tags == [OTHER_TRIGGER]
    assert note == mixed


def test_exported_security_labels() -> None:
    text = Path("docs/data/incidents.js").read_text(encoding="utf-8")
    payload = json.loads(text.replace("window.FAILURE_REPORTS = ", "", 1).rstrip(";\n"))
    assert payload["triggerLabels"]["Security"] == "セキュリティ"

    labeled = []
    for incident in payload["incidents"]:
        triggers = incident["triggers"]
        assert len(triggers) == len(set(triggers)), incident["id"]
        if "Security" in triggers:
            labeled.append(incident["id"])
            assert len(triggers) >= 2, incident["id"]
            assert triggers[-1] == "Security", incident
        else:
            assert incident["id"] not in SECURITY_IDS

    assert set(labeled) == SECURITY_IDS


if __name__ == "__main__":
    test_multiple_known_labels()
    test_known_labels_keep_free_text_note()
    test_unknown_text_stays_other()
    test_exported_security_labels()
    print(f"ok: security labels on {len(SECURITY_IDS)} incidents")
