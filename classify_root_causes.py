#!/usr/bin/env python3
"""公開記事と既存の原因分析から、根本原因の分類を incidents.sqlite に書き込む。

引き金（何がきっかけで起きたか）とは別に、障害を生み出している要因を分類する。
1件につき最大2つ。根拠が取れないものは「原因を特定できない」とする。
"""

from __future__ import annotations

import re
import sqlite3
from pathlib import Path

DATABASE = Path("incidents.sqlite")

# 分類キーはサイト側のラベルと対応する。並びは同点時の優先順。
LABELS = {
    "software-defect": "ソフトウェアの欠陥",
    "config-error": "設定の誤り",
    "resource-exhaustion": "リソースの枯渇",
    "hardware-failure": "ハードウェア・設備の故障",
    "network-fault": "ネットワークの障害",
    "operational-error": "運用上の人的ミス",
    "credential-expiry": "証明書・資格情報の失効",
    "upstream-failure": "上流・外部の障害",
    "attack": "攻撃・不正アクセス",
    "failover-gap": "冗長化の不備",
    "undetermined": "原因を特定できない",
    "not-a-report": "障害報告ではない",
}

NOT_A_REPORT = (
    "単一の障害報告ではない",
    "複数のインシデントをまとめた履歴ページ",
    "この月はサービス停止を伴うインシデントは報告されていない",
)
UNDETERMINED_TRIGGER = (
    "本文を取得できず、引き金を特定できない",
    "報告時点では原因は調査中",
)

# 記事を読んだうえで決めた分類。自動判定より優先する。
OVERRIDES: dict[int, list[str]] = {
    1: ["software-defect"],
    2: ["software-defect"],
    3: ["software-defect"],
    4: ["upstream-failure", "network-fault"],
    5: ["hardware-failure", "failover-gap"],
    6: ["software-defect", "hardware-failure"],
    7: ["hardware-failure", "failover-gap"],
    8: ["hardware-failure"],
    9: ["hardware-failure"],
    10: ["software-defect", "network-fault"],
    11: ["upstream-failure", "resource-exhaustion"],
    12: ["network-fault", "resource-exhaustion"],
    13: ["upstream-failure"],
    14: ["resource-exhaustion"],
    15: ["credential-expiry"],
    16: ["resource-exhaustion", "config-error"],
    17: ["credential-expiry"],
    18: ["network-fault", "failover-gap"],
    19: ["network-fault"],
    20: ["resource-exhaustion"],
    21: ["config-error"],
    22: ["operational-error"],
    23: ["config-error"],
    24: ["operational-error"],
    25: ["software-defect", "config-error"],
    26: ["resource-exhaustion"],
    27: ["resource-exhaustion", "operational-error"],
    28: ["resource-exhaustion"],
    29: ["resource-exhaustion"],
    30: ["resource-exhaustion"],
    31: ["resource-exhaustion"],
    32: ["resource-exhaustion"],
    33: ["resource-exhaustion"],
    34: ["resource-exhaustion"],
    35: ["network-fault", "resource-exhaustion"],
    36: ["software-defect"],
    37: ["resource-exhaustion"],
    39: ["upstream-failure"],
    41: ["hardware-failure"],
    42: ["software-defect", "resource-exhaustion"],
    43: ["config-error", "operational-error"],
    44: ["software-defect"],
    45: ["upstream-failure", "network-fault"],
    46: ["config-error"],
    47: ["config-error", "network-fault"],
    48: ["software-defect"],
    49: ["hardware-failure"],
    50: ["software-defect", "network-fault"],
    51: ["undetermined"],
    52: ["software-defect", "resource-exhaustion"],
    53: ["config-error", "resource-exhaustion"],
    54: ["network-fault", "failover-gap"],
    55: ["software-defect"],
    56: ["software-defect"],
    57: ["resource-exhaustion"],
    60: ["software-defect", "config-error"],
    61: ["software-defect", "config-error"],
    62: ["config-error", "software-defect"],
    63: ["software-defect"],
    66: ["config-error"],
    68: ["hardware-failure"],
    70: ["software-defect"],
    76: ["operational-error"],
    78: ["attack"],
    79: ["credential-expiry"],
    80: ["resource-exhaustion"],
    82: ["software-defect"],
    83: ["operational-error", "config-error"],
    89: ["upstream-failure", "network-fault"],
    85: ["software-defect"],
    86: ["software-defect"],
    87: ["config-error"],
    90: ["operational-error", "config-error"],
    92: ["config-error"],
    93: ["config-error"],
    94: ["hardware-failure", "upstream-failure"],
    96: ["config-error", "failover-gap"],
    99: ["operational-error"],
    100: ["resource-exhaustion"],
    101: ["software-defect", "config-error"],
    102: ["software-defect"],
    103: ["hardware-failure"],
    104: ["attack"],
    106: ["software-defect"],
    107: ["network-fault", "failover-gap"],
    108: ["software-defect", "config-error"],
    113: ["software-defect"],
    115: ["credential-expiry"],
    116: ["software-defect"],
    117: ["operational-error"],
    118: ["resource-exhaustion"],
    123: ["config-error"],
    127: ["credential-expiry"],
    128: ["upstream-failure", "config-error"],
    130: ["hardware-failure"],
    136: ["config-error"],
    139: ["upstream-failure", "network-fault"],
    141: ["attack"],
    143: ["attack"],
    144: ["software-defect"],
    147: ["hardware-failure"],
    152: ["hardware-failure"],
    153: ["software-defect"],
    155: ["undetermined"],
    156: ["hardware-failure"],
    157: ["operational-error", "config-error"],
    161: ["software-defect", "resource-exhaustion"],
    163: ["software-defect", "config-error"],
    164: ["software-defect"],
    166: ["credential-expiry"],
    170: ["config-error"],
    171: ["attack"],
    173: ["hardware-failure", "upstream-failure"],
    175: ["upstream-failure", "network-fault"],
    177: ["software-defect", "config-error"],
    181: ["software-defect"],
    183: ["network-fault", "upstream-failure"],
    184: ["operational-error"],
    185: ["attack"],
    192: ["software-defect"],
    194: ["attack"],
    197: ["attack"],
    198: ["operational-error"],
    199: ["operational-error", "resource-exhaustion"],
    200: ["software-defect", "hardware-failure"],
    201: ["config-error"],
    204: ["software-defect"],
    209: ["attack"],
    211: ["software-defect", "config-error"],
    212: ["resource-exhaustion"],
    213: ["hardware-failure"],
    214: ["hardware-failure"],
    218: ["operational-error"],
    221: ["failover-gap"],
    222: ["software-defect"],
    226: ["config-error"],
    229: ["software-defect"],
    233: ["software-defect"],
    234: ["attack"],
    235: ["attack"],
    237: ["software-defect", "resource-exhaustion"],
    241: ["software-defect", "config-error"],
    242: ["undetermined"],
    248: ["software-defect"],
    251: ["operational-error", "config-error"],
    260: ["config-error"],
    265: ["network-fault", "resource-exhaustion"],
    252: ["software-defect"],
    253: ["config-error"],
    258: ["config-error", "network-fault"],
    269: ["software-defect"],
    270: ["hardware-failure"],
    274: ["upstream-failure"],
    275: ["attack"],
    284: ["hardware-failure"],
    285: ["operational-error"],
    289: ["config-error"],
    294: ["operational-error"],
    296: ["credential-expiry"],
    303: ["software-defect"],
    304: ["hardware-failure"],
    305: ["hardware-failure", "failover-gap"],
    306: ["hardware-failure"],
    310: ["attack"],
    311: ["operational-error", "credential-expiry"],
    313: ["operational-error", "config-error"],
    315: ["attack"],
    320: ["not-a-report"],
    323: ["config-error"],
    327: ["config-error"],
    334: ["software-defect", "resource-exhaustion"],
    335: ["resource-exhaustion"],
    336: ["hardware-failure"],
    338: ["software-defect"],
    339: ["config-error"],
    344: ["operational-error"],
    345: ["hardware-failure", "upstream-failure"],
    347: ["software-defect"],
    351: ["config-error"],
    352: ["software-defect"],
    355: ["config-error"],
    364: ["attack"],
    367: ["software-defect"],
    356: ["config-error", "network-fault"],
    359: ["upstream-failure", "software-defect"],
    362: ["operational-error"],
    363: ["software-defect"],
    365: ["software-defect"],
    369: ["upstream-failure", "network-fault"],
    371: ["hardware-failure", "upstream-failure"],
    372: ["upstream-failure"],
    375: ["credential-expiry"],
    377: ["software-defect"],
    378: ["attack"],
    379: ["config-error", "resource-exhaustion"],
    381: ["upstream-failure"],
    382: ["operational-error", "software-defect"],
    383: ["resource-exhaustion", "config-error"],
    384: ["attack"],
    385: ["software-defect", "upstream-failure"],
}

PATTERNS: dict[str, list[tuple[str, int]]] = {
    "attack": [
        (r"\b(ddos|denial of service|malicious package|malicious actor|ransomware|phishing|cryptominer|crypto ?miner|malware|data breach|compromis\w+|brute forc\w+|unauthorized (access|third party)|security incident|zero[- ]day|exploit)\b", 5),
        (r"(攻撃|不正アクセス|情報漏えい|情報漏洩|侵害)", 5),
        (r"\b(hack(er|ed)?|breach)\b", 3),
    ],
    "credential-expiry": [
        (r"(certificate expir|expired certificate|cert(ificate)? expir|let'?s encrypt|tls certificate|expired (secret|token|credential)|credential rotation|secret rotation|key rotation)", 5),
        (r"(証明書.{0,12}(期限|失効|切れ)|資格情報.{0,8}(失効|期限)|秘密鍵|キーローテーション)", 5),
        (r"\b(expired secret|invalid credential|authentication credential)\b", 4),
    ],
    "hardware-failure": [
        (r"\b(hardware failure|faulty hardware|disk failure|power failure|power loss|loss of power|lightning|cooling (system|failure)|overheat|transformer|generator fail|pdu|ups )\b", 5),
        (r"(ハードウェア(の)?(異常|故障|障害)|落雷|電源(の)?(故障|喪失|障害)|冷却|変圧器|停電|ディスク(障害|故障))", 5),
        (r"\b(faulty (disk|memory|sram)|bad disk|unhealthy disk)\b", 4),
    ],
    "network-fault": [
        (r"\b(packet loss|network partition|bgp|route leak|routing (issue|problem|change)|dns (resolution|outage|failure|issue)|fiber cut|link failure|connectivity (issue|loss))\b", 4),
        (r"(パケットロス|経路(広告|漏えい|漏洩)|ネットワーク(の)?(分断|障害|切断)|dns.{0,6}(障害|失敗))", 5),
    ],
    "operational-error": [
        (r"\b(human error|operator error|accidentally (deleted|removed|dropped)|fat[- ]finger|manual error|inadvertent(ly)? (delet|remov))\b", 5),
        (r"(人的ミス|人為的|オペレーションミス|操作ミス|誤って(削除|本番|無効化)|作業ミス)", 5),
        (r"\b(accidental(ly)? (removal|deletion)|deleted the production)\b", 4),
    ],
    "config-error": [
        (r"\b(misconfiguration|configuration error|bad config|incorrect configuration|config(uration)? change|wrong (environment|configuration)|feature flag)\b", 4),
        (r"(設定ミス|設定の誤り|誤設定|構成ミス|コンフィグ)", 5),
        (r"\b(configuration (change|update|rollout))\b", 3),
    ],
    "software-defect": [
        (r"\b(software (bug|error|defect)|latent bug|regression|memory leak|race condition|null pointer|logic error|code bug|parser bug)\b", 5),
        (r"(ソフトウェアの(バグ|欠陥|不具合)|バグにより|不具合により|メモリリーク|競合状態)", 5),
        (r"\b(caused by a bug|due to a bug|bug in)\b", 4),
    ],
    "resource-exhaustion": [
        (r"\b(out of memory|oom|capacity (exhaust|limit|shortage)|connection pool|overloaded|resource (exhaustion|contention)|cpu (throttl|saturat)|ran out of|quota|filesystem becoming full|disk full)\b", 4),
        (r"(枯渇|過負荷|リソース不足|容量不足|コネクションプール|スロットリング)", 5),
        (r"\b(thundering herd|queue (backup|delay)|saturated)\b", 3),
    ],
    "upstream-failure": [
        (r"\b(third[- ]party|upstream (provider|outage|dependency)|cloud provider outage|external provider|dependency failure|vendor outage)\b", 4),
        (r"(上流|外部(サービス|事業者|プロバイダ)|依存(サービス|先)の障害)", 5),
        (r"\b(aws outage|provider outage|isp )\b", 3),
    ],
    "failover-gap": [
        (r"\b(failover (did not|failed|failure)|failed to fail ?over|unable to fail ?over|single point of failure|did not promote)\b", 5),
        (r"(フェイルオーバーが(機能せず|失敗|できず)|フェイルオーバに不足|冗長化が不十分|昇格ができず)", 5),
    ],
}

NEGATIVES = [
    (r"not (the result of |caused by |due to )?(an )?attack", "attack"),
    (r"not (a |the )?(cyber)?attack", "attack"),
    (r"not (the result of |caused by )?an attack or breach", "attack"),
    (r"was not a cyberattack", "attack"),
    (r"no unauthorized access", "attack"),
    (r"this was our (error|doing) and not the result of an attack", "attack"),
    (r"not the result of an attack or other security event", "attack"),
    (r"(mitigat\w+|defend\w+|response to|experienced)[^.]{0,40}ddos", "attack"),
    (r"ddos[^.]{0,40}(mitigat\w+|experience)", "attack"),
]

CAUSE_SENTENCE = re.compile(
    r"(root cause|caused by|was due to|due to|the cause|because |結果として|原因|起因)",
    re.IGNORECASE,
)


def cause_text(root_cause: str, title: str, content: str) -> str:
    parts = [root_cause, root_cause, title]
    sentences = re.split(r"(?<=[\.\!\?。])\s+", content or "")
    picked = [sentence for sentence in sentences if CAUSE_SENTENCE.search(sentence)]
    if picked:
        parts.extend(picked[:10])
    else:
        parts.append((content or "")[:2500])
    text = "\n".join(parts)
    for pattern, _category in NEGATIVES:
        text = re.sub(pattern, " ", text, flags=re.IGNORECASE)
    return text


def score_categories(text: str) -> list[tuple[str, int]]:
    found: list[tuple[str, int]] = []
    for category, patterns in PATTERNS.items():
        total = 0
        for pattern, weight in patterns:
            total += len(re.findall(pattern, text, flags=re.IGNORECASE)) * weight
        if total:
            found.append((category, total))
    found.sort(key=lambda item: (-item[1], list(PATTERNS).index(item[0])))
    return found


def choose(scores: list[tuple[str, int]]) -> list[str]:
    if not scores or scores[0][1] < 6:
        return ["undetermined"]
    chosen = [scores[0][0]]
    if len(scores) > 1 and scores[1][1] >= 8 and scores[1][1] >= scores[0][1] * 0.65:
        chosen.append(scores[1][0])
    return chosen


def classify(row: sqlite3.Row) -> list[str]:
    trigger = row["trigger"] or ""
    if any(marker in trigger for marker in NOT_A_REPORT):
        return ["not-a-report"]
    if row["id"] in OVERRIDES:
        return OVERRIDES[row["id"]]
    if any(marker in trigger for marker in UNDETERMINED_TRIGGER):
        return ["undetermined"]
    content = row["scraped_content"] or ""
    root_cause = (row["root_cause_analysis"] or "").strip()
    if len(content) < 200 and not root_cause:
        return ["undetermined"]
    focused = cause_text(root_cause, row["scraped_title"] or "", content)
    full = (content or "")[:20000]
    for pattern, _category in NEGATIVES:
        full = re.sub(pattern, " ", full, flags=re.IGNORECASE)
    focused_scores = dict(score_categories(focused))
    full_scores = dict(score_categories(full))
    combined = []
    for category in PATTERNS:
        total = focused_scores.get(category, 0) * 2 + full_scores.get(category, 0)
        if total:
            combined.append((category, total))
    combined.sort(key=lambda item: (-item[1], list(PATTERNS).index(item[0])))
    return choose(combined)


def ensure_column(connection: sqlite3.Connection) -> None:
    columns = {row[1] for row in connection.execute("PRAGMA table_info(incidents)")}
    if "root_cause_tags" not in columns:
        connection.execute("ALTER TABLE incidents ADD COLUMN root_cause_tags TEXT NOT NULL DEFAULT ''")


def apply(database: Path = DATABASE) -> dict[str, int]:
    connection = sqlite3.connect(database)
    connection.row_factory = sqlite3.Row
    ensure_column(connection)
    counts: dict[str, int] = {}
    for row in connection.execute("SELECT * FROM incidents"):
        tags = classify(row)
        for tag in tags:
            counts[tag] = counts.get(tag, 0) + 1
        connection.execute(
            "UPDATE incidents SET root_cause_tags = ? WHERE id = ?",
            (", ".join(tags), row["id"]),
        )
    connection.execute(
        """
        DELETE FROM incidents
        WHERE scraped_title = ?
           OR scraped_url LIKE '%/rfc789%'
           OR source_original LIKE '%/rfc789%'
        """,
        ("RFC 789: Vulnerabilities of network control protocols: An example",),
    )
    connection.commit()
    connection.close()
    return counts


def main() -> None:
    counts = apply()
    print("classified")
    for key, label in LABELS.items():
        print(f"{counts.get(key, 0):4}  {label}")


if __name__ == "__main__":
    main()
