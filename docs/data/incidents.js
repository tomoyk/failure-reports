window.FAILURE_REPORTS = {
 "generatedAt": "2026-10-17T09:07:14+00:00",
 "triggerLabels": {
  "Application bugs": "アプリケーションのバグ",
  "Hardware fault": "ハードウェア障害",
  "Infrastructure failure": "インフラ障害",
  "Job Failure": "ジョブの失敗",
  "Maintainance": "メンテナンス",
  "Misconfiguration": "設定ミス",
  "Request increase": "リクエスト増加",
  "External failure": "外部要因",
  "Security": "セキュリティ",
  "Other": "その他"
 },
 "rootCauseLabels": {
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
  "not-a-report": "障害報告ではない"
 },
 "incidents": [
  {
   "id": 1,
   "title": "Tumblr Finally Starts Recovering After 24 Hours Of Downtime | TechCrunch",
   "url": "https://techcrunch.com/2010/12/06/tumblr-downtime/",
   "provider": "Tumblr",
   "date": "2010-12-06",
   "year": 2010,
   "datetimeBegin": "2010-12-06T00:00:00Z",
   "datetimeEnd": "2010-12-07T00:00:00Z",
   "tz": "UTC",
   "duration": "24 hours",
   "durationMinutes": 1440,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Database cluster crashed during maintenance",
   "rootCause": "MySQL のバグにより、ORDER BY が適用されず、レプリカ間で結果が不一致となった",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 2,
   "title": "Asana's September 8 outage",
   "url": "https://asana.com/inside-asana/yesterdays-outage",
   "provider": "Asana",
   "date": "2016-09-08",
   "year": 2016,
   "datetimeBegin": "2016/09/08 7:25:00",
   "datetimeEnd": "2016-09-08 8:48",
   "tz": "PDT",
   "duration": "約83分",
   "durationMinutes": 83,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Asana公式「Yesterday’s outage」記事（2016年9月9日掲載）",
   "rootCause": "前夜にデプロイされた新しいコードのバグにより、過剰なログ記録が発生しウェブサーバのCPUが逼迫し、応答遅延とDB接続の飽和を引き起こした",
   "extraUrl": "なし（記事自身）",
   "archived": false
  },
  {
   "id": 3,
   "title": "Incident Review: What Comes Up Must First Go Down",
   "url": "https://www.honeycomb.io/blog/incident-review-what-comes-up-must-first-go-down",
   "provider": "Honeycomb",
   "date": "2023-07-25",
   "year": 2023,
   "datetimeBegin": "2023-07-25T13:40:00Z",
   "datetimeEnd": "2023-07-25T14:48:00Z",
   "tz": "UTC",
   "duration": "68 min",
   "durationMinutes": 68,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Retriever cluster misbehavior leading to full service outage",
   "rootCause": "フィーチャーフラグのバグにより Retriever ノードがキャッシュ更新を停止し、MySQL が過負荷となってクラッシュした",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 4,
   "title": "A Post Mortem on this Morning's Incident",
   "url": "https://blog.cloudflare.com/a-post-mortem-on-this-mornings-incident/",
   "provider": "Cloudflare",
   "date": "2016-06-20",
   "year": 2016,
   "datetimeBegin": "2016/06/20 12:10:00",
   "datetimeEnd": "2016-06-20 ≈その後（Packet loss 解消後）",
   "tz": "UTC",
   "duration": "約数十分以内（詳細なDuration不明）",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "Cloudflare公式「A Post Mortem on this Morning's Incident」（2016年6月21日公開）",
   "rootCause": "主要トランジットプロバイダー（Telia Carrier）のバックボーン回線で大規模なパケットロスが発生したことが根本原因。TCP再送では対処できず、エッジとオリジン間通信に影響し、522エラーが多発",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 5,
   "title": "Incident review: API and Dashboard outage on 10 October 2017",
   "url": "https://gocardless.com/blog/incident-review-api-and-dashboard-outage-on-10th-october/",
   "provider": "GoCardless",
   "date": "2017-10-10",
   "year": 2017,
   "datetimeBegin": "2017-10-10 午後（おそらく 15:09）",
   "datetimeEnd": "2017/10/10 16:59:00",
   "tz": "BST",
   "duration": "約1時間50分",
   "durationMinutes": 110,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "failover-gap"
   ],
   "summary": "GoCardless公式「Incident review: API and Dashboard outage on 10 October 2017」記事（最終更新：2024年6月）",
   "rootCause": "プライマリDBノードのハードウェア故障により自動フェイルオーバーが機能せず、同期レプリカへの昇格ができずにフェイルオーバー遅延。結果として1～2分で済むはずの障害が約1時間50分に拡大。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 6,
   "title": "Summary of the Amazon EC2 Issues in the Asia Pacific (Tokyo) Region (AP-NORTHEAST-1)",
   "url": "https://aws.amazon.com/jp/message/56489/",
   "provider": "AWS",
   "date": "2019-08-23",
   "year": 2019,
   "datetimeBegin": "2019/08/23 12:36:00",
   "datetimeEnd": "2019-08-23 15:21（冷却回復）、18:30（ほとんど復旧）／16:05（APIリストア）",
   "tz": "JST",
   "duration": "約2時間45分（インスタンス停止・EBS劣化）／約5時間54分（API完全復旧含む）",
   "durationMinutes": 354,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "hardware-failure"
   ],
   "summary": "AWS公式「Summary of the Amazon EC2 and Amazon EBS Service Event in the Tokyo (AP-NORTHEAST-1) Region」記事（2019年8月25日初版、8月28日更新）",
   "rootCause": "制御ホストのフェイルオーバー中に発生した制御システムのバグが、冷却システムの正常動作を阻害したことが直接のトリガ。データセンター制御システムのサードパーティ製制御コードにバグがあり、AZ内の冷却システムが安全モードに移行せず過熱 → 一部冷却停止によりEC2インスタンスが停止・EBSが劣化し、APIにも影響。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 7,
   "title": "Post mortem on the Cloudflare Control Plane and Analytics Outage",
   "url": "https://blog.cloudflare.com/post-mortem-on-cloudflare-control-plane-and-analytics-outage/",
   "provider": "Cloudflare",
   "date": "2023-11-02",
   "year": 2023,
   "datetimeBegin": "2023/11/02 11:43:00",
   "datetimeEnd": "2023/11/04 4:25:00",
   "tz": "UTC",
   "duration": "40:42:00",
   "durationMinutes": 2442,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "failover-gap"
   ],
   "summary": "Post mortem on the Cloudflare Control Plane and Analytics Outage",
   "rootCause": "DCの電力供給に原因で障害が発生した．一部のシステムのフェイルオーバに不足があった．",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 8,
   "title": "Summary of the AWS Service Event in the US East Region",
   "url": "https://aws.amazon.com/message/67457/",
   "provider": "AWS",
   "date": "2011-08-07",
   "year": 2011,
   "datetimeBegin": "2011-08-07T21:00:00Z",
   "datetimeEnd": "2011-08-08T06:00:00Z",
   "tz": "UTC",
   "duration": "9h",
   "durationMinutes": 540,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "EU-West power failure affected RDS and EC2",
   "rootCause": "データセンタの変圧器の故障とバックアップ電源の切替失敗により、RDS インスタンスが停止した",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 9,
   "title": "Salesforce's database outage: Why it happened and how to prevent another one",
   "url": "https://www.datacenterdynamics.com/en/opinions/salesforce-database-outage-why-it-happened-and-how-prevent-another-one/#:~:text=Salesforce%27s%20database%20outage%3A%20Why%20it,to%20anyone%20who%20could%20login",
   "provider": "Salesforce",
   "date": "2016-05-10",
   "year": 2016,
   "datetimeBegin": "2016-05-10T05:00:00Z",
   "datetimeEnd": "2016-05-10T18:00:00Z",
   "tz": "UTC",
   "duration": "13 hours",
   "durationMinutes": 780,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Power failure and storage bug caused data loss",
   "rootCause": "ハードウェアの異常により、PostgreSQL プロセスがセグフォールトでクラッシュした",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 10,
   "title": "Summary of the October 22, 2012 AWS Service Event in the US-East Region",
   "url": "https://aws.amazon.com/message/680342/",
   "provider": "AWS",
   "date": "2012-10-22",
   "year": 2012,
   "datetimeBegin": "2012/10/22 10:00:00",
   "datetimeEnd": "2012-10-22 16:15（EBS復旧）／21:50（ELB関連全復旧）",
   "tz": "PDT",
   "duration": "約6時間（EBS復旧）／約12時間（全復旧）",
   "durationMinutes": 720,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "network-fault"
   ],
   "summary": "2012年当時のAWS公式調査報告記事およびAvailability Digestによる技術解説",
   "rootCause": "内部DNS伝播失敗によりEBSサーバが故障サーバへ接続し続け、メモリリークが発生してI/Oが停止",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 11,
   "title": "Does OpenTelemetry in .NET Cause Performance Degradation?",
   "url": "https://www.honeycomb.io/blog/rds-performance-degradation-postmortem",
   "provider": "Honeycomb",
   "date": "2019-07-26",
   "year": 2019,
   "datetimeBegin": "2019-07-26T00:50:00Z",
   "datetimeEnd": "2019-07-26T01:10:00Z",
   "tz": "UTC",
   "duration": "20 min",
   "durationMinutes": 20,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "resource-exhaustion"
   ],
   "summary": "RDS Performance Degradation – Postmortem",
   "rootCause": "AWS RDS の基盤で性能劣化が発生し、アプリケーションからの新規接続が殺到して RDS が過負荷に陥った",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 12,
   "title": "Connectivity Issues",
   "url": "https://discordstatus.com/incidents/dj3l6lw926kl",
   "provider": "Discord",
   "date": "2017-03-20",
   "year": 2017,
   "datetimeBegin": "2017/03/20 11:38:00",
   "datetimeEnd": "2017/03/20 16:54:00",
   "tz": "UTC",
   "duration": "5:16:00",
   "durationMinutes": 316,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "resource-exhaustion"
   ],
   "summary": "Connectivity Issues",
   "rootCause": "ネットワーク切断にともなうフェイルオーバーでメモリ不足が発生し，応答しなくなる．",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 13,
   "title": "Unavailable Guilds & Connection Issues",
   "url": "https://discordstatus.com/incidents/qk9cdgnqnhcn",
   "provider": "Discord",
   "date": "2017-10-13",
   "year": 2017,
   "datetimeBegin": "2017/10/13 14:18:00",
   "datetimeEnd": "2017/10/13 14:57:00",
   "tz": "UTC",
   "duration": "0:39:00",
   "durationMinutes": 39,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Unavailable Guilds & Connection Issues",
   "rootCause": "HA構成のRedisクラスタがGCPによって自動移行(再起動)された．",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 14,
   "title": "What We Learned from the Recent Mandrill Outage | Mailchimp",
   "url": "https://mailchimp.com/what-we-learned-from-the-recent-mandrill-outage/",
   "provider": "Mailchimp",
   "date": "2019-02-04",
   "year": 2019,
   "datetimeBegin": "2019/02/04 5:35:00",
   "datetimeEnd": "2019/02/05 22:09:00",
   "tz": "UTC",
   "duration": "40:34:00",
   "durationMinutes": 2434,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "What We Learned from the Recent Mandrill Outage | Mailchimp",
   "rootCause": "auto vaccumが失敗しPostgreSQLでXIDが枯渇",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 15,
   "title": "Trust Status",
   "url": "https://status.salesforce.com/incidents/13457",
   "provider": "Salesforce",
   "date": "2024-11-15",
   "year": 2024,
   "datetimeBegin": "2024/11/15 5:55:00",
   "datetimeEnd": "2024/11/15 15:22:00",
   "tz": "UTC",
   "duration": "9:27:00",
   "durationMinutes": 567,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "国内の複数組織に影響が及んだSalesforceのシステム障害についてまとめてみた - piyolog",
   "rootCause": "key management systemのkey retentionで出来ていなかった．",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 16,
   "title": "Transaction ID Wraparound in Postgres",
   "url": "https://blog.sentry.io/transaction-id-wraparound-in-postgres/",
   "provider": "Sentry",
   "date": "2015-07-20",
   "year": 2015,
   "datetimeBegin": "2015-07-20（詳細時刻不明）",
   "datetimeEnd": "2015-07-20（autovacuum終了・復旧）",
   "tz": "UTC（推定）",
   "duration": "数時間〜US営業時間中（詳細Duration不明）",
   "durationMinutes": null,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion",
    "config-error"
   ],
   "summary": "Sentry公式「Transaction ID Wraparound in Postgres」（2015年7月23日掲載）",
   "rootCause": "PgのXIDカウンタが32bitで有限、autovacuumの遅延や設定不足によりXIDが枯渇寸前になり、wraparound防止機構が働いてDBが書き込み停止。autovacuum完了まで待機しつつ、VACUUM_SINGLE_USERやテーブルtruncate、設定調整により対応。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 17,
   "title": "That Old Certificate Expired and Started an Outage. This is What Happened Next - Shopify",
   "url": "https://shopify.engineering/that-old-certificate-expired-and-started-an-outage-this-is-what-happened-next",
   "provider": "Shopify",
   "date": "2021-09-30",
   "year": 2021,
   "datetimeBegin": "2021/09/30 10:15:00",
   "datetimeEnd": "2021-09-30 ～数十分以内（該当接続の切断自動で発生）",
   "tz": "EST (推定)",
   "duration": "約数十分",
   "durationMinutes": null,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "Shopify公式「That Old Certificate Expired and Started an Outage. This is What Happened Next」（2022年1月12日公開）",
   "rootCause": "Let’s Encrypt の旧ルート証明書の有効期限切れにより、Shopify の内部サービス間通信で使用されているRuby用 `httpclient` ライブラリが組み込む、6年以上更新されていないルート証明書バンドルが信頼されずTLS検証に失敗。結果としてモノリスの内部サービス間接続がエラーを出し始めた",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 18,
   "title": "October 21 post-incident analysis",
   "url": "https://github.blog/news-insights/company-news/oct21-post-incident-analysis/",
   "provider": "GitHub",
   "date": "2018-10-21",
   "year": 2018,
   "datetimeBegin": "2018/10/21 22:52:00",
   "datetimeEnd": "2018-10-22 ≈翌日同時刻まで（約24時間11分）",
   "tz": "UTC",
   "duration": "約24時間11分",
   "durationMinutes": 1451,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "failover-gap"
   ],
   "summary": "GitHub公式「October 21 post-incident analysis」記事（公開日：2018年10月30日、更新：2021年12月19日）",
   "rootCause": "US東海岸ネットワークハブとデータセンター間の接続が断たれたことで同期レプリカ間に差分が生まれ、MySQLクラスタのフェイルオーバーができず、24時間以上のサービス劣化が発生",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 19,
   "title": "October 21 post-incident analysis",
   "url": "https://github.blog/news-insights/company-news/oct21-post-incident-analysis/",
   "provider": "GitHub",
   "date": "2018-10-21",
   "year": 2018,
   "datetimeBegin": "2018-10-21T22:52:00Z",
   "datetimeEnd": "2018-10-23T23:03:00Z",
   "tz": "UTC",
   "duration": "24h 11min",
   "durationMinutes": 1451,
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "GitHub service disruption due to MySQL failover issue",
   "rootCause": "ネットワークの分断で Orchestrator が誤ってフェイルオーバーし、レプリケーションラグによってデータ不整合が発生した",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 20,
   "title": "API, ChatGPT & Sora Facing Issues - OpenAI Status",
   "url": "https://status.openai.com/incidents/ctrsv3lwd797",
   "provider": "OpenAI",
   "date": "2024-12-11",
   "year": 2024,
   "datetimeBegin": "2024/12/11 7:16:00",
   "datetimeEnd": "2024/12/11 11:38:00",
   "tz": "UTC",
   "duration": "4:22:00",
   "durationMinutes": 262,
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
   "rootCause": "Kubernetes コントロール プレーンが意図せず過負荷になり，重要なシステム全体に連鎖的な障害が発生した．Kubernetes コントロール プレーンの詳細なメトリックを収集するための新しいテレメトリ サービスを導入した．その結果，Kuebernetes APIへの呼び出しが増え過剰な負荷が発生した．Kubernetesのコントロールプレーンが担う名前解決やサービスディスカバリが失敗した．",
   "extraUrl": "https://www.junctionlabs.io/blog/dns-and-the-december-2024-openai-outage",
   "archived": false
  },
  {
   "id": 21,
   "title": "Details of the Cloudflare outage on July 2, 2019",
   "url": "https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/",
   "provider": "Cloudflare",
   "date": "2019-07-02",
   "year": 2019,
   "datetimeBegin": "2019/07/02 13:42:00",
   "datetimeEnd": "2019-07-02 14:09（CPU回復）／14:52（WAF復旧）",
   "tz": "UTC",
   "duration": "約27分（大規模影響）／約70分（WAF機能完全復旧）",
   "durationMinutes": 70,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare公式「Details of the Cloudflare outage on July 2, 2019」記事（公開日：2019年7月12日）",
   "rootCause": "WAFにデプロイされた単一の不正な正規表現ルールがHTTP/HTTPSを扱う全CPUコアを100%使用に追い込んだことで、CDN／プロキシ／WAF機能全体がダウン。テストスイートでCPU使用率異常を検知せず、グローバル展開されてしまった点が問題を複雑化",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 22,
   "title": "The PlayStation Network Outage Is Modern Gaming In A Nutshell - Aftermath",
   "url": "https://aftermath.site/sony-playstation-network-outage-psn-ps5-pc",
   "provider": "PlayStation",
   "date": "2025-02-10",
   "year": 2025,
   "datetimeBegin": "2025-02-10",
   "datetimeEnd": "",
   "tz": "",
   "duration": "1日",
   "durationMinutes": 1440,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "",
   "rootCause": "オペレーションミス",
   "extraUrl": "https://aftermath.site/sony-playstation-network-outage-psn-ps5-pc",
   "archived": false
  },
  {
   "id": 23,
   "title": "Heroku Status",
   "url": "https://status.heroku.com/incidents/2453",
   "provider": "Heroku",
   "date": "2023-06-08",
   "year": 2023,
   "datetimeBegin": "2023-06-08T00:00:00Z",
   "datetimeEnd": "2023-06-08T00:30:00Z",
   "tz": "UTC",
   "duration": "30 min",
   "durationMinutes": 30,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Auth service failed due to FK integer overflow",
   "rootCause": "外部キーの型が主キーより小さく、上限を超えて挿入エラーが発生した",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 24,
   "title": "Cloudflare incident on February 6, 2025",
   "url": "https://blog.cloudflare.com/cloudflare-incident-on-february-6-2025/",
   "provider": "Cloudflare",
   "date": "2025-02-06",
   "year": 2025,
   "datetimeBegin": "2025/02/06 8:14:00",
   "datetimeEnd": "2025-02-06 09:13（主要障害復旧）／09:36（Durable Objects エラー収束）",
   "tz": "UTC",
   "duration": "約59分（R2完全障害）／約82分（エラー収束含む）",
   "durationMinutes": 82,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Cloudflare公式「Cloudflare incident on February 6, 2025」（2025年2月7日掲載）",
   "rootCause": "ルーチンのフィッシング報告対応中に、人為的ミスとバリデーション不足により、誤って本番用R2 Gatewayサービスが無効化され、R2および依存サービスが全停止。ただしデータの喪失・破損はなし。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 25,
   "title": "Root cause analysis: significantly elevated error rates on 2019‑07‑10",
   "url": "https://stripe.com/en-jp/rcas/2019-07-10",
   "provider": "Stripe",
   "date": "2019-07-10",
   "year": 2019,
   "datetimeBegin": "2019/07/10 16:36:00",
   "datetimeEnd": "2019-07-10 17:02／2019-07-10 21:14–22:47",
   "tz": "UTC",
   "duration": "約26分（第1回）／約1時間33分（第2回）",
   "durationMinutes": 93,
   "triggers": [
    "Other"
   ],
   "triggerNote": "primary election failure（データベースノード停止）および設定変更とバグの相互作用による再発",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Stripe公式「Root cause analysis: significantly elevated error rates on 2019-07-10」記事（公開日：2019年7月12日頃）",
   "rootCause": "first degradation: データベースクラスタのプライマリ選出ができず、シャードの停止によるサービス劣化に起因。second degradation: ロールバック後のデータベースの選挙プロトコルの不具合とプロダクション設定変更が予期せぬ形で相互作用し、再びAPI障害を誘発。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 26,
   "title": "Kafkapocalypse: a postmortem on our service outage | Parse.ly",
   "url": "https://www.parse.ly/kafkapocalypse/",
   "provider": "Parsely",
   "date": "2015-03-26",
   "year": 2015,
   "datetimeBegin": "2015/03/26 0:00:00",
   "datetimeEnd": "2015/03/27 0:00:00",
   "tz": "UTC",
   "duration": "-",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Kafkapocalypse: a postmortem on our service outage | Parse.ly",
   "rootCause": "EC2で動いているkafkaが，ENIのサポートしている帯域を上回った．previewシステムを動かしていたため，通常時よりもトラフィックが増加していた．",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 27,
   "title": "An Outage Post-Mortem for August 22nd – what went wrong?",
   "url": "https://buildkite.com/resources/blog/outage-post-mortem-for-august-22nd/",
   "provider": "Buildkite",
   "date": "2016-08-22",
   "year": 2016,
   "datetimeBegin": "2016/08/22 17:21:00",
   "datetimeEnd": "2016/08/22 23:10:00",
   "tz": "UTC",
   "duration": "5:49:00",
   "durationMinutes": 349,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion",
    "operational-error"
   ],
   "summary": "An Outage Post-Mortem for August 22nd – what went wrong?",
   "rootCause": "データベースサーバのダウングレードで高負荷に耐えられず．",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 28,
   "title": "Postmortem of Service Outage at 3.4M CCU",
   "url": "https://www.fortnite.com/news/postmortem-of-service-outage-at-3-4m-ccu",
   "provider": "Fortnite",
   "date": "2018-02-04",
   "year": 2018,
   "datetimeBegin": "2018/02/04 18:30:00",
   "datetimeEnd": "2018/02/04 20:20:00",
   "tz": "UTC",
   "duration": "1:50:00",
   "durationMinutes": 110,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Postmortem of Service Outage at 3.4M CCU",
   "rootCause": "(3)キャッシュシステムの障害でリクエスト数が増加し高負荷に",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 29,
   "title": "Postmortem of Service Outage at 3.4M CCU",
   "url": "https://www.fortnite.com/news/postmortem-of-service-outage-at-3-4m-ccu",
   "provider": "Fortnite",
   "date": "2018-02-04",
   "year": 2018,
   "datetimeBegin": "2018/02/04 22:00:00",
   "datetimeEnd": "2018/02/05 0:15:00",
   "tz": "UTC",
   "duration": "2:15:00",
   "durationMinutes": 135,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Postmortem of Service Outage at 3.4M CCU",
   "rootCause": "(4)内部ロードバランサが高負荷でエラーに",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 30,
   "title": "Postmortem of Service Outage at 3.4M CCU",
   "url": "https://www.fortnite.com/news/postmortem-of-service-outage-at-3-4m-ccu",
   "provider": "Fortnite",
   "date": "2018-02-04",
   "year": 2018,
   "datetimeBegin": "2018/02/04 22:00:00",
   "datetimeEnd": "2018/02/05 0:15:00",
   "tz": "UTC",
   "duration": "-",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Postmortem of Service Outage at 3.4M CCU",
   "rootCause": "(1)アクセス数の増加にともないキューにリクエストが滞留",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 31,
   "title": "Postmortem of Service Outage at 3.4M CCU",
   "url": "https://www.fortnite.com/news/postmortem-of-service-outage-at-3-4m-ccu",
   "provider": "Fortnite",
   "date": "2018-02-04",
   "year": 2018,
   "datetimeBegin": "2018/02/04 22:00:00",
   "datetimeEnd": "2018/02/05 0:15:00",
   "tz": "UTC",
   "duration": "-",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Postmortem of Service Outage at 3.4M CCU",
   "rootCause": "(2)DBコネクションプールの枯渇",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 32,
   "title": "Postmortem of Service Outage at 3.4M CCU",
   "url": "https://www.fortnite.com/news/postmortem-of-service-outage-at-3-4m-ccu",
   "provider": "Fortnite",
   "date": "2018-02-04",
   "year": 2018,
   "datetimeBegin": "2018/02/04 22:00:00",
   "datetimeEnd": "2018/02/05 0:15:00",
   "tz": "UTC",
   "duration": "-",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Postmortem of Service Outage at 3.4M CCU",
   "rootCause": "(5)リージョン内のインスタンス数の上限によるスロットリング",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 33,
   "title": "Postmortem of Service Outage at 3.4M CCU",
   "url": "https://www.fortnite.com/news/postmortem-of-service-outage-at-3-4m-ccu",
   "provider": "Fortnite",
   "date": "2018-02-04",
   "year": 2018,
   "datetimeBegin": "2018/02/04 22:00:00",
   "datetimeEnd": "2018/02/05 0:15:00",
   "tz": "UTC",
   "duration": "-",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Postmortem of Service Outage at 3.4M CCU",
   "rootCause": "(6)IPアドレスの枯渇(キャパシティ)",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 34,
   "title": "How to Handle Kubernetes Health Checks",
   "url": "https://careersatdoordash.com/blog/how-to-handle-kubernetes-health-checks/",
   "provider": "DoorDash",
   "date": "2022-11-25",
   "year": 2022,
   "datetimeBegin": "2022-11-25 Black Friday ≈夕方（具体時刻不明）",
   "datetimeEnd": "同日中（具体時刻不明）",
   "tz": "UTC（推定）",
   "duration": "数十分（推定）",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "DoorDash公式「How to Handle Kubernetes Health Checks」（2022年8月9日掲載）",
   "rootCause": "Black Friday の混雑下で readiness probe の失敗が大量発生したことが直接のトリガ。大規模なPodがreadiness probeに失敗し，Kubernetes Serviceから除外。残留Podに要求が集中し，CPUが急激に上昇し，SLO違反・レイテンシ悪化が発生。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 35,
   "title": "Cloudflare incident on August 21, 2025",
   "url": "https://blog.cloudflare.com/cloudflare-incident-on-august-21-2025/",
   "provider": "Cloudflare",
   "date": "2025-08-21",
   "year": 2025,
   "datetimeBegin": "2025/08/21 16:27:00",
   "datetimeEnd": "2025-08-21 19:38（大幅改善）／20:18（断続的レイテンシ続く）",
   "tz": "UTC",
   "duration": "約3時間11分（大幅影響）／約3時間51分（断続影響含む）",
   "durationMinutes": 231,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "resource-exhaustion"
   ],
   "summary": "Cloudflare公式「Cloudflare incident on August 21, 2025」記事（2025 年 8 月 22 日掲載）",
   "rootCause": "1 顧客によるトラフィック急増がリンクを飽和させ、AWS が BGP アドバタイズを撤回したことで迂回経路も飽和。既存のリンクの片方が半容量稼働や DCI（Data Center Interconnect）の容量不足もあり、混雑を増幅させた。AWS us-east-1 を起点とする単一顧客からのトラフィック急増により、Cloudflare と AWS us-east-1 間のピア接続が飽和し、遅延・パケットロス・オリジンへの接続失敗を引き起こした",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 36,
   "title": "The Discovery of Apache ZooKeeper's Poison Packet",
   "url": "https://www.pagerduty.com/blog/community/the-discovery-of-apache-zookeepers-poison-packet/",
   "provider": "PagerDuty",
   "date": null,
   "year": null,
   "datetimeBegin": "2015-05-？（詳細な開始日時なし）",
   "datetimeEnd": "2015-05-？（問題解明完了まで）",
   "tz": "UTC（推定）",
   "duration": "数週間以上の調査期間（正確なDuration不明）",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の「毒パケット」（非常に大きな scheme_len フィールドを含む）がZooKeeperリーダーを停止させ、クラスタ全体のロックアップを誘発",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "PagerDuty公式ブログ記事「The Discovery of Apache ZooKeeper’s Poison Packet」（2015年5月7日公開）",
   "rootCause": "ZooKeeperが境界チェック無しの大きすぎるscheme_len値によりOOMを起こし、クリティカルスレッドが死んでもリーダーが機能し続けてクラスタ全体が応答不能状態に。更に、IPSecトランスポートモードでのTCPチェックサムスキップ（RFCによる仕様）、およびカーネルのAES-NIモジュールとXen仮想化環境の組み合わせが、パケットの破損とZooKeeperへの毒パケット注入を可能にした",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 37,
   "title": "Tarsnap outage 2016-07-24 10:15:19--11:40:04",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00035.html",
   "provider": "Tarsnap",
   "date": "2016-07-24",
   "year": 2016,
   "datetimeBegin": "2016-07-24 10:15:19",
   "datetimeEnd": "2016-07-24 11:40:04",
   "tz": "UTC",
   "duration": "1時間24分",
   "durationMinutes": 84,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Tarsnap outage 2016-07-24 10:15:19--11:40:04",
   "rootCause": "2016年7月24日、作成途中のアーカイブは「too many network failures」で失敗し、約85分間は新規の作成も取得もできなかった。顧客データは残り、影響した利用者にストレージ料金2日分が付与された。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 38,
   "title": "Tarsnap outage 2017-02-28 17:37 -- 2017-02-28 ~21:52",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00038.html",
   "provider": "Tarsnap",
   "date": "2017-02-28",
   "year": 2017,
   "datetimeBegin": "2017-02-28 17:37:00",
   "datetimeEnd": "2017-02-28 21:52:00",
   "tz": "UTC",
   "duration": "4時間15分",
   "durationMinutes": 255,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Tarsnap outage 2017-02-28 17:37 -- 2017-02-28 ~21:52",
   "rootCause": "2017年2月28日17時37分頃から、アーカイブの作成は約21時52分まで失敗し、進行中の作成もほぼ失敗した。一覧と取り出しは約21時03分まで失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 39,
   "title": "Tarsnap partial outage, 2021-12-07 18:00-19:50 UTC",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00045.html",
   "provider": "Tarsnap",
   "date": "2021-12-07",
   "year": 2021,
   "datetimeBegin": "2021-12-07 18:00:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Tarsnap partial outage, 2021-12-07 18:00-19:50 UTC",
   "rootCause": "障害開始の約30分後、Amazon SimpleDBへの要求の多くがタイムアウトした。Tarsnapは残高の読取エラーでは残高が正でないと分かるまで要求を許し、エラーが早く返ると要求を通す挙動に戻った。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 40,
   "title": "Tarsnap outage 2023-07-02",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00048.html",
   "provider": "Tarsnap",
   "date": "2023-07-02",
   "year": 2023,
   "datetimeBegin": "2023-07-02 13:07:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Tarsnap outage 2023-07-02",
   "rootCause": "2023年7月2日13時07分頃、Tarsnapの主サーバーがAWSのシステムステータスチェック失敗で停止した。障害直前の数秒に保存されたアーカイブの情報がメタデータに欠けていた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 41,
   "title": "2023-07-02 -- 2023-07-03 Tarsnap outage post-mortem",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00050.html",
   "provider": "Tarsnap",
   "date": "2023-07-02",
   "year": 2023,
   "datetimeBegin": "2023-07-02 13:07:58",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "2023-07-02 -- 2023-07-03 Tarsnap outage post-mortem",
   "rootCause": "2023年7月2日13時07分頃、EC2のus-east-1にある中枢サーバーがシステムステータスチェック失敗で停止した。広域のEC2障害の報告はなく、孤立したハードウェア故障の可能性が高いとされた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 42,
   "title": "A deep dive into Cloudflare’s September 12, 2025 dashboard and API outage",
   "url": "https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/",
   "provider": "Cloudflare",
   "date": "2025-09-12",
   "year": 2025,
   "datetimeBegin": "2025-09-12 16:32:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "resource-exhaustion"
   ],
   "summary": "A deep dive into Cloudflare’s September 12, 2025 dashboard and API outage",
   "rootCause": "ダッシュボードの不具合で、状態やプロパティが変わるたびにオブジェクトが作り直され、ReactがuseEffectを毎回再実行した。不要な呼び出しがTenant Service APIに集中し、多数のAPIとダッシュボードが止まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 43,
   "title": "NTT西日本による通信障害の原因が判明、VLAN IDの設定ミスでループ発生",
   "url": "https://xtech.nikkei.com/atcl/nxt/column/18/00001/11102/",
   "provider": "NTT西日本",
   "date": "2025-09-16",
   "year": 2025,
   "datetimeBegin": "2025-09-16",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "operational-error"
   ],
   "summary": "NTT西日本による通信障害の原因が判明、VLAN IDの設定ミスでループ発生",
   "rootCause": "セキュリティーサーバーの更改で、接続するL2スイッチの現用系と予備系に同じVLAN IDを設定し、ループが起きた。大阪・京都・兵庫のひかり電話と固定電話で約227万契約などに通信障害が出た。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 44,
   "title": "August 28 Kafka Outages – What Happened and How We’re Improving",
   "url": "https://www.pagerduty.com/eng/august-28-kafka-outages-what-happened-and-how-were-improving/",
   "provider": "PagerDuty",
   "date": "2025-08-25",
   "year": 2025,
   "datetimeBegin": "2025/08/25 0:00:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "August 28 Kafka Outages – What Happened and How We’re Improving",
   "rootCause": "2025年8月28日3時53分UTCにKafkaの障害が起き、対外連絡の中断でステータスページの更新が遅れた。同日16時38分UTCの小規模な2件目は、初回の教訓で50分以内に顧客影響を抑えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 45,
   "title": "IBMクラウド障害の引き金となった「誤ったルート広告」、他社で起こる可能性も",
   "url": "https://xtech.nikkei.com/atcl/nxt/column/18/00989/070800030/",
   "provider": "IBM Cloud",
   "date": "2020-06-10",
   "year": 2020,
   "datetimeBegin": "2020-06-10",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "IBMクラウド障害の引き金となった「誤ったルート広告」、他社で起こる可能性も",
   "rootCause": "2020年6月10日 午前6時55分頃、外部のネットワークプロバイダーが誤ったルート広告（ルーター間での経路情報の通知）を行ったため、インターネットのトラフィックに深刻な影響が発生しました。これにより、IBM Cloudのインターネット・ネットワークに障害が発生しました。これは、東京リージョンのデータセンターだけではなくIBM Cloudの複数のデータセンターに以下のような影響を及ぼしました。",
   "extraUrl": "https://xtech.nikkei.com/atcl/nxt/column/18/00989/070800030/",
   "archived": false
  },
  {
   "id": 46,
   "title": "More details about the October 4 outage",
   "url": "https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/",
   "provider": "Meta",
   "date": "2021-10-04",
   "year": 2021,
   "datetimeBegin": "2021-10-04",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "More details about the October 4 outage",
   "rootCause": "グローバルなバックボーン容量を管理するシステムが障害の起点だった。コマンドを監査する道具に不具合があり、問題のコマンドを正しく止められなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 47,
   "title": "平成 29 年 8 月に発生した大規模なインターネット接続障害に関する検証報告",
   "url": "https://www.soumu.go.jp/main_content/000523153.pdf#page=2.35",
   "provider": "Google",
   "date": "2017-08-25",
   "year": 2017,
   "datetimeBegin": "2017-08-25",
   "datetimeEnd": "",
   "tz": "",
   "duration": "23分",
   "durationMinutes": 23,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "network-fault"
   ],
   "summary": "平成 29 年 8 月に発生した大規模なインターネット接続障害に関する検証報告",
   "rootCause": "平成29年8月の大規模なインターネット接続障害について、電気通信事故検証会議の検証報告の目次が示されている。人為的ミスの未然防止や事業者間の情報共有などの項目が並んでいる。",
   "extraUrl": "https://www.geekpage.jp/blog/?id=2017-8-29-1",
   "archived": false
  },
  {
   "id": 48,
   "title": "Google Cloud Status Dashboard",
   "url": "https://status.cloud.google.com/incident/cloud-networking/19005",
   "provider": "Google",
   "date": "2019-03-06",
   "year": 2019,
   "datetimeBegin": "2019-03-06 23:37:00",
   "datetimeEnd": "",
   "tz": "PST",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "影響を受けた顧客へ謝罪し、Cloud Routerのコントロールプレーンが顧客ごとにタスクを割り当て、そのタスクと顧客のVPCとの間に経路を作ると記している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 49,
   "title": "アマゾンのクラウドが落雷で一部停止、そのとき何が起きたか？",
   "url": "https://www.publickey1.jp/blog/09/post_26.html",
   "provider": "AWS",
   "date": "2009-06-10",
   "year": 2009,
   "datetimeBegin": "2009-06-10",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "アマゾンのクラウドが落雷で一部停止、そのとき何が起きたか？",
   "rootCause": "落雷でクラウドの一部が止まり、電源故障によりアベイラビリティゾーンのいくつかのインスタンスが接続できなくなった。関連記事ではPDUの破損で、米国内の一部のEC2が数時間止まったと伝えている。",
   "extraUrl": "https://www.publickey1.jp/blog/09/post_26.html",
   "archived": false
  },
  {
   "id": 50,
   "title": "米国東部（バージニア北部、US-EAST-1）リージョンにおける Amazon DynamoDB サービス中断の概要",
   "url": "https://aws.amazon.com/jp/message/101925/",
   "provider": "AWS",
   "date": "2025-10-19",
   "year": 2025,
   "datetimeBegin": "2025-10-19",
   "datetimeEnd": "",
   "tz": "PDT",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "network-fault"
   ],
   "summary": "米国東部（バージニア北部、US-EAST-1）リージョンにおける Amazon DynamoDB サービス中断の概要",
   "rootCause": "自動のDNS管理システムに潜在的な欠陥があり、DynamoDBエンドポイントの名前解決が失敗して新規接続ができなくなった。続いてNLBのヘルスチェック失敗で、一部ロードバランサーの接続エラーが増えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 51,
   "title": "Azure outage: Microsoft still working on fix, says recovery expected in several hours",
   "url": "https://www.cnbc.com/2025/10/29/microsoft-hit-with-azure-365-outage-ahead-of-quarterly-earnings.html",
   "provider": "Azure",
   "date": "2025-10-29",
   "year": 2025,
   "datetimeBegin": "2025-10-29",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "",
   "rootCause": "決算の数時間前にAzureとMicrosoft 365で障害が起き、365は進行中のAzure障害の下流影響を受けたと報じられた。複数のAzureサービスへアクセスする際に問題が出る可能性があると案内された。",
   "extraUrl": "https://www.cnbc.com/2025/10/29/microsoft-hit-with-azure-365-outage-ahead-of-quarterly-earnings.html",
   "archived": false
  },
  {
   "id": 52,
   "title": "More Details on Today’s Outage",
   "url": "https://engineering.fb.com/2010/09/23/uncategorized/more-details-on-today-s-outage/",
   "provider": "Facebook",
   "date": "2010-09-23",
   "year": 2010,
   "datetimeBegin": "2010-09-23",
   "datetimeEnd": "",
   "tz": "",
   "duration": "2時間30分",
   "durationMinutes": 150,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "resource-exhaustion"
   ],
   "summary": "More Details on Today’s Outage",
   "rootCause": "エラー状態の扱いがまずく、障害が深刻化した。修正がデータベース群への問い合わせになり、毎秒数十万件のクエリでそのクラスタが過負荷となり、Facebookが約2.5時間到達不能になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 53,
   "title": "How a Production Outage Was Caused Using Kubernetes Pod Priorities | Grafana Labs",
   "url": "https://grafana.com/blog/2019/07/24/how-a-production-outage-was-caused-using-kubernetes-pod-priorities/",
   "provider": "Grafana",
   "date": "2019-07-25",
   "year": 2019,
   "datetimeBegin": "2019-07-25",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "resource-exhaustion"
   ],
   "summary": "How a Production Outage Was Caused Using Kubernetes Pod Priorities | Grafana Labs",
   "rootCause": "KubernetesのPod優先度をきっかけに連鎖障害が起き、本番CortexのIngesterのPodがすべて追い退けられた。ingesterが多数DHTを離れると書き込みを十分に複製できず、Hosted Prometheusが約30分止まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 54,
   "title": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "url": "https://aws.amazon.com/message/65648/",
   "provider": "AWS",
   "date": "2011-04-29",
   "year": 2011,
   "datetimeBegin": "2011-04-29",
   "datetimeEnd": "",
   "tz": "PDT",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "failover-gap"
   ],
   "summary": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "rootCause": "影響を受けたボリュームへの読み書きでインスタンスが固まり、劣化したEBSクラスタが米国東部全域のEBS APIで高いエラー率と遅延を招いた。複数の原因が重なった事案だと説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 55,
   "title": "A postmortem of three recent issues",
   "url": "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
   "provider": "Anthropic",
   "date": "2025-09-17",
   "year": 2025,
   "datetimeBegin": "2025-09-17",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "A postmortem of three recent issues",
   "rootCause": "8月から9月上旬にかけて、3つのインフラの不具合が断続的にClaudeの応答品質を下げた。需要や時間帯、サーバー負荷を理由にモデル品質を下げたわけではないと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 56,
   "title": "Incident Management at Spotify | Spotify Engineering",
   "url": "https://labs.spotify.com/2013/06/04/incident-management-at-spotify",
   "provider": "Spotify",
   "date": "2013-06-04",
   "year": 2013,
   "datetimeBegin": "2013-06-04",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Incident Management at Spotify | Spotify Engineering",
   "rootCause": "欧州の多くの利用者を巻き込む大規模障害が起きた。その2か月前には最小のバックエンドPopcountに関わる障害があり、同サービスが使えないか遅いと各システムはすぐ失敗する設計だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 57,
   "title": "Kafkapocalypse: a postmortem on our service outage | Parse.ly",
   "url": "http://blog.parsely.com/post/1738/kafkapocalypse/",
   "provider": "Parsely",
   "date": "2015-03-26",
   "year": 2015,
   "datetimeBegin": "2015-03-26",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Kafkapocalypse: a postmortem on our service outage | Parse.ly",
   "rootCause": "2015年3月26日と27日に、Parse.lyのデータ処理バックエンドが複数回停止した。記事は影響と当時の対応、再発を防ぐための根本原因を順に説明する構成だと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 58,
   "title": "DB performance issue",
   "url": "https://status.circleci.com/incidents/hr0mm9xmm3x6",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "DB performance issue",
   "rootCause": "前回より顧客が多く、西海岸の昼間という最も忙しい時間帯だった。ビルドが一斉に届いてキューが滞留し、新規ビルドの投入とデータベースへの書き込みで他の処理が遅くなった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 59,
   "title": "BBC Online outage on Saturday 19th July 2014",
   "url": "https://www.bbc.co.uk/webarchive/https%3A%2F%2Fwww.bbc.co.uk%2Fblogs%2Finternet%2Fentries%2Fa37b0470-47d4-3991-82bb-a7d5b8803771",
   "provider": "BBC",
   "date": "2014-07-19",
   "year": 2014,
   "datetimeBegin": "2014-07-19",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "BBC Online outage on Saturday 19th July 2014",
   "rootCause": "2014年7月19日9時30分、データベースの負荷が急上昇し、アプリサーバーへのメタデータ要求の多くが失敗した。メタデータを直接使う古い製品が止まり、前段キャッシュの一つのプールも故障した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 60,
   "title": "Incident details | Google Cloud Service Health",
   "url": "https://status.cloud.google.com/incidents/6PM5mNd43NbMqjCZ5REh",
   "provider": "Google Cloud",
   "date": "2021-11-16",
   "year": 2021,
   "datetimeBegin": "2021-11-16",
   "datetimeEnd": "2021-11-16",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "6か月前に入った不具合が設定パイプラインで競合を許し、まれに壊れた設定をGCLBへ送った。外部プロキシ負荷分散で配信されるページに404が出た。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 61,
   "title": "What really happened on Mars? -- Authoritative Account",
   "url": "https://web.archive.org/web/20161230103247/https://research.microsoft.com/en-us/um/people/mbj/Mars_Pathfinder/Authoritative_Account.html",
   "provider": "Archive",
   "date": "1997-12-15",
   "year": 1997,
   "datetimeBegin": "1997-12-15 10:28:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "What really happened on Mars? -- Authoritative Account",
   "rootCause": "火星でのリセットはIPC機構の使い方と設定が原因で、bc_distがbc_schedの開始前に処理を終えられなかった。selectが待つファイル記述子の一覧を守るミューテックスで優先度の逆転が起きた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 62,
   "title": "Cloudflare incident on October 30, 2023",
   "url": "https://blog.cloudflare.com/cloudflare-incident-on-october-30-2023",
   "provider": "Cloudflare",
   "date": "2023-10-30",
   "year": 2023,
   "datetimeBegin": "2023-10-30",
   "datetimeEnd": "2023-10-30",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "software-defect"
   ],
   "summary": "Cloudflare incident on October 30, 2023",
   "rootCause": "Workers KVの新しいデプロイツールの設定ミスと不具合で、鍵値の代わりにHTTP 401が返った。KVを使うアプリのほか、ログインやJWT検証、デバイスのポスチャポリシーが失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 63,
   "title": "Incident details | Google Cloud Service Health",
   "url": "https://status.cloud.google.com/incidents/1xkAB1KmLrh5g3v9ZEZ7",
   "provider": "Google Cloud",
   "date": "2021-11-12",
   "year": 2021,
   "datetimeBegin": "2021-11-12",
   "datetimeEnd": "2021-11-12",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "予備分析では、新しいインフラ機能が内部ネットワークロードバランサーのコードに潜んでいた問題を引き起こした。App EngineやBigtable、Cloud SQLなど多数のサービスが1時間44分影響を受けた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 64,
   "title": "Sleeping beauty - How one of the oldest bugs in EVE got hunted down and resolved | EVE Online",
   "url": "https://eveonline.com/news/view/sleeping-beauty",
   "provider": "EVE Online",
   "date": "2017-02-15",
   "year": 2017,
   "datetimeBegin": "2017-02-15",
   "datetimeEnd": "2017-02-15",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Sleeping beauty - How one of the oldest bugs in EVE got hunted down and resolved | EVE Online",
   "rootCause": "ドローンとUIのコードに不具合は見つからず、再現の結果、ドローン画面は更新を始めたあとスリープから戻らなかった。taskletが時々sleepから返っていないように見えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 65,
   "title": "April 2022 Incident Review",
   "url": "https://heroku.com/blog/april-2022-incident-review",
   "provider": "Heroku",
   "date": "2022-05-30",
   "year": 2022,
   "datetimeBegin": "2022-05-30",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "April 2022 Incident Review",
   "rootCause": "攻撃者の行動を調べ、データ保護のため顧客に不便な対応を取った。パスワードはハッシュ化とソルト済みだったが、多要素認証の未設定と使い回しを懸念し、2022年5月5日にアカウントをローテーションした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 66,
   "title": "GitHub Availability Report: July 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2020/",
   "provider": "GitHub",
   "date": "2020-07-13",
   "year": 2020,
   "datetimeBegin": "2020-07-13 08:18:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: July 2020",
   "rootCause": "先に終わった定例のDNSメンテナンスの影響で、クラスタがレジストリへ到達できずPodが起動しなくなった。緩和のための再デプロイにより、障害が本番クラスタへ広がった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 67,
   "title": "Salesforce Help",
   "url": "https://help.salesforce.com/s/articleView",
   "provider": "Salesforce",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "本文を取得できず、引き金を特定できない",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Salesforce Help",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 68,
   "title": "GitHub Availability Report: September 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2023/",
   "provider": "GitHub",
   "date": "2023-09-05",
   "year": 2023,
   "datetimeBegin": "2023-09-05 16:24:00",
   "datetimeEnd": "2023-09-05 16:43:00",
   "tz": "UTC",
   "duration": "19分",
   "durationMinutes": 19,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "GitHub Availability Report: September 2023",
   "rootCause": "プライマリデータベースでOS用ディスクが到達不能になり、部分的なホスト障害が起きた。自動フェイルオーバーはこのファイルシステム障害を検知できず、手動で正常なホストへ切り替えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 69,
   "title": "Azure の状態の履歴 | Microsoft Azure",
   "url": "https://azure.status.microsoft/ja-jp/status/history/",
   "provider": "Azure",
   "date": "2026-09-30",
   "year": 2026,
   "datetimeBegin": "2026-09-30",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "複数のインシデントをまとめた履歴ページ",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Azure の状態の履歴 | Microsoft Azure",
   "rootCause": "リージョンのゲートウェイ管理サービスへの最近の変更が、無関係なOS保守の進行時に想定以上の負荷を生んだ。依存サービスがスケールできず、ポータルでのゲートウェイ表示やネットワーク管理が失敗または遅延した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 70,
   "title": "Retrospective and Technical Details on the recent Firefox Outage – Mozilla Hacks - the Web developer blog",
   "url": "https://hacks.mozilla.org/2022/02/retrospective-and-technical-details-on-the-recent-firefox-outage",
   "provider": "Hacks",
   "date": "2022-02-02",
   "year": 2022,
   "datetimeBegin": "2022-02-02",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Retrospective and Technical Details on the recent Firefox Outage – Mozilla Hacks - the Web developer blog",
   "rootCause": "2022年1月13日、更新やテレメトリ、証明書管理、クラッシュ報告などが重なり、Firefoxのネットワーク処理の奥にある不具合が起きた。ブラウザが固まり、世界中で2時間近く使えなくなった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 71,
   "title": "GitHub Availability Report: October 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2022/",
   "provider": "GitHub",
   "date": "2022-10-26",
   "year": 2022,
   "datetimeBegin": "2022-10-26 00:47:00",
   "datetimeEnd": "2022-10-26 04:34:00",
   "tz": "UTC",
   "duration": "3時間47分",
   "durationMinutes": 227,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry",
    "config-error"
   ],
   "summary": "GitHub Availability Report: October 2022",
   "rootCause": "発生から間もない事案は寄与要因を調査中だとされた。Issuesはデプロイ直後の設定変更が原因と分かり、大規模なスキーマ変更を慎重に戻した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 72,
   "title": "GitHub Availability Report: May 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2022/",
   "provider": "GitHub",
   "date": "2022-05-20",
   "year": 2022,
   "datetimeBegin": "2022-05-20 09:44:00",
   "datetimeEnd": "2022-05-20 10:33:00",
   "tz": "UTC",
   "duration": "49分",
   "durationMinutes": 49,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: May 2022",
   "rootCause": "「Put Manifest」コマンドが大量に実行されてCPU使用率が上がり、GitHub Container registryの利用者が障害を受けた。寄与要因の詳細は調査中で、翌月の報告に回すとされた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 73,
   "title": "Engineering Archives",
   "url": "https://heroku.com/blog/category/engineering",
   "provider": "Heroku",
   "date": "2026-07-16",
   "year": 2026,
   "datetimeBegin": "2026-07-16",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Engineering Archives",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 74,
   "title": "Postmortem: March 26 - April 10 Workflow Delay Incidents",
   "url": "https://discuss.circleci.com/t/postmortem-march-26-april-10-workflow-delay-incidents/30060",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Postmortem: March 26 - April 10 Workflow Delay Incidents",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 75,
   "title": "GitHub Availability Report: August 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2025/",
   "provider": "GitHub",
   "date": "2025-08-05",
   "year": 2025,
   "datetimeBegin": "2025-08-05 15:42:00",
   "datetimeEnd": "2025-08-05 16:14:00",
   "tz": "UTC",
   "duration": "32分",
   "durationMinutes": 32,
   "triggers": [
    "Maintainance",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: August 2025",
   "rootCause": "ロードバランサーと検索ホストの間の断続的な接続問題がきっかけで、検索クエリの最大75%が失敗し、結果更新が最大100分遅れた。修正を取り込まないカスタム環境とカナリアの更新が、プルリクエストの約0.1%に二次障害を起こした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 76,
   "title": "Postmortem of database outage of January 31",
   "url": "https://about.gitlab.com/2017/02/10/postmortem-of-database-outage-of-january-31",
   "provider": "GitLab",
   "date": "2017-01-31",
   "year": 2017,
   "datetimeBegin": "2017-01-31",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Postmortem of database outage of January 31",
   "rootCause": "2017年1月31日、プライマリのデータベースサーバーからデータを誤って削除したことが原因で、GitLab.comが大規模に停止した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 77,
   "title": "GitHub Availability Report: November 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2022/",
   "provider": "GitHub",
   "date": "2022-11-25",
   "year": 2022,
   "datetimeBegin": "2022-11-25 16:34:00",
   "datetimeEnd": "2022-11-25 18:30:00",
   "tz": "UTC",
   "duration": "1時間56分",
   "durationMinutes": 116,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub Availability Report: November 2022",
   "rootCause": "Codespacesが使う第三者のデータベースで、提供元の障害により性能が低下した。リージョンデータを複製していないため、米国東部のデータベースとすぐには通信できなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 78,
   "title": "Denial of Service Attacks",
   "url": "https://github.blog/news-insights/the-library/denial-of-service-attacks",
   "provider": "GitHub",
   "date": "2014-03-14",
   "year": 2014,
   "datetimeBegin": "2014-03-14",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Denial of Service Attacks",
   "rootCause": "2014年3月11日、進化する分散サービス妨害攻撃を受け、GitHubがおよそ2時間ほとんど到達不能になった。過去1年も同種の攻撃がインフラの各所へ続いていた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 79,
   "title": "Add-Ons Outage Post-Mortem Result – Mozilla Hacks - the Web developer blog",
   "url": "https://hacks.mozilla.org/2019/07/add-ons-outage-post-mortem-result",
   "provider": "Hacks",
   "date": "2019-07-12",
   "year": 2019,
   "datetimeBegin": "2019-07-12",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "Add-Ons Outage Post-Mortem Result – Mozilla Hacks - the Web developer blog",
   "rootCause": "署名を生成する仕組みの担当は証明書の期限を知っていたが、Firefoxが期限を無視すると誤解していた。証明書は失効し、アドオンが停止した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 80,
   "title": "Addressing GitHub’s recent availability issues",
   "url": "https://github.blog/news-insights/company-news/addressing-githubs-recent-availability-issues-2/",
   "provider": "GitHub",
   "date": "2026-02-02",
   "year": 2026,
   "datetimeBegin": "2026-02-02",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Addressing GitHub’s recent availability issues",
   "rootCause": "2月9日、認証とユーザー管理を支える中核のデータベースクラスタが過負荷になり、影響の大きい障害が起きた。対象アプリはユーザーが時間をかけて更新するため、利用増はすぐには表れなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 81,
   "title": "2013–09–17 Outage Postmortem",
   "url": "https://medium.com/xandr-tech/2013-09-17-outage-postmortem-586b19ae4307",
   "provider": "Medium",
   "date": "2013-09-17",
   "year": 2013,
   "datetimeBegin": "2013-09-17",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "software-defect"
   ],
   "summary": "2013–09–17 Outage Postmortem",
   "rootCause": "社内データベースからのデータ更新がimpression busのサーバー群をクラッシュさせ、世界中のシステムがほぼ同時に落ちた。入口であるimpbusが止まったため、広告配信が停止した。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 82,
   "title": "Incident report on memory leak caused by Cloudflare parser bug",
   "url": "https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug",
   "provider": "Cloudflare",
   "date": "2017-02-19",
   "year": 2017,
   "datetimeBegin": "2017-02-19",
   "datetimeEnd": "2017-02-19",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Incident report on memory leak caused by Cloudflare parser bug",
   "rootCause": "Cloudflareのパーサー不具合によるメモリ漏えいが、エッジサーバーのセキュリティ問題として報告された。SSLを終端する隔離されたNGINXは、この不具合の影響を受けなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 83,
   "title": "Reddit - The heart of the internet",
   "url": "https://www.reddit.com/r/RedditEng/comments/11xx5o0/you_broke_reddit_the_piday_outage/",
   "provider": "Reddit",
   "date": "2023-03-14",
   "year": 2023,
   "datetimeBegin": "2023-03-14",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "config-error"
   ],
   "summary": "Reddit - The heart of the internet",
   "rootCause": "Kubernetesのバージョンとコンポーネントの更新が大きなきっかけとなり、3月14日に314分間の障害が起きた。閲覧時に投稿のないホームページやエラー画面が表示された。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 84,
   "title": "Incident details | Google Cloud Service Health",
   "url": "https://status.cloud.google.com/incidents/X8SNkK2BPyCrc1sveeiu",
   "provider": "Google Cloud",
   "date": "2022-09-13",
   "year": 2022,
   "datetimeBegin": "2022-09-13",
   "datetimeEnd": "2022-09-13",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "Cloud FilestoreのListInstances APIが、世界的にエラー429で失敗した。過負荷時の影響を抑えるため、FilestoreはAPI要求にグローバルな上限を設けていると原因欄に書かれている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 85,
   "title": "Falcon Content Update Remediation and Guidance Hub | CrowdStrike",
   "url": "https://crowdstrike.com/falcon-content-update-remediation-and-guidance-hub",
   "provider": "CrowdStrike",
   "date": "2024-08-06",
   "year": 2024,
   "datetimeBegin": "2024-08-06",
   "datetimeEnd": "2024-08-06",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Falcon Content Update Remediation and Guidance Hub | CrowdStrike",
   "rootCause": "2024年7月19日、通常運用としてWindowsセンサー向けのコンテンツ設定更新をチャネルファイルで配信した結果、システムがクラッシュした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 86,
   "title": "Cloudflare outage on December 5, 2025",
   "url": "https://blog.cloudflare.com/5-december-2025-outage/",
   "provider": "Cloudflare",
   "date": "2025-12-05",
   "year": 2025,
   "datetimeBegin": "2025-12-05",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Cloudflare outage on December 5, 2025",
   "rootCause": "React Server Componentsの脆弱性を検知して緩和するため、ボディ解析のロジックを変更したことがきっかけだった。12月5日8時47分UTCからネットワークの一部が大きく障害し、サイバー攻撃ではなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 87,
   "title": "Cloudflare outage on November 18, 2025",
   "url": "https://blog.cloudflare.com/18-november-2025-outage/",
   "provider": "Cloudflare",
   "date": "2025-11-18",
   "year": 2025,
   "datetimeBegin": "2025-11-18",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare outage on November 18, 2025",
   "rootCause": "データベースの権限変更により、Bot Managementが使う機能ファイルへ複数のエントリが出力された。11月18日11時20分UTCから中核トラフィックの配送が失敗し、サイバー攻撃ではなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 88,
   "title": "Linux build queue backing up",
   "url": "https://status.circleci.com/incidents/8rklh3qqckp1",
   "provider": "CircleCI",
   "date": "2015-10-16",
   "year": 2015,
   "datetimeBegin": "2015-10-16",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Linux build queue backing up",
   "rootCause": "Linuxのビルドキューが滞留し、水曜の遅くから木曜の早くまでビルドが実行できなかった。データベースの待ち操作が追いつかず、別のプライマリへ切り替えてその操作を破棄した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 89,
   "title": "Today's Network Issue",
   "url": "https://blog.cloudflare.com/todays-network-issue",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "Today's Network Issue",
   "rootCause": "非Anycastのトラフィックの大半は乱れないはずだったが、最悪の場合ロサンゼルスの一部マシンが過負荷になり502を返した。原因はすぐには分からなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 90,
   "title": "米国東部（バージニア北部、US-EAST-1）リージョンで発生した Amazon S3 サービス障害について",
   "url": "https://aws.amazon.com/jp/message/41926/",
   "provider": "AWS",
   "date": "2017-03-01",
   "year": 2017,
   "datetimeBegin": "2017-03-01 02:37:00",
   "datetimeEnd": "",
   "tz": "JST",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "config-error"
   ],
   "summary": "米国東部（バージニア北部、US-EAST-1）リージョンで発生した Amazon S3 サービス障害について",
   "rootCause": "広域リージョンのIndexとPlacementを完全に再起動する機会が長年なく、成長後は再起動とメタデータ確認に想定以上の時間がかかった。Indexの回復後にPlacementが復旧し、S3のPUTが戻った。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 91,
   "title": "Battling database performance | Blog | incident.io",
   "url": "https://incident.io/blog/database-performance",
   "provider": "Incident.io",
   "date": "2023-04-20",
   "year": 2023,
   "datetimeBegin": "2023-04-20",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Battling database performance | Blog | incident.io",
   "rootCause": "データベース利用を大きく変えるコード変更や急な流量変化はなく、原因はすぐには分からなかった。失敗したHTTP要求は、接続プールから接続を得るまで約20秒待っていた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 92,
   "title": "GitHub Availability Report: July 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2024/",
   "provider": "GitHub",
   "date": "2024-07-05",
   "year": 2024,
   "datetimeBegin": "2024-07-05 00:53:00",
   "datetimeEnd": "2024-07-05 02:30:00",
   "tz": "UTC",
   "duration": "1時間37分",
   "durationMinutes": 97,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: July 2024",
   "rootCause": "設定変更でWebhooksの裏ジョブから認証が外れ、外部への配信が失敗した。続けて事業者の定例保守で再接続時に依存先が過負荷となり、ヘルスチェック失敗がジョブAPIのクラッシュループを招きActionsが遅れた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 93,
   "title": "GitHub Availability Report: August 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2021/",
   "provider": "GitHub",
   "date": "2021-08-10",
   "year": 2021,
   "datetimeBegin": "2021-08-10 15:16:00",
   "datetimeEnd": "2021-08-10 18:22:00",
   "tz": "UTC",
   "duration": "3時間6分",
   "durationMinutes": 186,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: August 2021",
   "rootCause": "MySQLのプライマリが劣化し、そのクラスタへの書き込みを要する操作ができなくなった。活発なアプリの例外的な条件が重いクエリを生み、データベース容量全体に影響し、待ちジョブがすべて失敗した期間もあった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 94,
   "title": "Summary of the December 17th event in the South America Region (SA-EAST-1)",
   "url": "https://aws.amazon.com/message/656481",
   "provider": "AWS",
   "date": "2013-12-17",
   "year": 2013,
   "datetimeBegin": "2013-12-17",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "upstream-failure"
   ],
   "summary": "Summary of the December 17th event in the South America Region (SA-EAST-1)",
   "rootCause": "12月17日、現地電力会社の変電所の故障でアベイラビリティゾーンが商用電源を失った。切り替え中に遮断器が開いて発電機一台が使えなくなり、別の発電機も機械故障で止まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 95,
   "title": "Heroku Status",
   "url": "https://status.heroku.com/incidents/2558",
   "provider": "Heroku",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 96,
   "title": "The Day of the RDS Multi-AZ Failover - Razorpay Tech",
   "url": "https://razorpay.com/blog/day-of-rds-multi-az-failover",
   "provider": "Razorpay",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "failover-gap"
   ],
   "summary": "The Day of the RDS Multi-AZ Failover - Razorpay Tech",
   "rootCause": "監視が5xxの急増を検知し、RDSのマスターがマルチAZフェイルオーバーしていた。スタンバイへトラフィックが移り、約110秒後にアプリケーションは手動対応なしで復旧した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 97,
   "title": "GitHub Availability Report: April 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2023/",
   "provider": "GitHub",
   "date": "2023-03-27",
   "year": 2023,
   "datetimeBegin": "2023-03-27 12:25:00",
   "datetimeEnd": "2023-03-27 13:58:00",
   "tz": "UTC",
   "duration": "1時間33分",
   "durationMinutes": 93,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: April 2023",
   "rootCause": "よく使うデータベースクエリの変更でロック競合が起きやすくなり、短い負荷の山で資源が尽きてデータベースがクラッシュした。一度目の自動フェイルオーバーは成功したが、二度目は完了せず手動復旧が必要だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 99,
   "title": "GitHub availability report: May 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2026/",
   "provider": "GitHub",
   "date": "2026-06-11",
   "year": 2026,
   "datetimeBegin": "2026-06-11",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "55分",
   "durationMinutes": 55,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "GitHub availability report: May 2026",
   "rootCause": "2026年5月4日15時34分から16時40分UTCまで、github.comで遅延と要求の失敗が増え、広い顧客向けサービスが乱れた。CodespacesやPages、Copilotなどは共有データへの依存で性能が低下した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 100,
   "title": "Slack’s Outage on January 4th 2021",
   "url": "https://slack.engineering/slacks-outage-on-january-4th-2021/",
   "provider": "Slack",
   "date": "2021-01-04",
   "year": 2021,
   "datetimeBegin": "2021-01-04",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Slack’s Outage on January 4th 2021",
   "rootCause": "その日に出した変更を戻したが原因ではなかった。いつものダッシュボードとアラートが使えず調査が難航し、毎時0分と30分にはリマインダー等でトラフィックの小さな山がある。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 101,
   "title": "Azure Front Door: Implementing lessons learned following October outages | Microsoft Community Hub",
   "url": "https://techcommunity.microsoft.com/blog/azurenetworkingblog/azure-front-door-implementing-lessons-learned-following-october-outages/4479416",
   "provider": "Microsoft",
   "date": "2025-12-18",
   "year": 2025,
   "datetimeBegin": "2025-12-18",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Azure Front Door: Implementing lessons learned following October outages | Microsoft Community Hub",
   "rootCause": "10月のAzure Front Door障害では、10月7日に顧客の設定変更がコントロールプレーンの欠陥を引き起こし、問題のメタデータが作られていた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 102,
   "title": "Incident details | Google Cloud Service Health",
   "url": "https://status.cloud.google.com/incidents/mREMLwZFe3FuLLn3zfTw",
   "provider": "Google Cloud",
   "date": "2022-10-13",
   "year": 2022,
   "datetimeBegin": "2022-10-13",
   "datetimeEnd": "2022-10-13",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "流入とログのトラフィックが予期せず増え、内部のストリーミングRPCライブラリの不具合と重なってデッドロックした。BigQuery Storage Write APIのストリーミング前端が過負荷になり、米国リージョンで障害となった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 103,
   "title": "Today's Outage Post Mortem",
   "url": "https://blog.cloudflare.com/todays-outage-post-mortem-82515",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Today's Outage Post Mortem",
   "rootCause": "9時47分UTCにエッジルーターがシステム全体で故障し、CloudFlareが事実上インターネットから消えた。DNSやウェブプロキシを含むサービスで、アクセスするとDNSエラーになった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 104,
   "title": "Cloudflare’s investigation of the January 2022 Okta compromise",
   "url": "https://blog.cloudflare.com/cloudflare-investigation-of-the-january-2022-okta-compromise",
   "provider": "Cloudflare",
   "date": "2022-03-22",
   "year": 2022,
   "datetimeBegin": "2022-03-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Cloudflare’s investigation of the January 2022 Okta compromise",
   "rootCause": "パスワード再設定ができるOktaのサポート従業員が侵害されたように見えたため、12月1日以降にパスワードや多要素認証を変えた全従業員を調べた。一つの層が落ちても守れる別の防御を持つよう述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 105,
   "title": "DNS issues in Kubernetes. Public postmortem #1",
   "url": "https://medium.com/preply-engineering/dns-postmortem-e169efd45afd",
   "provider": "Medium",
   "date": "2020-05-04",
   "year": 2020,
   "datetimeBegin": "2020-05-04",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "DNS issues in Kubernetes. Public postmortem #1",
   "rootCause": "負荷が低くCoreDNSの台数が3から2へ減った際、kube-proxyがconntrackの古い行を消せなかった。一部サービスが存在しないPodへ向き、一部DNSが26分障害となり、サービスA・B・Cで15000件のイベントが落ちた。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 106,
   "title": "Summary of Windows Azure Service Disruption on Feb 29th, 2012 | Microsoft Azure Blog",
   "url": "https://azure.microsoft.com/en-us/blog/summary-of-windows-azure-service-disruption-on-feb-29th-2012",
   "provider": "Azure",
   "date": "2012-02-29",
   "year": 2012,
   "datetimeBegin": "2012-02-29",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of Windows Azure Service Disruption on Feb 29th, 2012 | Microsoft Azure Blog",
   "rootCause": "特定のソフトウェア不具合がきっかけとなり、通常運用との相互作用で混乱が広がった。Windows Azureの計算基盤と、アクセス制御、Service Bus、SQL Azureポータル、データ同期が部分停止した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 107,
   "title": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "url": "https://aws.amazon.com/jp/message/65648/",
   "provider": "AWS",
   "date": "2011-04-29",
   "year": 2011,
   "datetimeBegin": "2011-04-29",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "failover-gap"
   ],
   "summary": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "rootCause": "影響を受けたボリュームへの読み書きでインスタンスが固まり、劣化したEBSクラスタが米国東部全域のEBS APIで高いエラー率と遅延を招いた。複数の原因が重なった事案だと説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 108,
   "title": "Summary of the December 24, 2012 Amazon ELB Service Event in the US-East Region",
   "url": "https://aws.amazon.com/message/680587",
   "provider": "AWS",
   "date": "2012-12-24",
   "year": 2012,
   "datetimeBegin": "2012-12-24",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Summary of the December 24, 2012 Amazon ELB Service Event in the US-East Region",
   "rootCause": "欠けていたELBの状態データが根本原因で、稼働中バランサーの基本的な要求処理には当初影響しなかった。コントロールプレーンはその不足のまま変更し、変更されたロードバランサーを不適切に設定した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 109,
   "title": "GitHub Availability Report: July 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2025/",
   "provider": "GitHub",
   "date": "2025-07-28",
   "year": 2025,
   "datetimeBegin": "2025-07-28 21:41:00",
   "datetimeEnd": "2025-07-29 03:15:00",
   "tz": "UTC",
   "duration": "5時間34分",
   "durationMinutes": 334,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: July 2025",
   "rootCause": "定例の内部改善の最中に、GitHub Enterprise Importerの構成要素が不適切にサービスから外され、以前の設定へ戻せなかった。移行を処理できない状態が約5時間34分続き、新しいリソースの用意が必要だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 110,
   "title": "Intermittent downtime from repeated crashes | Blog | incident.io",
   "url": "https://incident.io/blog/intermittent-downtime",
   "provider": "Incident.io",
   "date": "2022-11-18",
   "year": 2022,
   "datetimeBegin": "2022-11-18",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Intermittent downtime from repeated crashes | Blog | incident.io",
   "rootCause": "HerokuがH10を返し、dynoごとアプリが落ちた。再起動後もクラッシュが続き、メッセージのパニックを処理する修正と、web・worker・cronを別のdynoに分ける変更を入れた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 111,
   "title": "Postmortem: May 21, 2021 - Delay in starting Docker Jobs. Machine & remote Docker environments blocked",
   "url": "https://discuss.circleci.com/t/postmortem-may-21-2021-delay-in-starting-docker-jobs-machine-remote-docker-environments-blocked/40274",
   "provider": "CircleCI",
   "date": "2021-05-21",
   "year": 2021,
   "datetimeBegin": "2021-05-21",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Postmortem: May 21, 2021 - Delay in starting Docker Jobs. Machine & remote Docker environments blocked",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 112,
   "title": "GitHub Availability Report: August 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2020/",
   "provider": "GitHub",
   "date": "2020-07-13",
   "year": 2020,
   "datetimeBegin": "2020-07-13 08:18:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: August 2020",
   "rootCause": "2020年8月は、サービス停止になるインシデントはなかった。ステータスページを、進行中の可用性を優先して見せるよう改める内容を説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 113,
   "title": "1.1.1.1 lookup failures on October 4, 2023",
   "url": "https://blog.cloudflare.com/1-1-1-1-lookup-failures-on-october-4th-2023",
   "provider": "Cloudflare",
   "date": "2023-10-04",
   "year": 2023,
   "datetimeBegin": "2023-10-04",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "1.1.1.1 lookup failures on October 4, 2023",
   "rootCause": "2023年10月4日7時から11時UTCにDNS解決が失敗し、1.1.1.1やそれを使うサービスで正当な問い合わせにSERVFAILが返ることがあった。内部のソフトウェアエラーであり、攻撃ではなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 114,
   "title": "How a Production Outage Was Caused Using Kubernetes Pod Priorities | Grafana Labs",
   "url": "https://grafana.com/blog/how-a-production-outage-was-caused-using-kubernetes-pod-priorities/",
   "provider": "Grafana",
   "date": "2019-07-25",
   "year": 2019,
   "datetimeBegin": "2019-07-25",
   "datetimeEnd": "2019-07-25",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "How a Production Outage Was Caused Using Kubernetes Pod Priorities | Grafana Labs",
   "rootCause": "KubernetesのPod優先度をきっかけに連鎖障害が起き、本番CortexのIngesterのPodがすべて追い退けられた。ingesterが多数DHTを離れると書き込みを十分に複製できず、Hosted Prometheusが約30分止まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 115,
   "title": "GitHub Availability Report: April 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2022/",
   "provider": "GitHub",
   "date": "2022-04-01",
   "year": 2022,
   "datetimeBegin": "2022-04-01 07:07:00",
   "datetimeEnd": "2022-04-01 12:39:00",
   "tz": "UTC",
   "duration": "5時間32分",
   "durationMinutes": 332,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: April 2022",
   "rootCause": "期限切れのシークレットのため、米国西部のCodespaces用待機リソースが空になり、新規作成と停止中環境の起動が失敗した。他リージョンの待機リソースも同じ理由で空になり、失敗が広がった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 116,
   "title": "All Circuits are Busy Now: The 1990 AT&T Long Distance Network Collapse",
   "url": "http://users.csc.calpoly.edu/~jdalbey/SWE/Papers/att_collapse.html",
   "provider": "Users",
   "date": "1990-01-15",
   "year": 1990,
   "datetimeBegin": "1990-01-15 19:25:00",
   "datetimeEnd": "1990-01-16 04:25:00",
   "tz": "UTC",
   "duration": "9時間",
   "durationMinutes": 540,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "All Circuits are Busy Now: The 1990 AT&T Long Distance Network Collapse",
   "rootCause": "1990年のAT&T長距離網では、未処理の電文に次の電文が上書きされる欠陥で交換機がリセットした。予備の処理装置も同様に停止し、約9時間、通話のほぼ半分が失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 117,
   "title": "Human Error Caused OWASA Fluoride Overdose, OWASA Very Sorry About That",
   "url": "https://indyweek.com/news/archives/human-error-caused-owasa-fluoride-overdose-owasa-sorry",
   "provider": "Indyweek",
   "date": "2026-02-02",
   "year": 2026,
   "datetimeBegin": "2026-02-02",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Human Error Caused OWASA Fluoride Overdose, OWASA Very Sorry About That",
   "rootCause": "運転員が意図せず誤ったキーを押し、フッ化物を過剰投入したため浄水場が停止した。水道管の破損は、圧力と沈下で管が曲がった可能性があると報告された。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 118,
   "title": "The August 17 outage, and the work ahead",
   "url": "https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/",
   "provider": "GitHub",
   "date": "2026-08-17",
   "year": 2026,
   "datetimeBegin": "2026-08-17",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "7時間47分",
   "durationMinutes": 467,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "The August 17 outage, and the work ahead",
   "rootCause": "トラフィックが新たなピークに達したとき、米国中部データセンターの重要な基盤部品がスケールできなかった。容量不足が広がり認証が失敗し、複数のGitHubサービスが7時間47分障害となった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 119,
   "title": "Clouds, caches and connection conundrums | Blog | incident.io",
   "url": "https://incident.io/blog/clouds-caches-and-connection-conundrums",
   "provider": "Incident.io",
   "date": "2023-09-26",
   "year": 2023,
   "datetimeBegin": "2023-09-26",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Clouds, caches and connection conundrums | Blog | incident.io",
   "rootCause": "通常より多いPostgresの接続タイムアウトが、この障害のきっかけだった。その要求の中でキャッシュ失敗が何度も起き、いずれもキャッシュのタイムアウトが原因だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 120,
   "title": "Technical post-mortem of the August incident",
   "url": "https://medium.com/@florian_7764/technical-post-mortem-of-the-august-incident-82ab4c3d6547",
   "provider": "Medium",
   "date": "2016-10-19",
   "year": 2016,
   "datetimeBegin": "2016-10-19",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "4時間",
   "durationMinutes": 240,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Technical post-mortem of the August incident",
   "rootCause": "EUのZooKeeperには約100万ノードがあり、Kazooの不具合で問い合わせが多すぎると接続が切れた。os.writeがEPIPEで失敗して接続が閉じ、以前はオブジェクトが少なくバッファが埋まらなかった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 121,
   "title": "CPU limits and aggressive throttling in Kubernetes",
   "url": "https://engineering.omio.com/cpu-limits-and-aggressive-throttling-in-kubernetes-c5b20bd8a718",
   "provider": "Engineering",
   "date": "2020-02-17",
   "year": 2020,
   "datetimeBegin": "2020-02-17",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "CPU limits and aggressive throttling in Kubernetes",
   "rootCause": "未修正のカーネルでは、CFSクォータの既知の不具合が不要なスロットリングと停滞を起こす。アプリが応答しなくなったり、ヘルスチェックに失敗したり、ネットワーク接続が切れたりする。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 122,
   "title": "Accidental repeated emails: sorry! - Google Code Jam",
   "url": "https://gist.github.com/jomo/2bae3821acb433d0446d",
   "provider": "GitHub",
   "date": "2020-12-19",
   "year": 2020,
   "datetimeBegin": "2020-12-19 02:32:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Accidental repeated emails: sorry! - Google Code Jam",
   "rootCause": "メールシステムを作り直した際に不具合が入り、1通だけ送るつもりが複数通送られた。データストア上のnotificationを、送信開始時にMailCheckWorkerがSendingとマークする想定だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 123,
   "title": "Incident details | Google Cloud Service Health",
   "url": "https://status.cloud.google.com/incidents/vLsxuKoRvykNHW3nnhsJ",
   "provider": "Google Cloud",
   "date": "2022-07-14",
   "year": 2022,
   "datetimeBegin": "2022-07-14",
   "datetimeEnd": "2022-07-14",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "新しいコントロールプレーン設定の展開に問題があり、データセンター間の内部網で低優先のトラフィック容量が減った。複数リージョンのCloud Storageで遅延が上昇した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 124,
   "title": "GitHub Availability Report: July 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2021/",
   "provider": "GitHub",
   "date": "2021-08-04",
   "year": 2021,
   "datetimeBegin": "2021-08-04",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: July 2021",
   "rootCause": "2021年7月は中核サービスが停止するインシデントはなく、リアルタイムの状況はステータスページで確認するようGitHubが案内している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 125,
   "title": "Incident Review: Working as Designed, But Still Failing",
   "url": "https://honeycomb.io/blog/incident-review-designed-failing",
   "provider": "Honeycomb",
   "date": "2026-10-07",
   "year": 2026,
   "datetimeBegin": "2026-10-07",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "4時間",
   "durationMinutes": 240,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Incident Review: Working as Designed, But Still Failing",
   "rootCause": "数週間前、クエリ性能と、トリガーおよびSLOによるアラートに影響するインシデントが起きた。クエリは二種類のストレージを使い、トリガーは最近のデータを主にホットストレージで見る想定だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 126,
   "title": "Authentication Latency on DUO1 Deployment",
   "url": "https://status.duo.com/incidents/4w07bmvnt359",
   "provider": "Duo",
   "date": "2018-08-29",
   "year": 2018,
   "datetimeBegin": "2018-08-29",
   "datetimeEnd": "2018-08-29",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Authentication Latency on DUO1 Deployment",
   "rootCause": "DUO1では二週間に二度、認証に影響する障害が起きた。問題のソフトウェアリリースだけではなく、リクエストの種類、バックグラウンドジョブ、非効率なクエリ、自動リトライが重なって容量不足になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 127,
   "title": "GitHub availability report: April 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2026/",
   "provider": "GitHub",
   "date": "2026-04-01",
   "year": 2026,
   "datetimeBegin": "2026-04-01 15:02:00",
   "datetimeEnd": "2026-04-01 23:45:00",
   "tz": "UTC",
   "duration": "8時間43分",
   "durationMinutes": 523,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub availability report: April 2026",
   "rootCause": "コード検索を支えるメッセージング基盤の定期更新で、自動変更を急激に適用しすぎ、内部サービス間の協調が失敗した。復旧中の意図しないサービス配備が内部の経路状態を消し、検索クエリがすべて失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 128,
   "title": "Post Mortem: What Yesterday's Network Outage Looked Like",
   "url": "https://blog.cloudflare.com/post-mortem-what-todays-network-outage-looked",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "config-error"
   ],
   "summary": "Post Mortem: What Yesterday's Network Outage Looked Like",
   "rootCause": "ネットワークサービスが中断し、複数の要因が重なった。通常より欧州へトラフィックが集中する中でレート制限を誤適用し、その地域の多数の顧客が影響を受けた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 129,
   "title": "GitHub Availability Report: September 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2022/",
   "provider": "GitHub",
   "date": "2022-09-08",
   "year": 2022,
   "datetimeBegin": "2022-09-08 19:44:00",
   "datetimeEnd": "2022-09-09 00:55:00",
   "tz": "UTC",
   "duration": "5時間11分",
   "durationMinutes": 311,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "GitHub Availability Report: September 2022",
   "rootCause": "プルリクエストのマージ失敗が増え、プロファイルから不整合データを消したデータ移行が原因だと追った。寄与要因は調査中で、一部のCodespacesでは外向きのDNS解決も失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 130,
   "title": "Postmortem of last week's fileserver failure",
   "url": "https://github.blog/news-insights/the-library/postmortem-of-last-week-s-fileserver-failure/",
   "provider": "GitHub",
   "date": "2010-06-10",
   "year": 2010,
   "datetimeBegin": "2010-06-10",
   "datetimeEnd": "2010-06-10",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Postmortem of last week's fileserver failure",
   "rootCause": "ファイルサーバのペアの一台が故障し、そのサーバの全ユーザーが停止し、複数リポジトリのファイルが壊れた。直前からAサーバに異常があり、障害時にBの負荷が急上昇した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 131,
   "title": "GitHub Availability Report: May 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2023/",
   "provider": "GitHub",
   "date": "2023-04-26",
   "year": 2023,
   "datetimeBegin": "2023-04-26 23:11:00",
   "datetimeEnd": "2023-04-27 00:02:00",
   "tz": "UTC",
   "duration": "51分",
   "durationMinutes": 51,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: May 2023",
   "rootCause": "自動メンテナンス処理が誤った設定変更を行い、Copilotの三つのリージョンで部分障害が起きた。ピーク時にコード補完リクエストの6%が失敗し、自動のトラフィック退避で緩和した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 132,
   "title": "GitHub Availability Report: October 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2023/",
   "provider": "GitHub",
   "date": "2023-10-17",
   "year": 2023,
   "datetimeBegin": "2023-10-17 10:59:00",
   "datetimeEnd": "2023-10-17 13:48:00",
   "tz": "UTC",
   "duration": "2時間49分",
   "durationMinutes": 169,
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: October 2023",
   "rootCause": "新しいCodespacesリージョンの追加で負荷が増え、地域の認証層がグローバルな第三者依存先でスロットリングされた。認証が落ち、この期間の利用者の67%でCodespacesの作成と起動が失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 133,
   "title": "Details Behind Today's Internet Hacks",
   "url": "https://blog.cloudflare.com/details-behind-todays-internet-hacks",
   "provider": "Cloudflare",
   "date": "2013-08-28",
   "year": 2013,
   "datetimeBegin": "2013-08-28",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Details Behind Today's Internet Hacks",
   "rootCause": "レコードを直したあとも再帰DNSがキャッシュを残し、多くのネームサーバは影響を受けたドメインの誤った場所を指し続けた。レジストラは自動更新の妨げになるため、レジストリロックを申請しにくくしている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 134,
   "title": "GitHub Availability Report: November 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2023/",
   "provider": "GitHub",
   "date": "2023-11-03",
   "year": 2023,
   "datetimeBegin": "2023-11-03 18:42:00",
   "datetimeEnd": "2023-11-03 19:20:00",
   "tz": "UTC",
   "duration": "38分",
   "durationMinutes": 38,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "GitHub Availability Report: November 2023",
   "rootCause": "認可サービスが高負荷でメモリを使い過ぎ、メモリリークでポッドが繰り返しクラッシュした。認可が既定の拒否になり、大半のページとAPIが404やエラーを返した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 135,
   "title": "GitHub Availability Report: August 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2024/",
   "provider": "GitHub",
   "date": "2024-08-14",
   "year": 2024,
   "datetimeBegin": "2024-08-14 23:02:00",
   "datetimeEnd": "2024-08-14 23:38:00",
   "tz": "UTC",
   "duration": "36分",
   "durationMinutes": 36,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: August 2024",
   "rootCause": "より速いロールバック機能や、依存先の障害に対する耐性など、複数の修復項目を優先して進めているとページは述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 136,
   "title": "\"This site may harm your computer\" on every search result?!?!",
   "url": "https://googleblog.blogspot.com/2009/01/this-site-may-harm-your-computer-on.html",
   "provider": "Google",
   "date": "2009-01-31",
   "year": 2009,
   "datetimeBegin": "2009-01-31",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "\"This site may harm your computer\" on every search result?!?!",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 137,
   "title": "Post Incident Report: April 4, 2025 - CircleCI UI Loading & build triggering issues",
   "url": "https://discuss.circleci.com/t/post-incident-report-april-4-2025-circleci-ui-loading-build-triggering-issues/53208",
   "provider": "CircleCI",
   "date": "2025-04-04",
   "year": 2025,
   "datetimeBegin": "2025-04-04",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Post Incident Report: April 4, 2025 - CircleCI UI Loading & build triggering issues",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 138,
   "title": "Kubernetes made my latency 10x higher",
   "url": "https://varoa.net/kubernetes/migration/latency/dns/java/aws/microservices/2019/10/22/kubernetes-added-a-0-to-my-latency.html",
   "provider": "Varoa",
   "date": "2012-04-26",
   "year": 2012,
   "datetimeBegin": "2012-04-26T16:39:16",
   "datetimeEnd": "2012-04-26T16:39:16",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Kubernetes made my latency 10x higher",
   "rootCause": "コンテナからのDNS問い合わせは21〜43ミリ秒かかり、過去の類似からDNSが最有力の仮説だった。本当の原因はまだ隠れており、その環境に固有だと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 139,
   "title": "The Internet is a cooperative system: CNAME to Dyn DNS outage of 6 July 2015",
   "url": "https://blog.cloudflare.com/the-internet-is-a-cooperative-system-dns-outage-of-6-july-2015",
   "provider": "Cloudflare",
   "date": "2015-07-06",
   "year": 2015,
   "datetimeBegin": "2015-07-06",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "The Internet is a cooperative system: CNAME to Dyn DNS outage of 6 July 2015",
   "rootCause": "CloudflareのCNAME利用者でDNS解決エラーが起き、自社のサポートサイトも含めて名前が引けなくなった。原因は別のDNS事業者Dynの設定不具合だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 140,
   "title": "Today’s outage for several Google services",
   "url": "https://blog.google/company-news/inside-google/company-announcements/todays-outage-for-several-google",
   "provider": "Google",
   "date": "2014-01-24",
   "year": 2014,
   "datetimeBegin": "2014-01-24",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Today’s outage for several Google services",
   "rootCause": "設定を生成する内部システムがソフトウェアのバグで誤った設定を作り、15分かけて本番へ送った。利用者のデータ要求が無視され、Gmailなどがエラーを返した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 141,
   "title": "[xubuntu-users] Public postmortum of the brief Xubuntu.org torrent download compromise last month",
   "url": "https://lists.ubuntu.com/archives/xubuntu-users/2025-November/012210.html",
   "provider": "Lists",
   "date": "2025-11-17",
   "year": 2025,
   "datetimeBegin": "2025-11-17 17:59:36",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "[xubuntu-users] Public postmortum of the brief Xubuntu.org torrent download compromise last month",
   "rootCause": "悪意のある者が、Canonicalが管理するWordPressの脆弱な部品を総当たりで破って侵入し、Xubuntu.orgのトレント配布が侵害された。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 142,
   "title": "Adammargherio | Peerless Info About Fire Rated Draft Stopping Vs Standard Insulation Blog",
   "url": "https://adammargherio.com/a-perfect-dns-storm",
   "provider": "Adammargherio",
   "date": "2026-05-25",
   "year": 2026,
   "datetimeBegin": "2026-05-25",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Adammargherio | Peerless Info About Fire Rated Draft Stopping Vs Standard Insulation Blog",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 143,
   "title": "Postmortem for Malicious Packages Published on July 12th, 2018 - ESLint - Pluggable JavaScript Linter",
   "url": "https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes",
   "provider": "ESLint",
   "date": "2026-08-06",
   "year": 2026,
   "datetimeBegin": "2026-08-06",
   "datetimeEnd": "2026-08-06",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Postmortem for Malicious Packages Published on July 12th, 2018 - ESLint - Pluggable JavaScript Linter",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 144,
   "title": "Summary of the Amazon DynamoDB Service Disruption in the Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/101925",
   "provider": "AWS",
   "date": "2025-10-19",
   "year": 2025,
   "datetimeBegin": "2025-10-19",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the Amazon DynamoDB Service Disruption in the Northern Virginia (US-EAST-1) Region",
   "rootCause": "DynamoDBの障害は、自動DNS管理システムに潜む欠陥が引き金で、エンドポイントの名前解決が失敗した。NLBのヘルスチェック失敗で一部の接続エラーが増え、EC2の新規起動も失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 145,
   "title": "GitHub Availability Report: March 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2024/",
   "provider": "GitHub",
   "date": "2024-03-15",
   "year": 2024,
   "datetimeBegin": "2024-03-15 19:42:00",
   "datetimeEnd": "2024-03-15 20:24:00",
   "tz": "UTC",
   "duration": "42分",
   "durationMinutes": 42,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "GitHub Availability Report: March 2024",
   "rootCause": "権限システムの回帰でCodespaces、Actions、Pagesが失敗し、配備を戻して開発とCIの設定不備を直した。別件ではネットワーク設定を誤った環境へ配備してサービスが劣化した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 146,
   "title": "Incident Report: November 8, 2021 - Jobs stuck in a \"not running\" state",
   "url": "https://discuss.circleci.com/t/incident-report-november-8-2021-jobs-stuck-in-a-not-running-state/41890",
   "provider": "CircleCI",
   "date": "2021-11-08",
   "year": 2021,
   "datetimeBegin": "2021-11-08",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Incident Report: November 8, 2021 - Jobs stuck in a \"not running\" state",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 147,
   "title": "January 28th Incident Report",
   "url": "https://github.blog/news-insights/company-news/january-28th-incident-report",
   "provider": "GitHub",
   "date": "2016-01-28",
   "year": 2016,
   "datetimeBegin": "2016-01-28",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "January 28th Incident Report",
   "rootCause": "期待される稼働を維持できず、到達不能なサーバの通知とRedis接続例外の急増から、内部ネットワーク障害の可能性を調べた。ChatOpsは冗長でも、この失敗で対応の最初に混乱と遅れが出た。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 148,
   "title": "GitHub Availability Report: June 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2023/",
   "provider": "GitHub",
   "date": "2023-06-07",
   "year": 2023,
   "datetimeBegin": "2023-06-07 16:11:00",
   "datetimeEnd": "2023-06-07 18:11:00",
   "tz": "UTC",
   "duration": "2時間",
   "durationMinutes": 120,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: June 2023",
   "rootCause": "特定のデータ形状を持つリポジトリへ顧客が大量のpushをしたため、処理が遅延した。再発防止としてGitバックエンドのスロットリングを早く失敗するよう変え、ジョブ内のクライアントタイムアウトを短くした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 149,
   "title": "GitHub Availability Report: January 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2024/",
   "provider": "GitHub",
   "date": "2024-01-09",
   "year": 2024,
   "datetimeBegin": "2024-01-09 12:20:00",
   "datetimeEnd": "2024-01-09 14:40:00",
   "tz": "UTC",
   "duration": "2時間20分",
   "durationMinutes": 140,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: January 2024",
   "rootCause": "ホストのアップグレードでフリートの容量が一時的に減り、リクエストの平均5%、最大10%が5xxかタイムアウトになった。Codespacesは計算資源とストレージの運用問題で、複数リージョンの作成と再開に失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 150,
   "title": "On Infrastructure at Scale: A Cascading Failure of Distributed Systems",
   "url": "https://danveloper.medium.com/on-infrastructure-at-scale-a-cascading-failure-of-distributed-systems-7cff2a3cd2df",
   "provider": "Danveloper",
   "date": "2019-01-15",
   "year": 2019,
   "datetimeBegin": "2019-01-15",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "On Infrastructure at Scale: A Cascading Failure of Distributed Systems",
   "rootCause": "短い中断のつもりだったネットワーク更新で問題が起き、数時間接続が断続してKafkaも不安定になった。Kafkaが戻るとログのサイドカーが一斉に起き、Kubernetesノードのdockerデーモンが高負荷になった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 151,
   "title": "Incident details | Google Cloud Service Health",
   "url": "https://status.cloud.google.com/incidents/ow5i3PPK96RduMcb1SsW",
   "provider": "Google Cloud",
   "date": "2025-06-12",
   "year": 2025,
   "datetimeBegin": "2025-06-12",
   "datetimeEnd": "2025-06-12",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "コード変更とバイナリはリージョンごとに展開されたが、失敗した経路はポリシー変更が無いと動かず、展開中に一度も実行されなかった。API GatewayやCloud Runを含む多数のサービスが障害になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 152,
   "title": "Outage report 7 July 2020 - PythonAnywhere News",
   "url": "https://blog.pythonanywhere.com/189",
   "provider": "Pythonanywhere",
   "date": "2020-07-07",
   "year": 2020,
   "datetimeBegin": "2020-07-07",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Outage report 7 July 2020 - PythonAnywhere News",
   "rootCause": "ストレージサーバの一つのボリュームが故障し、自社サイトと、そのボリュームに依存する利用者のプログラムが止まり、その後ほかのホスト済みサイトへ広がった。データはミラーとバックアップがあり、失われず危険もなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 153,
   "title": "About the boot.ini issue | EVE Online",
   "url": "https://eveonline.com/news/view/about-the-boot.ini-issue",
   "provider": "EVE Online",
   "date": "2007-12-11",
   "year": 2007,
   "datetimeBegin": "2007-12-11",
   "datetimeEnd": "2007-12-11",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "About the boot.ini issue | EVE Online",
   "rootCause": "インストーラがフルパスなしでboot.iniを削除し、インストール先ではなくカレントドライブのルートから消した。悪影響を受けたと連絡した利用者は215人未満だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 154,
   "title": "How I Broke `git push heroku main`",
   "url": "https://heroku.com/blog/how-i-broke-git-push-heroku-main",
   "provider": "Heroku",
   "date": "2020-10-01",
   "year": 2020,
   "datetimeBegin": "2020-10-01",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "How I Broke `git push heroku main`",
   "rootCause": "herokuのmainへのgit pushを壊したデプロイは、新しい設定変数を設定し、全インスタンスへ伝えてから、その設定を使い始める手作業が必要だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 155,
   "title": "The shipwreck of GKE Cluster Upgrade",
   "url": "https://deploy.live/blog/the-shipwreck-of-gke-cluster-upgrade",
   "provider": "Deploy",
   "date": "2019-03-19",
   "year": 2019,
   "datetimeBegin": "2019-03-19T02:23:01",
   "datetimeEnd": "2019-03-19T02:23:01",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "The shipwreck of GKE Cluster Upgrade",
   "rootCause": "GKEクラスタのアップグレードは順調で、クラスタはフェイルオーバーを問題なくこなし、最新のGKEで動かし始めたと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 156,
   "title": "Google Cloud Status Dashboard",
   "url": "https://status.cloud.google.com/incident/compute/15056",
   "provider": "Google Cloud",
   "date": "2015-08-13",
   "year": 2015,
   "datetimeBegin": "2015-08-13",
   "datetimeEnd": "2015-08-13",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "欧州データセンターの電力網へ落雷が四回続き、europe-west1-bのGCE用ストレージが短時間停電した。電池の消耗に弱い装置で書き込み直後のデータが影響し、標準永続ディスクの約5%で入出力が失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 157,
   "title": "Details of Google Cloud GCVE incident | Google Cloud Blog",
   "url": "https://cloud.google.com/blog/products/infrastructure/details-of-google-cloud-gcve-incident",
   "provider": "Google Cloud",
   "date": "2024-05-24",
   "year": 2024,
   "datetimeBegin": "2024-05-24",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "config-error"
   ],
   "summary": "Details of Google Cloud GCVE incident | Google Cloud Blog",
   "rootCause": "GCVEプライベートクラウドの初期展開で、Googleの運用者が内部ツールのパラメータを空欄にして設定を誤った。顧客の削除依頼ではなく、その空欄が削除を引き起こした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 158,
   "title": "GitHub Availability Report: November 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2021",
   "provider": "GitHub",
   "date": "2021-11-27",
   "year": 2021,
   "datetimeBegin": "2021-11-27 20:40:00",
   "datetimeEnd": "2021-11-27 23:30:00",
   "tz": "UTC",
   "duration": "2時間50分",
   "durationMinutes": 170,
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: November 2021",
   "rootCause": "大きなMySQLテーブルのスキーマ移行でデッドロックが起き、当たった読み取りレプリカがクラッシュリカバリに入った。健全なレプリカへ負荷が集中し、本番を捌ける台数が足りず中核サービスが止まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 159,
   "title": "Zero-downtime Postgres migrations - the hard parts",
   "url": "https://gocardless.com/blog/zero-downtime-postgres-migrations-the-hard-parts",
   "provider": "GoCardless",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Zero-downtime Postgres migrations - the hard parts",
   "rootCause": "外部キー制約を追加するとき、Postgresは対象の表と参照先の表にAccessExclusiveロックを取り、他トランザクションがロックを持っていると待ち行列に入ると説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 160,
   "title": "Heroku Status",
   "url": "https://status.heroku.com/incidents/2451",
   "provider": "Heroku",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 161,
   "title": "Roblox Return to Service | Roblox",
   "url": "https://about.roblox.com/newsroom/2022/01/roblox-return-to-service-10-28-10-31-2021",
   "provider": "Roblox",
   "date": "2022-10-28",
   "year": 2022,
   "datetimeBegin": "2022-10-28",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "3日1時間",
   "durationMinutes": 4380,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "resource-exhaustion"
   ],
   "summary": "Roblox Return to Service | Roblox",
   "rootCause": "10月28日に始まり10月31日に解消したRobloxの停止は73時間続き、毎日約5千万人が使う規模だった。長さと複雑さの両方で異例の障害だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 162,
   "title": "Redirecting...",
   "url": "https://allegro.tech/2015/01/allegro-cast-post-mortem.html",
   "provider": "Allegro",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Redirecting...",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 163,
   "title": "Cloudflare outage on February 20, 2026",
   "url": "https://blog.cloudflare.com/cloudflare-outage-february-20-2026",
   "provider": "Cloudflare",
   "date": "2026-02-05",
   "year": 2026,
   "datetimeBegin": "2026-02-05",
   "datetimeEnd": "2026-02-05",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Cloudflare outage on February 20, 2026",
   "rootCause": "BYOIPで取り込んだIPの管理方法を変えた結果、Cloudflareが顧客プレフィックスをBGPで意図せず撤回した。BYOIPを使う一部の顧客で、インターネットへの経路が消えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 164,
   "title": "2023-03-08 Incident: Infrastructure connectivity issue affecting multiple regions | Datadog",
   "url": "https://datadoghq.com/blog/2023-03-08-multiregion-infrastructure-connectivity-issue",
   "provider": "Datadog",
   "date": "2023-03-08",
   "year": 2023,
   "datetimeBegin": "2023-03-08",
   "datetimeEnd": "2023-03-08",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "2023-03-08 Incident: Infrastructure connectivity issue affecting multiple regions | Datadog",
   "rootCause": "複数リージョンのインフラ接続障害は、不具合のあるアップグレードが引き金だった。各種サービスのデータ取り込みも当初影響を受け、未処理のまま残った過去データの復旧へ切り替えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 165,
   "title": "kubernetes-on-aws/docs/postmortems/jun-2019-kubelet-qps.md at dev · zalando-incubator/kubernetes-on-aws",
   "url": "https://github.com/zalando-incubator/kubernetes-on-aws/blob/dev/docs/postmortems/jun-2019-kubelet-qps.md",
   "provider": "GitHub",
   "date": "2019-06-11",
   "year": 2019,
   "datetimeBegin": "2019-06-11",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "kubernetes-on-aws/docs/postmortems/jun-2019-kubelet-qps.md at dev · zalando-incubator/kubernetes-on-aws",
   "rootCause": "CDPのKubernetesクラスタが再スケールでビルダー用ノードが一台になり、Podの急な作成と削除でKubeletが遅れた。ビルダーPodがAWSのIAM認証情報を取れず、ビルドが約一時間失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 166,
   "title": "GitHub Availability Report: December 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2023/",
   "provider": "GitHub",
   "date": "2023-12-27",
   "year": 2023,
   "datetimeBegin": "2023-12-27 02:30:00",
   "datetimeEnd": "2023-12-27 04:00:00",
   "tz": "UTC",
   "duration": "1時間30分",
   "durationMinutes": 90,
   "triggers": [
    "Maintainance",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: December 2023",
   "rootCause": "HMAC秘密のローテーションを戻す際、Azure Key Vaultから鍵を取るバグで鍵を無効化するとサービス間APIが失敗し、Codespacesの作成が全件、再開の約15%が失敗した。翌日は通知バックエンドと一部SMTPの認証失敗でメールが送られなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 167,
   "title": "Postmortem — why Allegro went down",
   "url": "https://blog.allegro.tech/2018/08/postmortem-why-allegro-went-down.html",
   "provider": "Blog",
   "date": "2018-07-18",
   "year": 2018,
   "datetimeBegin": "2018-07-18",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Postmortem — why Allegro went down",
   "rootCause": "通常約850ズウォティのHonor 7Cを100台、1ズウォティで売る販売が想定以上のアクセスを集め、スケールアウト設定の誤りを引き起こした。CPUやメモリやネットワークは足りていたがサイトが落ちた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 168,
   "title": "Google Cloud Status Dashboard",
   "url": "https://status.cloud.google.com/incident/compute/16007",
   "provider": "Google Cloud",
   "date": "2016-04-11",
   "year": 2016,
   "datetimeBegin": "2016-04-11",
   "datetimeEnd": "2016-04-11",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "入方向のトラフィックを失い、その経路に依存するVPNとL3ネットワークロードバランサも失敗した。根本原因は把握済みで、GCEに再発の恐れはないと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 169,
   "title": "Container-based Linux Precise infrastructure emergency maintenance",
   "url": "https://traviscistatus.com/incidents/sxrh0l46czqn",
   "provider": "Travis CI",
   "date": "2017-02-06",
   "year": 2017,
   "datetimeBegin": "2017-02-06",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Container-based Linux Precise infrastructure emergency maintenance",
   "rootCause": "ジョブが誤って失敗と判定される問題があり、v2.5.0へロールバックを始めた。ワーカーイメージのDocker Hubタグが無くインスタンスがサービスに入れず、タグを作ってロールバックを通した。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 170,
   "title": "Instapaper Outage Cause & Recovery",
   "url": "https://medium.com/making-instapaper/instapaper-outage-cause-recovery-3c32a7e9cc5f",
   "provider": "Medium",
   "date": "2017-02-14",
   "year": 2017,
   "datetimeBegin": "2017-02-14",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Instapaper Outage Cause & Recovery",
   "rootCause": "Instapaperの長期停止はAmazon RDS上のMySQLが原因で、2014年4月より前のインスタンスが使うext3のファイル上限2TBに達したためだった。ブックマーク表への新規挿入がエラーになった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 171,
   "title": "CircleCI Jan 4, 2023 security incident report - CircleCI",
   "url": "https://circleci.com/blog/jan-4-2023-incident-report",
   "provider": "CircleCI",
   "date": "2023-01-04",
   "year": 2023,
   "datetimeBegin": "2023-01-04",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "CircleCI Jan 4, 2023 security incident report - CircleCI",
   "rootCause": "標的の従業員が業務で本番のアクセストークンを発行できたため、権限のない第三者が一部のデータベースやストアから、顧客の環境変数、トークン、鍵を持ち出した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 172,
   "title": "RESOLVED: Current account payments may fail - Major Outage (27/10/2017)",
   "url": "https://community.monzo.com/t/resolved-current-account-payments-may-fail-major-outage-27-10-2017/26296/95",
   "provider": "Monzo",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "RESOLVED: Current account payments may fail - Major Outage (27/10/2017)",
   "rootCause": "2017年10月27日、当座口座の支払が失敗しうる大規模障害が起き、その後解決したとコミュニティの見出しは示している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 173,
   "title": "Cloudflare service outage June 12, 2025",
   "url": "https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025",
   "provider": "Cloudflare",
   "date": "2025-06-12",
   "year": 2025,
   "datetimeBegin": "2025-06-12",
   "datetimeEnd": "2025-06-12",
   "tz": "UTC",
   "duration": "2時間28分",
   "durationMinutes": 148,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "upstream-failure"
   ],
   "summary": "Cloudflare service outage June 12, 2025",
   "rootCause": "Workers KVが使う基盤ストレージが故障し、その一部を担う第三者クラウドの障害がKVの可用性を直接下げた。KVに依存するWARPやAccessなど多くのサービスが2時間28分止まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 174,
   "title": "GitHub Availability Report: February 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2023/",
   "provider": "GitHub",
   "date": "2023-01-30",
   "year": 2023,
   "datetimeBegin": "2023-01-30 21:31:00",
   "datetimeEnd": "2023-01-30 22:06:00",
   "tz": "UTC",
   "duration": "35分",
   "durationMinutes": 35,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: February 2023",
   "rootCause": "コンテナレジストリの本番配備ファイルに接続文字列が固定で書かれ、クライアントが認証できずPackagesとPagesの多くが失敗した。東南アジアのCodespacesはクラウド事業者のデータセンター障害で作成と接続に失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 175,
   "title": "August 30th 2020: Analysis of CenturyLink/Level(3) outage",
   "url": "https://blog.cloudflare.com/analysis-of-todays-centurylink-level-3-outage",
   "provider": "Cloudflare",
   "date": "2020-08-30",
   "year": 2020,
   "datetimeBegin": "2020-08-30",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "August 30th 2020: Analysis of CenturyLink/Level(3) outage",
   "rootCause": "CenturyLink/Level(3)のネットワークが10:03 UTCに障害となり、Cloudflareの一部顧客を含む多くのサービスが影響を受けた。Cloudflareの自動システムは被害を検知して経路を迂回した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 176,
   "title": "GitHub Availability Report: March 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2021/",
   "provider": "GitHub",
   "date": "2021-03-15",
   "year": 2021,
   "datetimeBegin": "2021-03-15",
   "datetimeEnd": "2021-03-15",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: March 2021",
   "rootCause": "依存するGraphQLライブラリがJSONをInt32で読み、check suiteのIDがInt32の上限を超えて失敗した。Actionsのキュー済みジョブの一部が失敗するか遅れた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 177,
   "title": "Our recent mobile network outage has been resolved: here’s what happened",
   "url": "https://www.telstra.com.au/exchange/some-mobile-calls-and-data-services-are-affected-today--here-s-w",
   "provider": "Telstra",
   "date": "2026-07-08",
   "year": 2026,
   "datetimeBegin": "2026-07-08",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Our recent mobile network outage has been resolved: here’s what happened",
   "rootCause": "基盤のソフトウェア設定のため、サーバが誤った日付のまま再起動した。誤った時刻がネットワークへ広がり、音声とデータの一部へ断続的な影響が出た。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 178,
   "title": "Slack’s Incident on 2-22-22",
   "url": "https://slack.engineering/slacks-incident-on-2-22-22/",
   "provider": "Slack",
   "date": "2022-04-26",
   "year": 2022,
   "datetimeBegin": "2022-04-26",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Slack’s Incident on 2-22-22",
   "rootCause": "アプリケーション、Vitess、キャッシュ、サービスディスカバリの相互作用で、安定して捌けていた状態からデータベース層の過負荷へ移った。クライアントの起動要求が長くなって失敗し、Slackへ接続できない利用者が増えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 179,
   "title": "Maximize learnings from a Kubernetes cluster failure | TBNL",
   "url": "https://tibobeijen.nl/2019/02/01/learning-from-kubernetes-cluster-failure",
   "provider": "Tibobeijen",
   "date": "2019-02-01",
   "year": 2019,
   "datetimeBegin": "2019-02-01",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Maximize learnings from a Kubernetes cluster failure | TBNL",
   "rootCause": "NU.nlの開発チームがKubernetesクラスタの障害を振り返る中で、根本原因だけを責めるポストモーテムは至る問題の約15%しか覆えない、という講演の指摘を紹介している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 180,
   "title": "Summary of the AWS Service Event in the Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/12721",
   "provider": "AWS",
   "date": "2021-12-07",
   "year": 2021,
   "datetimeBegin": "2021-12-07",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "upstream-failure"
   ],
   "summary": "Summary of the AWS Service Event in the Northern Virginia (US-EAST-1) Region",
   "rootCause": "午前7時30分（PST）、メインのAWSネットワーク上のサービス容量を増やす自動処理が、内部の多数のクライアントに予期しない挙動を引き起こした。内部DNSの通信が輻輳に寄与したと考え、その通信を混雑した経路から移した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 181,
   "title": "Code Orange: Fail Small is complete. The result is a stronger Cloudflare network",
   "url": "https://blog.cloudflare.com/code-orange-fail-small-complete",
   "provider": "Cloudflare",
   "date": "2025-12-05",
   "year": 2025,
   "datetimeBegin": "2025-12-05",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Code Orange: Fail Small is complete. The result is a stronger Cloudflare network",
   "rootCause": "CloudflareはCode Orangeという耐障害化を完了し、より安全な設定変更や障害影響の縮小、緊急手順の見直しで、2025年11月18日と12月5日の全世界障害を避けられたはずだと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 182,
   "title": "DNS Outage Post Mortem",
   "url": "https://github.blog/news-insights/the-library/dns-outage-post-mortem",
   "provider": "GitHub",
   "date": "2014-01-18",
   "year": 2014,
   "datetimeBegin": "2014-01-18",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "software-defect"
   ],
   "summary": "DNS Outage Post Mortem",
   "rootCause": "2014年1月8日にGitHubのDNS基盤が停止し、サービスが42分使えず、一部のリポジトリは完全復旧までさらに1時間35分停止した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 183,
   "title": "Downtime last Saturday",
   "url": "https://github.blog/news-insights/the-library/downtime-last-saturday/",
   "provider": "GitHub",
   "date": "2012-12-26",
   "year": 2012,
   "datetimeBegin": "2012-12-26",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "upstream-failure"
   ],
   "summary": "Downtime last Saturday",
   "rootCause": "12月22日にGitHubで歴史上でも最悪の部類の停止が起きた。残ったスイッチが対向の切断を検知してMLAGの共有資源を引き継ぎ始め、ベンダー推奨のソフト更新はそれ以前の障害への対策として期待されていた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 184,
   "title": "Knightmare: A DevOps Cautionary Tale",
   "url": "https://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale",
   "provider": "Dougseven",
   "date": "2014-04-17",
   "year": 2014,
   "datetimeBegin": "2014-04-17",
   "datetimeEnd": "2014-04-17",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Knightmare: A DevOps Cautionary Tale",
   "rootCause": "失敗したデプロイのあと、8台目のサーバへ送った注文が転用済みとされるフラグを動かし、古いPower Pegのコードが戻った。約4億ドルの資産を持つ会社が45分で破綻した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 185,
   "title": "Project:Infrastructure/Incident reports/2018-06-28 Github - Gentoo wiki",
   "url": "https://wiki.gentoo.org/wiki/Github/2018-06-28",
   "provider": "Wiki",
   "date": "2018-06-29",
   "year": 2018,
   "datetimeBegin": "2018-06-29T14:30:18",
   "datetimeEnd": "2018-06-29T14:30:18",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Project:Infrastructure/Incident reports/2018-06-28 Github - Gentoo wiki",
   "rootCause": "攻撃者はGentooの組織管理者のパスワードを入手し、複数リポジトリへrm -rfを入れて利用者コンテンツの消去を試みた。技術的な歯止めで実行されにくい一方、GitHubはgit経由のアクセスを止められず、悪意あるコミットが外から見えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 186,
   "title": "GitHub Availability Report: December 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2022/",
   "provider": "GitHub",
   "date": "2022-11-25",
   "year": 2022,
   "datetimeBegin": "2022-11-25 16:34:00",
   "datetimeEnd": "2022-11-25 18:30:00",
   "tz": "UTC",
   "duration": "1時間56分",
   "durationMinutes": 116,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub Availability Report: December 2022",
   "rootCause": "GitHub Packagesが使う第三者データベースの事業者が障害を起こし、Packagesの性能が低下した。Pagesはパッケージを取れずCIビルドが失敗し、別リージョンへ切り替える前に事業者側で緩和された。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 187,
   "title": "Hardening Workers KV",
   "url": "https://blog.cloudflare.com/workers-kv-restoring-reliability",
   "provider": "Cloudflare",
   "date": "2023-07-17",
   "year": 2023,
   "datetimeBegin": "2023-07-17",
   "datetimeEnd": "2023-07-17",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "software-defect"
   ],
   "summary": "Hardening Workers KV",
   "rootCause": "一連の障害の根本は、エラー報告の観測不足と、ローカル状態の変更がグローバル状態を予期せず変えたことの二つだった。原因自体はすぐ直せたが、顧客影響のあと数日は観測と再現が難しかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 188,
   "title": "Heroku Status",
   "url": "https://status.heroku.com/incidents/1091",
   "provider": "Heroku",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 189,
   "title": "Summary of the AWS Lambda Service Event in Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/061323",
   "provider": "AWS",
   "date": "2023-06-13",
   "year": 2023,
   "datetimeBegin": "2023-06-13",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the AWS Lambda Service Event in Northern Virginia (US-EAST-1) Region",
   "rootCause": "Lambdaフロントエンドのスケールが潜在的なソフトウェア欠陥を起こし、実行環境は割り当てられたがフロントエンドが最後まで使わなかった。非同期やストリーミングのイベントは処理されず滞留した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 190,
   "title": "Status",
   "url": "https://stackstatus.net/post/96025967369/outage-post-mortem-august-25th-2014",
   "provider": "Stack Overflow",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Status",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 191,
   "title": "GitHub availability report: June 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2026/",
   "provider": "GitHub",
   "date": "2026-05-21",
   "year": 2026,
   "datetimeBegin": "2026-05-21",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "1時間25分",
   "durationMinutes": 85,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub availability report: June 2026",
   "rootCause": "5月21日の安定性の問題で環境が追加トラフィックに未準備だと分かり、移行の拡大を約一か月止めた。6月4日17時30分から18時55分（UTC）は、Copilotのコードレビュー要求で失敗が増えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 192,
   "title": "Google Cloud Status Dashboard",
   "url": "https://status.cloud.google.com/incident/compute/17007",
   "provider": "Google Cloud",
   "date": "2017-04-05",
   "year": 2017,
   "datetimeBegin": "2017-04-05",
   "datetimeEnd": "2017-04-05",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "HTTP(S)ロードバランサの設定更新処理にあるバグが、かなり古い設定へ戻した。失敗した要求は502になり、インシデント後に設定変更を3時間41分止めた間はApp Engine Flexibleの配備が失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 193,
   "title": "GitHub Availability Report: January 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2021/",
   "provider": "GitHub",
   "date": "2021-01-28",
   "year": 2021,
   "datetimeBegin": "2021-01-28 04:21:00",
   "datetimeEnd": "2021-01-28 07:21:00",
   "tz": "UTC",
   "duration": "3時間",
   "durationMinutes": 180,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: January 2021",
   "rootCause": "SQLデータベース層のインフラエラーが、Actions間の認証と通信を担う中核マイクロサービスを止めた。キュー済みジョブが失敗または遅延し、通常なら自動フェイルオーバーで顧客影響は小さいはずだった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 194,
   "title": "Basecamp network attack postmortem",
   "url": "https://signalvnoise.com/posts/3729-basecamp-network-attack-postmortem",
   "provider": "Signalvnoise",
   "date": "2014-03-24",
   "year": 2014,
   "datetimeBegin": "2014-03-24",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Basecamp network attack postmortem",
   "rootCause": "障害に遭った相手へ、インフラが改善し、逆境で組織が協力し、サービスの価値が人に見えたことには良い面もある、とコメントが述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 195,
   "title": "PagerDuty Status Page",
   "url": "https://status.pagerduty.com/incidents/vbp7ht2647l8",
   "provider": "PagerDuty",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "PagerDuty Status Page",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 196,
   "title": "2020-09-25 Incident: Infrastructure connectivity issue impacting multiple systems | Datadog",
   "url": "https://datadoghq.com/blog/2020-09-25-infrastructure-connectivity-issue",
   "provider": "Datadog",
   "date": "2020-09-25",
   "year": 2020,
   "datetimeBegin": "2020-09-25",
   "datetimeEnd": "2020-09-25",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "2020-09-25 Incident: Infrastructure connectivity issue impacting multiple systems | Datadog",
   "rootCause": "大半のソフトウェアが依存する、内部のサービスディスカバリと動的な設定のシステムが故障した。ウェブ層が断続的に繰り返し落ち、影響のない製品へも利用者がアクセスしにくくなった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 197,
   "title": "Security Incident Disclosure",
   "url": "https://brew.sh/2018/08/05/security-incident-disclosure",
   "provider": "Homebrew",
   "date": "2018-08-05",
   "year": 2018,
   "datetimeBegin": "2018-08-05",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Security Incident Disclosure",
   "rootCause": "このインシデントでパッケージは侵害されておらず、利用者の対応は不要だと明示している。多くのHomebrewリポジトリは、masterへ入れる前にプルリクエストのCI合格を必須にした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 198,
   "title": "Mars Climate Orbiter - Wikipedia",
   "url": "https://en.wikipedia.org/wiki/Mars_Climate_Orbiter",
   "provider": "En",
   "date": "1998-12-11",
   "year": 1998,
   "datetimeBegin": "1998-12-11 18:45:51",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Mars Climate Orbiter - Wikipedia",
   "rootCause": "調査は、NASAがSI単位、製造したLockheed Martinが米国慣用単位を使った計測の不一致を失敗の原因だと結論した。Mars Climate Orbiterのミッションは失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 199,
   "title": "Website Intermittent Timeouts",
   "url": "https://status.mailgun.com/incidents/p9nxxql8g9rh",
   "provider": "Mailgun",
   "date": "2017-01-12",
   "year": 2017,
   "datetimeBegin": "2017-01-12",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "resource-exhaustion"
   ],
   "summary": "Website Intermittent Timeouts",
   "rootCause": "読み取りに使うMongoDBのセカンダリへの接続が徐々に増えて高負荷になり、時間内に応答できなくなった。人的ミスで変更を戻しつつAPIとSMTPをプライマリへ移し、15:55 UTCからエラーが増えた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 200,
   "title": "Summary of the Amazon EC2 Issues in the Asia Pacific (Tokyo) Region (AP-NORTHEAST-1)",
   "url": "https://aws.amazon.com/message/56489",
   "provider": "AWS",
   "date": "2019-08-28",
   "year": 2019,
   "datetimeBegin": "2019-08-28",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "hardware-failure"
   ],
   "summary": "Summary of the Amazon EC2 Issues in the Asia Pacific (Tokyo) Region (AP-NORTHEAST-1)",
   "rootCause": "東京リージョンの単一アベイラビリティゾーンで、冗長化された空調設備の管理システムが故障して過熱し、一部のEC2が停止してEBSの性能が劣化した。直前は制御ホストを一台外す処理中で、制御システムのフェイルオーバーモードがバグを引き起こした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 201,
   "title": "How a couple of characters brought down our site",
   "url": "https://medium.com/@SkyscannerEng/how-a-couple-of-characters-brought-down-our-site-356ccaf1fbc3",
   "provider": "Medium",
   "date": "2021-11-11",
   "year": 2021,
   "datetimeBegin": "2021-11-11",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "How a couple of characters brought down our site",
   "rootCause": "2021年8月25日、数文字の操作がskyscanner.netとモバイルアプリ向けのマイクロサービスを世界中の基盤から削除し、4時間半の全世界停止になった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 202,
   "title": "GitHub Availability Report: February 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2022/",
   "provider": "GitHub",
   "date": "2022-02-02",
   "year": 2022,
   "datetimeBegin": "2022-02-02 19:05:00",
   "datetimeEnd": "2022-02-02 19:18:00",
   "tz": "UTC",
   "duration": "13分",
   "durationMinutes": 13,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: February 2022",
   "rootCause": "定期デプロイが、Subresource Integrityに必要な整合性ハッシュを一式生成できなかった。主要JavaScriptの確認を配備コンテナのヘルスチェックへ加え、生成処理が同様に失敗しないよう直した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 203,
   "title": "Redirecting…",
   "url": "https://githubengineering.com/ddos-incident-report",
   "provider": "Githubengineering",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Redirecting…",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 204,
   "title": "Ariane flight V88 - Wikipedia",
   "url": "https://en.wikipedia.org/wiki/Cluster_%28spacecraft%29",
   "provider": "En",
   "date": "2014-04-26",
   "year": 2014,
   "datetimeBegin": "2014-04-26",
   "datetimeEnd": "2014-04-26",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Ariane flight V88 - Wikipedia",
   "rootCause": "1996年6月4日12時34分（UTC）、アリアンスペースはクールーのELA-3からAriane 5の初飛行V88を打ち上げ、37秒で失敗して機体が爆発した。搭載のCluster衛星は4機で、ロケットのシリアル番号は501だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 205,
   "title": "GitHub Availability Report: March 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2025/",
   "provider": "GitHub",
   "date": "2025-03-29",
   "year": 2025,
   "datetimeBegin": "2025-03-29 07:00:00",
   "datetimeEnd": "2025-03-31 17:00:00",
   "tz": "UTC",
   "duration": "2日10時間",
   "durationMinutes": 3480,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: March 2025",
   "rootCause": "3月29日、内部サービスの認証情報が期限切れになり、マーケティングメールの購読解除ができなくなった。3月31日はresources.github.comの電子書籍とイベント登録がサービス停止で送信できなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 206,
   "title": "GitHub availability this week",
   "url": "https://github.blog/news-insights/the-library/github-availability-this-week/",
   "provider": "GitHub",
   "date": "2012-09-14",
   "year": 2012,
   "datetimeBegin": "2012-09-14",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub availability this week",
   "rootCause": "2012年9月14日付の記事では、その週の初めにGitHub.comが二度止まり、1時間46分の停止とさらに1時間の著しい性能劣化があった。新構成では全ノードでMySQLが常時動き、フェイルオーバーは仮想IPを移すだけだと説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 207,
   "title": "Major outage on travis-ci.com",
   "url": "https://traviscistatus.com/incidents/z2b3lz2kwcfp",
   "provider": "Travis CI",
   "date": "2018-03-13",
   "year": 2018,
   "datetimeBegin": "2018-03-13",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Major outage on travis-ci.com",
   "rootCause": "2018年3月13日12:14 UTCから約5.5時間、travis-ci.comが停止し、GitHubからの定期同期で新規レコードが要るため既存ユーザーも影響した。データベース復旧後にcronスケジューラを再起動せず、定期ジョブの起動が失敗した。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 208,
   "title": "GitHub Availability Report: June 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2022/",
   "provider": "GitHub",
   "date": "2022-06-01",
   "year": 2022,
   "datetimeBegin": "2022-06-01 09:40:00",
   "datetimeEnd": "2022-06-01 10:28:00",
   "tz": "UTC",
   "duration": "48分",
   "durationMinutes": 48,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: June 2022",
   "rootCause": "データベースへトラフィックを流すプロキシが過負荷になり、ポッドがメモリ不足でクラッシュを繰り返した。そのポッドがデータベースへかけた大きな負荷が、クラッシュの反復とAPIのエラー率上昇を招いた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 209,
   "title": "How Cloudflare mitigated yet another Okta compromise",
   "url": "https://blog.cloudflare.com/how-cloudflare-mitigated-yet-another-okta-compromise",
   "provider": "Cloudflare",
   "date": "2023-10-18",
   "year": 2023,
   "datetimeBegin": "2023-10-18",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "How Cloudflare mitigated yet another Okta compromise",
   "rootCause": "Oktaの侵害について迅速に対応したため、Cloudflareの顧客情報もシステムも、この事象の影響を受けていないと確認した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 210,
   "title": "Updates on the status of Stripe services",
   "url": "https://support.stripe.com/questions/outage-postmortem-2015-10-08-utc",
   "provider": "Stripe",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Updates on the status of Stripe services",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 211,
   "title": "GitHub Availability Report: January 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2025/",
   "provider": "GitHub",
   "date": "2025-01-09",
   "year": 2025,
   "datetimeBegin": "2025-01-09 01:26:00",
   "datetimeEnd": "2025-01-09 01:57:00",
   "tz": "UTC",
   "duration": "31分",
   "durationMinutes": 31,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "GitHub Availability Report: January 2025",
   "rootCause": "配備したクエリがプライマリデータベースを飽和させた。経路試験の設定変更で内部ロードバランサがGitの依存するサービス間要求を破棄して全Git操作が止まり、別件ではレート制限用キャッシュのハードウェア故障でウェブのエラー率がピーク44%になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 212,
   "title": "When GKE ran out of IP addresses",
   "url": "https://deploy.live/blog/when-gke-ran-out-of-ip-addresses",
   "provider": "Deploy",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "When GKE ran out of IP addresses",
   "rootCause": "サブネットのIP空間が枯渇してCluster Autoscalerがノードを三つ追加できず、メモリ不足やCPU不足、ノードセレクタ不一致でPodがスケジュールされなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 213,
   "title": "Summary of the Amazon EC2, Amazon EBS, and Amazon RDS Service Event in the EU West Region",
   "url": "https://aws.amazon.com/message/2329B7",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Summary of the Amazon EC2, Amazon EBS, and Amazon RDS Service Event in the EU West Region",
   "rootCause": "電力会社の110kV、10メガワットの変圧器が故障して供給が途絶え、EU西部のアベイラビリティゾーンのかなりの部分が停電した。当初は落雷とされたが、電力会社は落雷ではないとして調査を続けている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 214,
   "title": "Redesigning Workers KV for increased availability and faster performance",
   "url": "https://blog.cloudflare.com/rearchitecting-workers-kv-for-redundancy",
   "provider": "Cloudflare",
   "date": "2025-06-12",
   "year": 2025,
   "datetimeBegin": "2025-06-12",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Redesigning Workers KV for increased availability and faster performance",
   "rootCause": "2025年6月12日、Workers KVを支えるストレージの一部である第三者クラウドが障害を起こし、KVの可用性が落ちてCloudflareの重要サービスが大きく停止した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 215,
   "title": "Summary of the Amazon DynamoDB Service Disruption and Related Impacts in the US-East Region",
   "url": "https://aws.amazon.com/message/5467D2",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Summary of the Amazon DynamoDB Service Disruption and Related Impacts in the US-East Region",
   "rootCause": "グローバルなGSIがストレージサーバのメンバーシップを肥大化させ、大きなメンバーシップへの同時要求で処理が制限時間を超えた。更新を終えられなかったサーバはリクエストを受けられなくなり、要求を再試行した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 216,
   "title": "Code Orange: Fail Small — our resilience plan following recent incidents",
   "url": "https://blog.cloudflare.com/fail-small-resilience-plan",
   "provider": "Cloudflare",
   "date": "2025-11-18",
   "year": 2025,
   "datetimeBegin": "2025-11-18",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Code Orange: Fail Small — our resilience plan following recent incidents",
   "rootCause": "2025年11月18日に約2時間10分、12月5日にはアプリケーションの28%について約25分、Cloudflareがトラフィックを届けられず、影響を小さく抑える耐障害性の計画を共有している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 217,
   "title": "Google Cloud Status Dashboard",
   "url": "https://status.cloud.google.com/incident/compute/17003",
   "provider": "Google Cloud",
   "date": "2017-01-30",
   "year": 2017,
   "datetimeBegin": "2017-01-30",
   "datetimeEnd": "2017-01-30",
   "tz": "UTC",
   "duration": "2時間",
   "durationMinutes": 120,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "GCEインスタンスとロードバランサ、VPNトンネルへの受信は共有のレイヤ2ロードバランサを通り、ほとんど使われない負荷分散設定への大量の更新が障害を引き起こした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 218,
   "title": "Summary of the Amazon S3 Service Disruption in the Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/41926",
   "provider": "AWS",
   "date": "2017-02-28",
   "year": 2017,
   "datetimeBegin": "2017-02-28",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Summary of the Amazon S3 Service Disruption in the Northern Virginia (US-EAST-1) Region",
   "rootCause": "北部バージニアのS3では、課金処理が想定より遅い問題の調査中に容量の大部分を外したため、各システムが完全な再起動を必要とした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 219,
   "title": "Catalyst Blog | Digital.ai",
   "url": "https://digital.ai/catalyst-blog/subversion-sha1-collision-problem-statement-prevention-and-remediation-options",
   "provider": "Digital",
   "date": "2026-06-15",
   "year": 2026,
   "datetimeBegin": "2026-06-15",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Catalyst Blog | Digital.ai",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 220,
   "title": "Kubernetes: Make your services faster by removing CPU limits",
   "url": "https://erickhun.com/posts/kubernetes-faster-services-no-cpu-limits/",
   "provider": "Erickhun",
   "date": "2020-09-02",
   "year": 2020,
   "datetimeBegin": "2020-09-02",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Kubernetes: Make your services faster by removing CPU limits",
   "rootCause": "LinuxカーネルのバグでCPU上限のあるコンテナが不要にスロットリングされ、kubeletなどの重要プロセスが応答しなくなることがある。過去にはサービスがリソースを使いすぎてノードがNotReadyになった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 221,
   "title": "GitHub availability report: February 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2026/",
   "provider": "GitHub",
   "date": "2026-02-02",
   "year": 2026,
   "datetimeBegin": "2026-02-02 17:41:00",
   "datetimeEnd": "2026-02-02 18:46:00",
   "tz": "UTC",
   "duration": "1時間5分",
   "durationMinutes": 65,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "failover-gap"
   ],
   "summary": "GitHub availability report: February 2026",
   "rootCause": "クラスタがフェイルオーバーして読み取り専用のデータベースにつながったため、2026年1月31日から2月2日までDependabotが自動プルリクエストの10%を作成できなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 222,
   "title": "March 20 ChatGPT outage: Here’s what happened",
   "url": "https://openai.com/index/march-20-chatgpt-outage/",
   "provider": "OpenAI",
   "date": "2023-03-20",
   "year": 2023,
   "datetimeBegin": "2023-03-20",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "March 20 ChatGPT outage: Here’s what happened",
   "rootCause": "オープンソースライブラリのバグで別の利用中ユーザーのチャットタイトルが見え、ChatGPTを止めた。特定の九時間にアクティブだったChatGPT Plus加入者の1.2%で支払い情報が見えた可能性があり、確認メールが誤った相手へ送られた。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 223,
   "title": "Summary of the Amazon Kinesis Event in the Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/11201",
   "provider": "AWS",
   "date": "2020-11-25",
   "year": 2020,
   "datetimeBegin": "2020-11-25",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the Amazon Kinesis Event in the Northern Virginia (US-EAST-1) Region",
   "rootCause": "北部バージニアのKinesisでは少量の容量追加が事象の引き金だったが根本原因ではなく、フロントエンド群の呼び出しでエラーが広がった。確認された原因はメモリ逼迫ではなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 224,
   "title": "skyliner.io",
   "url": "https://blog.skyliner.io/post-mortem-outages-on-1-19-17-and-1-23-17-3f65cc6f693e",
   "provider": "Skyliner",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "本文を取得できず、引き金を特定できない",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "skyliner.io",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 225,
   "title": "GitHub Availability Report: March 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2022/",
   "provider": "GitHub",
   "date": "2022-04-06",
   "year": 2022,
   "datetimeBegin": "2022-04-06",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: March 2022",
   "rootCause": "ピーク時にmysql1クラスタでリソースが競合し、多数のサービスと機能の性能が落ちた。クラスタがその負荷を処理できず、フェイルオーバーなどの緩和を行った。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 226,
   "title": "Cloudflare outage on June 21, 2022",
   "url": "https://blog.cloudflare.com/cloudflare-outage-on-june-21-2022",
   "provider": "Cloudflare",
   "date": "2022-06-21",
   "year": 2022,
   "datetimeBegin": "2022-06-21",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare outage on June 21, 2022",
   "rootCause": "忙しい拠点の耐障害性を高める変更で、プレフィックス広告ポリシーの条件の順序が入れ替わり重要なプレフィックスを撤回した。2022年6月21日6時27分UTCから19のデータセンターで通信が止まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 227,
   "title": "Billing Incident Post-Mortem: Breakdown, Analysis and Root Cause",
   "url": "https://twilio.com/en-us/blog/company/communications/billing-incident-post-mortem-breakdown-analysis-and-root-cause-html",
   "provider": "Twilio",
   "date": "2013-07-18",
   "year": 2013,
   "datetimeBegin": "2013-07-18 01:35:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Billing Incident Post-Mortem: Breakdown, Analysis and Root Cause",
   "rootCause": "自動チャージで入金が残高へ反映されず決済が繰り返され、全Redisスレーブが同時にマスターへ再接続して完全同期を要求し、Twilioの課金処理が障害になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 228,
   "title": "Agentic Misalignment in Summer 2026",
   "url": "https://alignment.anthropic.com/2026/agentic-misalignment-summer-2026/",
   "provider": "Anthropic",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Agentic Misalignment in Summer 2026",
   "rootCause": "2026年夏の報告は、統制された条件で探した自律エージェントのアライメント失敗四件を高リスクのシミュレーション上で説明したもので、実世界の障害ではないと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 229,
   "title": "A Post-Mortem on the Recent Developer Story Information Leak",
   "url": "https://meta.stackoverflow.com/questions/340960/a-post-mortem-on-the-recent-developer-story-information-leak",
   "provider": "Stack Overflow",
   "date": "2016-11-28",
   "year": 2016,
   "datetimeBegin": "2016-11-28",
   "datetimeEnd": "2016-11-28",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "A Post-Mortem on the Recent Developer Story Information Leak",
   "rootCause": "Developer Storyの非公開ベータ以来のバグが2016年10月11日の一般公開で露出し、11月28日より前に記入したごく一部のユーザーの情報が意図せず開示された。検索結果からの抑制を進め、メールアドレスや電話番号の開示への懸念は和らいだと述べている。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 230,
   "title": "GitHub Availability Report: December 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2021/",
   "provider": "GitHub",
   "date": "2022-01-05",
   "year": 2022,
   "datetimeBegin": "2022-01-05",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: December 2021",
   "rootCause": "2021年12月、GitHubの中核サービスではサービス停止になるインシデントはなかったと可用性レポートが述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 231,
   "title": "Making sure you're not a bot!",
   "url": "https://lkml.org/lkml/2009/1/2/373",
   "provider": "Lkml",
   "date": "2009-01-02",
   "year": 2009,
   "datetimeBegin": "2009-01-02",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Making sure you're not a bot!",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 232,
   "title": "GitHub Availability Report: June 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2025/",
   "provider": "GitHub",
   "date": "2025-06-05",
   "year": 2025,
   "datetimeBegin": "2025-06-05 17:47:00",
   "datetimeEnd": "2025-06-05 19:20:00",
   "tz": "UTC",
   "duration": "1時間33分",
   "durationMinutes": 93,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: June 2025",
   "rootCause": "内部のActionsサービス間の負荷急増が設定不備を露呈し、実行開始の重要経路で要求が絞られた。開始が平均14分遅れた実行が47.2%、失敗が21.0%で、Copilot Coding Agentの60%がキャンセルされ、ブランチビルドのPagesはすべてデプロイに失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 233,
   "title": "What came first- the CNAME or the A record",
   "url": "https://blog.cloudflare.com/cname-a-record-order-dns-standards",
   "provider": "Cloudflare",
   "date": "2025-12-02",
   "year": 2025,
   "datetimeBegin": "2025-12-02",
   "datetimeEnd": "2025-12-02",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "What came first- the CNAME or the A record",
   "rootCause": "2026年1月8日、1.1.1.1のメモリ使用量を減らす通常の更新でDNS応答内のレコード順が変わり、特定のクライアントの名前解決が失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 234,
   "title": "BrowserStack Security Incident Report — November 2014 (Resolved)",
   "url": "https://browserstack.com/attack-and-downtime-on-9-November",
   "provider": "BrowserStack",
   "date": "2014-11-09",
   "year": 2014,
   "datetimeBegin": "2014-11-09",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "BrowserStack Security Incident Report — November 2014 (Resolved)",
   "rootCause": "本番ウェブサーバへのShellshockの試みはパッチで失敗し、悪意あるソフトは復元処理で消え、SSHのrootログインは無効で、VNCはセッションごとにパスワードを作り直しておりnakulaは長年使っていないと説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 235,
   "title": "Okta’s Investigation of the January 2022 Compromise",
   "url": "https://www.okta.com/blog/company-and-culture/oktas-investigation-of-the-january-2022-compromise/",
   "provider": "Okta",
   "date": "2022-03-22",
   "year": 2022,
   "datetimeBegin": "2022-03-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Okta’s Investigation of the January 2022 Compromise",
   "rootCause": "2022年1月21日0時28分、不審な活動の原因を特定して是正できるまでOktaのサービスデスクが当該ユーザーのセッションを終了してアカウントを停止し、サポート技術者のアクセス範囲では情報と操作が限られていたと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 236,
   "title": "Summary of AWS Direct Connect Event in the Tokyo (AP-NORTHEAST-1) Region",
   "url": "https://aws.amazon.com/message/17908",
   "provider": "AWS",
   "date": "2021-09-02",
   "year": 2021,
   "datetimeBegin": "2021-09-02",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Summary of AWS Direct Connect Event in the Tokyo (AP-NORTHEAST-1) Region",
   "rootCause": "東京リージョン向けDirect Connectの経路上のネットワーク機器の一部が故障し、パケットロスと断続的な接続問題が起きた。機器OSの潜在的な問題で、フェイルオーバーを速くする新しいプロトコルが有効だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 237,
   "title": "Incident Summary: 2017–03–16",
   "url": "https://medium.com/square-corner-blog/incident-summary-2017-03-16-2f65be39297",
   "provider": "Medium",
   "date": "2017-03-17",
   "year": 2017,
   "datetimeBegin": "2017-03-17",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "resource-exhaustion"
   ],
   "summary": "Incident Summary: 2017–03–16",
   "rootCause": "隣接サービスのバグで加盟店認証サービスが回復できない過負荷になり、太平洋時間10時2分から11時55分まで全加盟店向けサービスが止まり、二要素認証は13時12分まで使えなかった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 238,
   "title": "PagerDuty Status Page",
   "url": "https://status.pagerduty.com/incidents/70m30bh7qfmx",
   "provider": "PagerDuty",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "本文を取得できず、引き金を特定できない",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "PagerDuty Status Page",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 239,
   "title": "GitHub Availability Report: January 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2022/",
   "provider": "GitHub",
   "date": "2022-02-02",
   "year": 2022,
   "datetimeBegin": "2022-02-02 19:12:00",
   "datetimeEnd": "2022-02-02 19:38:00",
   "tz": "UTC",
   "duration": "26分",
   "durationMinutes": 26,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: January 2022",
   "rootCause": "インシデントから日が浅く寄与した要因は調査中で、詳しい更新は翌月の可用性レポートで出すと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 240,
   "title": "kubernetes-on-aws/docs/postmortems/jan-2019-dns-outage.md at dev · zalando-incubator/kubernetes-on-aws",
   "url": "https://github.com/zalando-incubator/kubernetes-on-aws/blob/dev/docs/postmortems/jan-2019-dns-outage.md",
   "provider": "GitHub",
   "date": "2019-01-07",
   "year": 2019,
   "datetimeBegin": "2019-01-07",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion",
    "network-fault"
   ],
   "summary": "kubernetes-on-aws/docs/postmortems/jan-2019-dns-outage.md at dev · zalando-incubator/kubernetes-on-aws",
   "rootCause": "データ集約レイヤのエラーはKubernetesクラスタのDNS基盤が止まったことが原因で、クラスタ全体の名前解決が失われた。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 241,
   "title": "Summary of June 8 outage | Fastly",
   "url": "https://fastly.com/blog/summary-of-june-8-outage",
   "provider": "Fastly",
   "date": "2021-06-08",
   "year": 2021,
   "datetimeBegin": "2021-06-08T09:47:00Z",
   "datetimeEnd": "2021-06-08T10:36:00Z（95%復旧）／11:00（大半が復旧）／12:35（緩和）",
   "tz": "UTC",
   "duration": "49分（95%復旧）／2時間48分（緩和）",
   "durationMinutes": 168,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Summary of June 8 outage | Fastly",
   "rootCause": "未発見のソフトウェアのバグが、正当な顧客設定の変更をきっかけに2021年6月8日09:47 UTCに表面化し、ネットワークの85%がエラーを返した。09:48に検知して設定を無効化し、49分後の10:36には95%が通常運用へ戻った。11:00には大半が復旧し、12:35 UTCにインシデントを緩和した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 242,
   "title": "SaleMove US System Issue",
   "url": "https://status.glia.com/incidents/xf6cr710yrzn",
   "provider": "Glia",
   "date": "2017-02-22",
   "year": 2017,
   "datetimeBegin": "2017-02-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "SaleMove US System Issue",
   "rootCause": "Kubernetesクラスタのマスター群へ振り分けるAWSのELBでDNSのAレコードのIP変更と障害が相関し、ログに他の要因はなくELBを迂回したが、原因とは断定していない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 243,
   "title": "Today's Outage Post Mortem",
   "url": "https://blog.cloudflare.com/todays-outage-post-mortem",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Today's Outage Post Mortem",
   "rootCause": "Cloudflareのネットワークの広い範囲で障害があり、長さは地域で違い最長約15分で、あるデータセンター向けの通信は意図どおり最寄りのシンガポールか東京へ流れた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 244,
   "title": "The Day the Replication Died",
   "url": "https://kickstarter.engineering/the-day-the-replication-died-e543ba45f262",
   "provider": "Kickstarter",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "The Day the Replication Died",
   "rootCause": "安全でないクエリが行ベースレプリケーションを引き起こしてレプリケーションが壊れた。MySQLがORDER BY句を無視することがあるバグが、残っていた要因だった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 245,
   "title": "GitHub Availability Report: February 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2021/",
   "provider": "GitHub",
   "date": "2021-03-01",
   "year": 2021,
   "datetimeBegin": "2021-03-01 09:59:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: February 2021",
   "rootCause": "3月1日のインシデントでGitHub Actionsの可用性が大きく劣化し、キュー済みジョブの一部が失敗または遅延したが、寄与要因は調査中だと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 246,
   "title": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "url": "https://aws.amazon.com/message/65648",
   "provider": "AWS",
   "date": "2011-04-29",
   "year": 2011,
   "datetimeBegin": "2011-04-29",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "rootCause": "影響を受けたEBSボリュームへの読み書きでインスタンスが固まり、劣化したEBSクラスタが米国東部全域のEBS APIで高いエラー率と遅延を生んだ。複数の根本原因が互いに作用した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 247,
   "title": "Summary of the Amazon Kinesis Data Streams Service Event in Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/073024",
   "provider": "AWS",
   "date": "2024-07-30",
   "year": 2024,
   "datetimeBegin": "2024-07-30",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Summary of the Amazon Kinesis Data Streams Service Event in Northern Virginia (US-EAST-1) Region",
   "rootCause": "US-EAST-1でAWS内部専用のKinesis Data Streamsセルが損なわれ、その新しい負荷特性をセル管理システムが扱ったことが原因で、依存するサービスが劣化した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 248,
   "title": "Moved ~/.local/share/steam. Ran steam. It deleted everything on system owned by user. · Issue #3671 · ValveSoftware/steam-for-linux",
   "url": "https://github.com/valvesoftware/steam-for-linux/issues/3671",
   "provider": "GitHub",
   "date": "2015-01-14",
   "year": 2015,
   "datetimeBegin": "2015-01-14",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Moved ~/.local/share/steam. Ran steam. It deleted everything on system owned by user. · Issue #3671 · ValveSoftware/steam-for-linux",
   "rootCause": "~/.local/share/steamを移してSteamを起動したら、そのユーザーが所有するファイルがすべて消え、何が起きたかも何が引き金かも分かっていないと報告している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 249,
   "title": "Heroku Status",
   "url": "https://status.heroku.com/incidents/642",
   "provider": "Heroku",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 250,
   "title": "Supermarket Intermittent Unresponsiveness Postmortem - Chef Blog | Chef",
   "url": "https://chef.io/blog/supermarket-intermittent-unresponsiveness-postmortem",
   "provider": "Chef",
   "date": "2014-07-10",
   "year": 2014,
   "datetimeBegin": "2014-07-10",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Supermarket Intermittent Unresponsiveness Postmortem - Chef Blog | Chef",
   "rootCause": "ChefのSupermarketが断続的に応答せず、Berkshelfの依存解決やクックブックの閲覧と送受信、APIが使えなくなり、根本原因を含む事後報告は非公開リポジトリにあると述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 251,
   "title": "Post Mortem: The Ugly, the Bad & the Good",
   "url": "https://blog.cloudflare.com/post-mortem-the-ugly-the-bad-the-good",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "config-error"
   ],
   "summary": "Post Mortem: The Ugly, the Bad & the Good",
   "rootCause": "新しいDNS基盤の大規模更新は再構築に数分かかり、キャッシュを消しにくい事業者のせいで障害が延び、稼働拠点が二つ少ないことで500エラーが少数出た。原因は調査中で、多数のレコードの初回更新でシステムが詰まったと推測している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 252,
   "title": "Partial Cloudflare outage on October 25, 2022",
   "url": "https://blog.cloudflare.com/partial-cloudflare-outage-on-october-25-2022",
   "provider": "Cloudflare",
   "date": "2022-10-25",
   "year": 2022,
   "datetimeBegin": "2022-10-25",
   "datetimeEnd": "2022-10-25",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Partial Cloudflare outage on October 25, 2022",
   "rootCause": "Tiered Cacheの変更で、拠点をまたぐキャッシュ可能リクエストの扱いの副作用が起き、ピーク時に全リクエストの約5%がステータス530で失敗した。試験の盲点で事前に見つけられなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 253,
   "title": "Cloudflare outage on July 17, 2020",
   "url": "https://blog.cloudflare.com/cloudflare-outage-on-july-17-2020",
   "provider": "Cloudflare",
   "date": "2020-07-17",
   "year": 2020,
   "datetimeBegin": "2020-07-17",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "27分",
   "durationMinutes": 27,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare outage on July 17, 2020",
   "rootCause": "ニューアークからシカゴとは別の輻輳を和らげるためアトランタのルータ設定を更新したところ、設定の誤りでバックボーンの全通信がアトランタへ送られ、一部地域で27分間障害になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 254,
   "title": "GitHub availability report: March 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2026/",
   "provider": "GitHub",
   "date": "2026-03-03",
   "year": 2026,
   "datetimeBegin": "2026-03-03 18:59:00",
   "datetimeEnd": "2026-03-03 20:09:00",
   "tz": "UTC",
   "duration": "1時間10分",
   "durationMinutes": 70,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub availability report: March 2026",
   "rootCause": "ユーザー設定キャッシュへの大量書き込みを減らす変更の配備中、バグで全ユーザーのキャッシュが期限切れになり再計算されて書き戻された。ピーク時にgithub.comの失敗が約40%、APIは約43%だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 255,
   "title": "GitHub Availability Report: June 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2021/",
   "provider": "GitHub",
   "date": "2021-07-07",
   "year": 2021,
   "datetimeBegin": "2021-07-07",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: June 2021",
   "rootCause": "2021年6月、GitHubの中核サービスではサービス停止になるインシデントはなかったと可用性レポートが述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 256,
   "title": "GitHub Availability Report: December 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2025/",
   "provider": "GitHub",
   "date": "2025-12-08",
   "year": 2025,
   "datetimeBegin": "2025-12-08 19:51:00",
   "datetimeEnd": "2025-12-08 21:06:00",
   "tz": "UTC",
   "duration": "1時間15分",
   "durationMinutes": 75,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: December 2025",
   "rootCause": "11月25日の変更の設定不備で、エージェントのセッション情報をAI Controlsへ送るKafkaトピックへデータが出なくなった。12月15日はモデル依存先の応答遅延でレビュー要求の46.97%が失敗し、12月18日は一部のActionsランナーがGitHub APIで断続的にタイムアウトした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 257,
   "title": "GitHub availability report: January 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2026/",
   "provider": "GitHub",
   "date": "2026-01-13",
   "year": 2026,
   "datetimeBegin": "2026-01-13 09:38:00",
   "datetimeEnd": "2026-01-13 10:24:00",
   "tz": "UTC",
   "duration": "46分",
   "durationMinutes": 46,
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub availability report: January 2026",
   "rootCause": "モデル更新で入った設定誤りによりGitHub Copilotが停止し、エラー率は平均18%で最大100%になった。変更を戻したあと、上流のOpenAIでGPT-4.1の可用性が落ち、復旧が延びた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 258,
   "title": "Route leak incident on January 22, 2026",
   "url": "https://blog.cloudflare.com/route-leak-incident-january-22-2026",
   "provider": "Cloudflare",
   "date": "2026-01-22",
   "year": 2026,
   "datetimeBegin": "2026-01-22",
   "datetimeEnd": "2026-01-22",
   "tz": "UTC",
   "duration": "25分",
   "durationMinutes": 25,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "network-fault"
   ],
   "summary": "Route leak incident on January 22, 2026",
   "rootCause": "自動ルーティングポリシーの設定誤りでマイアミのルータからBGPプレフィックスが意図せず漏れた。ピアから受け取った経路を一部のピアとプロバイダへ再配布し、影響はIPv6に限られた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 259,
   "title": "Google Cloud Status Dashboard",
   "url": "https://status.cloud.google.com/incident/storage/19002",
   "provider": "Google Cloud",
   "date": "2019-03-12",
   "year": 2019,
   "datetimeBegin": "2019-03-12",
   "datetimeEnd": "2019-03-12",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "2019年3月11日、内部blobサービスのメタデータ用ストレージが増えて負荷上昇が連鎖障害になり、高負荷でタスクが起動時に落ちたためトラフィックを手動で下げた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 260,
   "title": "Salesforce's database outage: Why it happened and how to prevent another one",
   "url": "https://www.datacenterdynamics.com/en/opinions/salesforce-database-outage-why-it-happened-and-how-prevent-another-one/",
   "provider": "Datacenterdynamics",
   "date": "2019-06-24",
   "year": 2019,
   "datetimeBegin": "2019-06-24",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Salesforce's database outage: Why it happened and how to prevent another one",
   "rootCause": "ページは、SalesforceのPardot障害は顧客が使うデータベースのスクリプト変更が原因で、その変更が顧客に与える影響を自動テストしていなかったと述べている。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 261,
   "title": "Connection errors in Asia Pacific region on July 9, 2023",
   "url": "https://blog.cloudflare.com/connection-errors-in-asia-pacific-region-on-july-9-2023",
   "provider": "Cloudflare",
   "date": "2023-07-08",
   "year": 2023,
   "datetimeBegin": "2023-07-08",
   "datetimeEnd": "2023-07-08",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Connection errors in Asia Pacific region on July 9, 2023",
   "rootCause": "Verisignの.comと.netのTLDネームサーバが不正なDNSSEC署名を返したため、2023年7月9日にアジア太平洋のDNSクエリの最大7%が解決に失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 262,
   "title": "An update on recent service disruptions",
   "url": "https://github.blog/news-insights/company-news/an-update-on-recent-service-disruptions",
   "provider": "GitHub",
   "date": "2022-03-16",
   "year": 2022,
   "datetimeBegin": "2022-03-16 14:09:00",
   "datetimeEnd": "2022-03-16 19:45:00",
   "tz": "UTC",
   "duration": "5時間36分",
   "durationMinutes": 336,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "An update on recent service disruptions",
   "rootCause": "ピーク時のmysql1クラスタのリソース競合で、git操作やWebhook、プルリクエスト、API、Issue、Packages、Codespaces、Actions、Pagesを含むすべての書き込みが不能になった。正常なレプリカへ切り替えて復旧した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 263,
   "title": "Rule attribute selector causing flag targeting web interface to crash",
   "url": "https://status.launchdarkly.com/incidents/yltrp45vtxm2",
   "provider": "LaunchDarkly",
   "date": "2021-09-30",
   "year": 2021,
   "datetimeBegin": "2021-09-30",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Rule attribute selector causing flag targeting web interface to crash",
   "rootCause": "9月30日に入ったフロントエンドのバグで、ルール属性セレクタを使うとエラーページになった。SDKで非公開属性を宣言した環境だけで起き、テストがその場合を含んでいなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 264,
   "title": "GitHub Availability Report: February 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2025/",
   "provider": "GitHub",
   "date": "2025-02-25",
   "year": 2025,
   "datetimeBegin": "2025-02-25 14:25:00",
   "datetimeEnd": "2025-02-25 16:44:00",
   "tz": "UTC",
   "duration": "2時間19分",
   "durationMinutes": 139,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: February 2025",
   "rootCause": "ピーク時にワーカープールが容量ぎりぎりでキュー処理が遅れた。2月3日はシステムコンポーネントの配備でDockerイメージが欠け、移行を試みた全ユーザーが失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 265,
   "title": "Cloudflare incident on June 20, 2024",
   "url": "https://blog.cloudflare.com/cloudflare-incident-on-june-20-2024",
   "provider": "Cloudflare",
   "date": "2024-06-20",
   "year": 2024,
   "datetimeBegin": "2024-06-20",
   "datetimeEnd": "2024-06-20",
   "tz": "UTC",
   "duration": "1時間54分",
   "durationMinutes": 114,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "resource-exhaustion"
   ],
   "summary": "Cloudflare incident on June 20, 2024",
   "rootCause": "自動監視が性能劣化を検知して経路を不適切に切り替えバックボーンが混雑し、新しいDDoS緩和が特定の不審な通信でレート制限の潜在バグを露呈した。この二つの独立した事象で、遅延とエラー率が114分間高まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 266,
   "title": "A Byzantine failure in the real world",
   "url": "https://blog.cloudflare.com/a-byzantine-failure-in-the-real-world",
   "provider": "Cloudflare",
   "date": "2020-11-02",
   "year": 2020,
   "datetimeBegin": "2020-11-02",
   "datetimeEnd": "2020-11-02",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "A Byzantine failure in the real world",
   "rootCause": "2020年11月2日のCloudflare APIの可用性低下では、ビザンチン障害と呼ばれる難しい故障モードが、連鎖する一連の事象に関わった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 267,
   "title": "Post Mortem: Kubernetes Node OOM",
   "url": "https://bluematador.com/blog/post-mortem-kubernetes-node-oom",
   "provider": "Bluematador",
   "date": "2019-07-09",
   "year": 2019,
   "datetimeBegin": "2019-07-09",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Post Mortem: Kubernetes Node OOM",
   "rootCause": "2019年6月15日、本番のKubernetesノードでSystemOOMが検知され、同じノードのルートボリュームでEBSのバーストバランスが低いという警告が続いたと書いている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 268,
   "title": "Heroku Status",
   "url": "https://status.heroku.com/incidents/1042",
   "provider": "Heroku",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 269,
   "title": "Northeast blackout of 2003 - Wikipedia",
   "url": "https://en.wikipedia.org/wiki/Northeast_blackout_of_2003",
   "provider": "En",
   "date": "2003-08-14",
   "year": 2003,
   "datetimeBegin": "2003-08-14",
   "datetimeEnd": "2003-08-14",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Northeast blackout of 2003 - Wikipedia",
   "rootCause": "2003年8月14日、FirstEnergyの制御室で警報システムが故障し、送電と発電の能力が連鎖的に失われた。米国北東部・中西部の一部とオンタリオの大部分が停電し、約5500万人が影響を受けた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 270,
   "title": "テスラ障害：サーバートラブルが自動車とパワーウォールのサービスに影響 | Data Center Café",
   "url": "https://cafe-dc.com/security/tesla-outage-server-issues-impact-car-and-powerwall-services/",
   "provider": "Tesla",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "テスラ障害：サーバートラブルが自動車とパワーウォールのサービスに影響 | Data Center Café",
   "rootCause": "テスラの自動車とPowerwall、モバイルアプリ、外部サービスが停止し、ユーザーは事前告知のない503サーバーメンテナンスと報告したが、公式の原因説明はない。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 271,
   "title": "Behind the Scenes of a long EVE Online downtime | EVE Online",
   "url": "https://eveonline.com/news/view/behind-the-scenes-of-a-long-eve-online-downtime",
   "provider": "EVE Online",
   "date": "2015-08-07",
   "year": 2015,
   "datetimeBegin": "2015-08-07",
   "datetimeEnd": "2015-08-07",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Behind the Scenes of a long EVE Online downtime | EVE Online",
   "rootCause": "7月15日、プレイヤーは699分間EVE Onlineへ接続できず、テストサーバではコードが動きデータに異常もなかったため、環境が原因だと疑っていた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 272,
   "title": "GitHub Availability Report: December 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2024/",
   "provider": "GitHub",
   "date": "2024-12-17",
   "year": 2024,
   "datetimeBegin": "2024-12-17 14:17:00",
   "datetimeEnd": "2024-12-17 14:34:00",
   "tz": "UTC",
   "duration": "17分",
   "durationMinutes": 17,
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: December 2024",
   "rootCause": "計画メンテナンスがライブ更新サービスを意図せず止め、ウェブサーバが過負荷になってエラーが増え、ログインやリポジトリ閲覧、プルリクエスト、Issueへのコメントができなくなった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 273,
   "title": "Service disruption on October 20, 2025 | Blog | incident.io",
   "url": "https://incident.io/blog/service-disruption-october-20th-2025",
   "provider": "Incident.io",
   "date": "2025-10-20",
   "year": 2025,
   "datetimeBegin": "2025-10-20",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Service disruption on October 20, 2025 | Blog | incident.io",
   "rootCause": "2025年10月20日7時11分から10時53分UTC、AWSのus-east-1の大規模障害でincident.ioのオンコール通知、SAML認証、Scribeが影響を受けた。製品の大半はGoogle Cloudの複数リージョンにあり無事だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 274,
   "title": "Post-mortem of technical issue – August 29, 2019",
   "url": "https://zerodha.com/marketintel/bulletin/229363/post-mortem-of-technical-issue-august-29-2019",
   "provider": "Zerodha",
   "date": "2019-08-29",
   "year": 2019,
   "datetimeBegin": "2019-08-29",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Post-mortem of technical issue – August 29, 2019",
   "rootCause": "2019年8月29日の根本原因は、自社もOMSベンダーのThomson Reuters（現Refinitiv）も経験のない異常な事象で、OMSが過負荷になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 275,
   "title": "Apache Killer Terminated: Zero Day Exploit, Zero Day Fix",
   "url": "https://blog.cloudflare.com/apache-killer-killed-zero-day-exploit-zero-da",
   "provider": "Cloudflare",
   "date": "2011-08-25",
   "year": 2011,
   "datetimeBegin": "2011-08-25",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Apache Killer Terminated: Zero Day Exploit, Zero Day Fix",
   "rootCause": "Apache Killerというゼロデイは、形式の壊れたApacheのbyte-rangeヘッダを送ってウェブサーバをクラッシュさせる。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 276,
   "title": "February service disruptions post-incident analysis",
   "url": "https://github.blog/news-insights/company-news/february-service-disruptions-post-incident-analysis/",
   "provider": "GitHub",
   "date": "2020-03-26",
   "year": 2020,
   "datetimeBegin": "2020-03-26",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "February service disruptions post-incident analysis",
   "rootCause": "2020年2月20日、計画したマスターデータベースの昇格で想定外の高負荷がかかり、同様のProxySQL障害が47分続いた。対処後も接続数が危険な閾値を超え、再び劣化した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 277,
   "title": "Google Cloud Status Dashboard",
   "url": "https://status.cloud.google.com/incident/cloud-networking/19009",
   "provider": "Google Cloud",
   "date": "2019-06-02",
   "year": 2019,
   "datetimeBegin": "2019-06-02",
   "datetimeEnd": "2019-06-02",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "Googleの大規模障害では複数の故障が重なって影響が増幅し、単一拠点のクラスタ管理とネットワーク制御プレーンは個別の故障では容量が落ちない構成だと説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 278,
   "title": "High queue times on OSX builds (.com and .org)",
   "url": "https://traviscistatus.com/incidents/khzk8bg4p9sy",
   "provider": "Travis CI",
   "date": "2015-07-31",
   "year": 2015,
   "datetimeBegin": "2015-07-31",
   "datetimeEnd": "2015-07-31",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "High queue times on OSX builds (.com and .org)",
   "rootCause": "vSphereクラスタがリソース予約を満たせずOS XのビルドVMが電源投入に失敗し、ビルド環境が不安定になった。ソフトの欠陥で指標が正常範囲のまま報告され、警報が出なかった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 279,
   "title": "failing like never before",
   "url": "https://42gems.com/blog",
   "provider": "42Gems",
   "date": "2016-02-01",
   "year": 2016,
   "datetimeBegin": "2016-02-01",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "failing like never before",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 280,
   "title": "Jobs not starting",
   "url": "https://status.circleci.com/incidents/dcqb3fykhgvg",
   "provider": "CircleCI",
   "date": "2023-03-14",
   "year": 2023,
   "datetimeBegin": "2023-03-14",
   "datetimeEnd": "2023-03-14",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Jobs not starting",
   "rootCause": "進行中のKubernetesアップグレードでkubeletとkube-proxyの版が一致せず、本番クラスタでネットワーク障害が広がった。復旧ではRabbitMQのキューとノードの誤りで、全顧客パイプラインが遅れ、GitHubチェックは最大30分遅れた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 281,
   "title": "PIPEFAIL: How a missing shell option slowed Cloudflare down",
   "url": "https://blog.cloudflare.com/pipefail-how-a-missing-shell-option-slowed-cloudflare-down",
   "provider": "Cloudflare",
   "date": "2021-12-16",
   "year": 2021,
   "datetimeBegin": "2021-12-16",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "PIPEFAIL: How a missing shell option slowed Cloudflare down",
   "rootCause": "シェルのオプションpipefailが欠けていたことが原因で、Cloudflareの処理が遅くなったと説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 282,
   "title": "GitHub Availability Report: February 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2024/",
   "provider": "GitHub",
   "date": "2024-02-26",
   "year": 2024,
   "datetimeBegin": "2024-02-26 18:34:00",
   "datetimeEnd": "2024-02-26 19:27:00",
   "tz": "UTC",
   "duration": "53分",
   "durationMinutes": 53,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: February 2024",
   "rootCause": "2月26日はジョブキューの容量制約と自動フェイルオーバーの失敗でバックグラウンドジョブが遅れ、二次クラスタへ手動で切り替えた。2月29日もWebhooks、GitHub Actions、Issuesの処理が遅れた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 283,
   "title": "GitLab .com Downtime 2014-07-08 Postmortem",
   "url": "https://docs.google.com/document/d/1ScqXAdb6BjhsDzCo3qdPYbt1uULzgZqPO8zHeHHarS0/preview",
   "provider": "GitLab",
   "date": "2014-07-08",
   "year": 2014,
   "datetimeBegin": "2014-07-08",
   "datetimeEnd": "2014-07-08",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitLab .com Downtime 2014-07-08 Postmortem",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 284,
   "title": "GitHub Availability Report: March 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2023/",
   "provider": "GitHub",
   "date": "2023-02-28",
   "year": 2023,
   "datetimeBegin": "2023-02-28 15:42:00",
   "datetimeEnd": "2023-02-28 17:08:00",
   "tz": "UTC",
   "duration": "1時間26分",
   "durationMinutes": 86,
   "triggers": [
    "Hardware fault",
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "GitHub Availability Report: March 2023",
   "rootCause": "米国東部のCodespacesは、クラウド事業者のVM割り当てが遅く作成と開始に失敗した。データベースを載せたVMノードのディスク異常でOSの性能が落ち、そのノードの全MySQLで接続とクエリが遅くなり失敗率が高まった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 285,
   "title": "Post-Incident Review on the Atlassian April 2022 outage - Inside Atlassian",
   "url": "https://atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage",
   "provider": "Atlassian",
   "date": "2022-04-29",
   "year": 2022,
   "datetimeBegin": "2022-04-29",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Post-Incident Review on the Atlassian April 2022 outage - Inside Atlassian",
   "rootCause": "2022年4月のAtlassianの障害は一部の顧客で最大14日続き、4月8日から18日にかけて全顧客サイトを順次復旧し、導入済みのスタンドアロンのレガシーアプリを削除する必要があった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 286,
   "title": "The CircleCI Blog - CircleCI",
   "url": "http://circleci.com/blog/mongohq-security-incident-response",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "The CircleCI Blog - CircleCI",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 287,
   "title": "High Filtering On SMS Towards AT&T Network In United States",
   "url": "https://status.twilio.com/incidents/wdrlk4qps0z1",
   "provider": "Twilio",
   "date": "2021-10-27",
   "year": 2021,
   "datetimeBegin": "2021-10-27",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "High Filtering On SMS Towards AT&T Network In United States",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 288,
   "title": "Kubernetes' dirty endpoint secret and Ingress · Phil Pearl's Blog",
   "url": "https://philpearl.github.io/post/k8s_ingress",
   "provider": "GitHub",
   "date": "2019-07-26",
   "year": 2019,
   "datetimeBegin": "2019-07-26",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Kubernetes' dirty endpoint secret and Ingress · Phil Pearl's Blog",
   "rootCause": "Ravelinは外部向けAPIのIngressをGKE上のKubernetesに作り、最初は動いたが、その後異常に気づき始めたところまでを述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 289,
   "title": "npm Blog Archive: 2014-01-28 Outage Postmortem",
   "url": "https://blog.npmjs.org/post/74949623024/2014-01-28-outage-postmortem.html",
   "provider": "npm",
   "date": "2014-01-28",
   "year": 2014,
   "datetimeBegin": "2014-01-28",
   "datetimeEnd": "2014-01-28",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "npm Blog Archive: 2014-01-28 Outage Postmortem",
   "rootCause": "FastlyのVarnish設定を単純にする変更でバグが入り、CouchDBへ向けるべき要求も含めすべてがMantaへ送られた。エラーコードをキャッシュしないため403が増え、殺到が収まるまで時間がかかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 290,
   "title": "Kubernetes Networking Problems Due to the Conntrack",
   "url": "https://deploy.live/blog/kubernetes-networking-problems-due-to-the-conntrack",
   "provider": "Deploy",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Kubernetes Networking Problems Due to the Conntrack",
   "rootCause": "Kubernetesノードはconntrack_maxをメモリサイズに比例して決め、conntrackが原因のネットワーク問題でHAProxyの接続リセットが増え、応答しないHTTP例外が出た。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 291,
   "title": "An Outage Post-Mortem for August 22nd – what went wrong?",
   "url": "https://buildkite.com/resources/blog/outage-post-mortem-for-august-22nd",
   "provider": "Buildkite",
   "date": "2016-08-22",
   "year": 2016,
   "datetimeBegin": "2016-08-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "An Outage Post-Mortem for August 22nd – what went wrong?",
   "rootCause": "2016年8月22日17時21分UTCにBuildkiteが計画外の重度な障害になり、PagerDutyの設定不備と電話の消音で当番へ電話が届かず、新しいデータベースと集中pgbouncerは負荷試験していなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 292,
   "title": "GitHub Availability Report: December 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2020/",
   "provider": "GitHub",
   "date": "2020-11-27",
   "year": 2020,
   "datetimeBegin": "2020-11-27 16:04:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: December 2020",
   "rootCause": "GitHub Appのトークン要求が大量に発生する境界条件で、MySQLクラスタのレプリケーション遅延が異常になった。レプリカの情報が古く、Actions向けトークン要求の一部が失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 293,
   "title": "Incident Resolution: Do You Remember, the Twenty Fires of September?",
   "url": "https://honeycomb.io/blog/incident-resolution-september-retrospective",
   "provider": "Honeycomb",
   "date": "2026-10-07",
   "year": 2026,
   "datetimeBegin": "2026-10-07",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Incident Resolution: Do You Remember, the Twenty Fires of September?",
   "rootCause": "使用中のLinuxのバグで、列ストア兼クエリエンジンであるretrieverのEXT4が破損してクラッシュし、取り込み遅延と本番Kafkaのメトリクス報告の停止が起きた。beagleの処理遅延の一部は、rebalancerの失敗に気づかなかったためでもある。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 294,
   "title": "Postmortem: Removing all users from github.com/trivago · trivago tech blog",
   "url": "https://tech.trivago.com/post/2021-10-05-postmortem-removing-all-users-from-github-trivago",
   "provider": "Tech",
   "date": "2021-09-07",
   "year": 2021,
   "datetimeBegin": "2021-09-07",
   "datetimeEnd": "2021-09-07",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Postmortem: Removing all users from github.com/trivago · trivago tech blog",
   "rootCause": "trivagoのGitHub組織から全ユーザーを外した事後報告で、Azure Active Directoryのセキュリティグループと組織の管理者アクセス、全ユーザーを戻す章が並んでいる。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 295,
   "title": "Post Incident Report: April 4, 2025 - Delays in starting workflows",
   "url": "https://discuss.circleci.com/t/post-incident-report-april-4-2025-delays-in-starting-workflows/53113",
   "provider": "CircleCI",
   "date": "2025-04-04",
   "year": 2025,
   "datetimeBegin": "2025-04-04",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Post Incident Report: April 4, 2025 - Delays in starting workflows",
   "rootCause": "2025年4月4日のCircleCI Discussの告知は、ワークフローの開始が遅れた件の事後報告として掲題されている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 296,
   "title": "GitHub Availability Report: June 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2024/",
   "provider": "GitHub",
   "date": "2024-06-05",
   "year": 2024,
   "datetimeBegin": "2024-06-05 17:05:00",
   "datetimeEnd": "2024-06-05 19:27:00",
   "tz": "UTC",
   "duration": "2時間22分",
   "durationMinutes": 142,
   "triggers": [
    "Maintainance",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: June 2024",
   "rootCause": "定期のシークレットローテーションで期限切れの秘密情報を使い、実装のバグが設定不備になってイベント用データが読めず劣化した。6月27日は、進行中のGitHub移行がすべて失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 297,
   "title": "Cloudflare Registrar",
   "url": "https://prometheuskube.com/why-we-switched-from-fluent-bit-to-fluentd-in-2-hours",
   "provider": "Prometheuskube",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "本文を取得できず、引き金を特定できない",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Cloudflare Registrar",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 298,
   "title": "Summary of the Amazon SimpleDB Service Disruption",
   "url": "https://aws.amazon.com/message/65649",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Summary of the Amazon SimpleDB Service Disruption",
   "rootCause": "サーバの壊れ方により、落ちたストレージノードの登録解除が急増してロックサービスへの負荷が跳ねた。同じハンドシェイクのタイムアウトでメタデータノードも落ちて認証できず、タイムアウトを重ねたノードが直ちに離脱してSimpleDBのAPIエラーが拡大した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 299,
   "title": "failing like never before",
   "url": "http://42gems.com/blog",
   "provider": "42Gems",
   "date": "2016-02-01",
   "year": 2016,
   "datetimeBegin": "2016-02-01",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "failing like never before",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 300,
   "title": "GitHub Availability Report: January 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2023/",
   "provider": "GitHub",
   "date": "2023-01-30",
   "year": 2023,
   "datetimeBegin": "2023-01-30 21:48:00",
   "datetimeEnd": "2023-01-30 22:23:00",
   "tz": "UTC",
   "duration": "35分",
   "durationMinutes": 35,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: January 2023",
   "rootCause": "バックエンドの変更により、コンテナレジストリへのリクエストの大半が失敗し、一部のGitHub Pagesのビルドにも影響した。変更を戻して緩和した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 301,
   "title": "Incident Review: Shepherd Cache Delays",
   "url": "https://honeycomb.io/blog/incident-review-shepherd-cache-delays",
   "provider": "Honeycomb",
   "date": "2022-09-08",
   "year": 2022,
   "datetimeBegin": "2022-09-08",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Incident Review: Shepherd Cache Delays",
   "rootCause": "9月8日、取り込みシステムが繰り返し停止し、8時間を超えて中断した。ShepherdのトレースをサンプリングするRefineryの連鎖クラッシュを伴う、持続的な障害ループだった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 302,
   "title": "Search and Reporting Outage",
   "url": "https://status.universe.com/incidents/115n3vxqwzcf",
   "provider": "Universe",
   "date": "2017-07-21",
   "year": 2017,
   "datetimeBegin": "2017-07-21",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Search and Reporting Outage",
   "rootCause": "Discoverの検索に影響するバグがあった。ジョブがノード上の資源をすべて消費し、ノードは異常になって停止された。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 303,
   "title": "Summary of the October 22, 2012 AWS Service Event in the US-East Region",
   "url": "https://aws.amazon.com/message/680342",
   "provider": "AWS",
   "date": "2012-10-22",
   "year": 2012,
   "datetimeBegin": "2012-10-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the October 22, 2012 AWS Service Event in the US-East Region",
   "rootCause": "EBSストレージサーバ上のデータ収集エージェントに潜在バグがあった。収集サーバ交換時のDNS更新が一部の内部DNSへ届かず、ストレージサーバが故障サーバへ接続し続けた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 304,
   "title": "メンテナンス・障害情報・機能追加｜さくらインターネット公式サポートサイト",
   "url": "https://support.sakura.ad.jp/mainte/mainteentry.php?id=24776&_ga=2.167940706.257968328.1536112466-688370593.1528265786&_bdld=1Ruz1i.mhEV4-Y&_gl=1*xmm8rx*_gcl_au*MzYzMjAwODkxLjE3Nzg4OTI4NzM",
   "provider": "Sakura",
   "date": "2018-09-06",
   "year": 2018,
   "datetimeBegin": "2018-09-06",
   "datetimeEnd": "2018-09-06",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "メンテナンス・障害情報・機能追加｜さくらインターネット公式サポートサイト",
   "rootCause": "地震のあと、非常用発電機を起動・停止する制御回路が故障して自動起動せず、石狩第2ゾーンの専用サーバの一部が停止した。当初はUPS装置の障害と告知していた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 305,
   "title": "Incident review: API and Dashboard outage on 10 October 2017",
   "url": "https://gocardless.com/blog/incident-review-api-and-dashboard-outage-on-10th-october",
   "provider": "GoCardless",
   "date": "2017-10-10",
   "year": 2017,
   "datetimeBegin": "2017-10-10",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "1時間50分",
   "durationMinutes": 110,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "failover-gap"
   ],
   "summary": "Incident review: API and Dashboard outage on 10 October 2017",
   "rootCause": "2017年10月10日午後、APIとダッシュボードが1時間50分停止し、その間のリクエストは失敗してエラーを返した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 306,
   "title": "Incident details | Google Cloud Service Health",
   "url": "https://status.cloud.google.com/incidents/fmEL9i2fArADKawkZAa2",
   "provider": "Google Cloud",
   "date": "2022-07-19",
   "year": 2022,
   "datetimeBegin": "2022-07-19",
   "datetimeEnd": "2022-07-19",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "2022年7月19日、europe-west2-aを収容するデータセンターで冗長な冷却系統が同時に故障し、複数のGoogle Cloudサービスに影響した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 307,
   "title": "Breaking Kubernetes: How We Broke and Fixed our K8s Cluster",
   "url": "https://medium.com/@CivisAnalytics/https-medium-com-civis-analytics-breaking-kubernetes-how-we-broke-and-fixed-our-k8s-cluster-adfa6fbade61",
   "provider": "Medium",
   "date": "2019-01-16",
   "year": 2019,
   "datetimeBegin": "2019-01-16",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Breaking Kubernetes: How We Broke and Fixed our K8s Cluster",
   "rootCause": "複数のKubernetes DaemonSetを置いていたため、コントロールプレーンのコンポーネント間で資源が競合し、クラスタが使えなくなった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 308,
   "title": "Post-mortem of October 22, 2012 AWS degradation",
   "url": "https://netflixtechblog.com/post-mortem-of-october-22-2012-aws-degradation-efcee3ab40d5",
   "provider": "Netflix",
   "date": "2012-10-22",
   "year": 2012,
   "datetimeBegin": "2012-10-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Post-mortem of October 22, 2012 AWS degradation",
   "rootCause": "2012年10月22日のAWS劣化で多くの人気サイトが数時間停止した。Netflixはインスタンス障害に備えデータをEBSに置かず、顧客への影響はごく小さかった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 309,
   "title": "GitHub availability report: July 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2026/",
   "provider": "GitHub",
   "date": "2026-08-06",
   "year": 2026,
   "datetimeBegin": "2026-08-06",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry",
    "software-defect"
   ],
   "summary": "GitHub availability report: July 2026",
   "rootCause": "Actionsが長く停止し、カスケード障害で復旧が許容しがたいほど遅れた。モノリスとActionsを結ぶlaunch serviceは非同期でキューできるため、移行を優先していなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 310,
   "title": "The impact of the Salesloft Drift breach on Cloudflare and our customers",
   "url": "https://blog.cloudflare.com/response-to-salesloft-drift-incident",
   "provider": "Cloudflare",
   "date": "2025-08-09",
   "year": 2025,
   "datetimeBegin": "2025-08-09",
   "datetimeEnd": "2025-08-09",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "The impact of the Salesloft Drift breach on Cloudflare and our customers",
   "rootCause": "Salesloft Driftの侵害により、Cloudflareの外部の者が、顧客サポート用のSalesforceインスタンスとその一部データへアクセスした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 311,
   "title": "Cloudflare incident on March 21, 2025",
   "url": "https://blog.cloudflare.com/cloudflare-incident-march-21-2025",
   "provider": "Cloudflare",
   "date": "2025-03-21",
   "year": 2025,
   "datetimeBegin": "2025-03-21",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "credential-expiry"
   ],
   "summary": "Cloudflare incident on March 21, 2025",
   "rootCause": "人的ミスで新しい認証情報を本番のR2 Gatewayへ配備しておらず、書き込みはすべて、読み込みの約35%が世界的に失敗した。Gateway Workerが使う認証情報が見えていなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 312,
   "title": "GitHub Availability Report: November 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2024/",
   "provider": "GitHub",
   "date": "2024-11-19",
   "year": 2024,
   "datetimeBegin": "2024-11-19 10:56:00",
   "datetimeEnd": "2024-11-19 12:03:00",
   "tz": "UTC",
   "duration": "1時間7分",
   "durationMinutes": 67,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: November 2024",
   "rootCause": "定期メンテナンスを終えたデータベースホストが読み取り専用のままで、通知の配信が失敗した。その後配信は回復し、失敗したジョブの再試行は成功した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 313,
   "title": "I deleted the production database by accident 💥",
   "url": "https://keepthescore.co/blog/posts/deleting_the_production_database",
   "provider": "Keepthescore",
   "date": "2020-10-17",
   "year": 2020,
   "datetimeBegin": "2020-10-17",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "config-error"
   ],
   "summary": "I deleted the production database by accident 💥",
   "rootCause": "環境変数の設定誤りで、localhost限定のつもりが本番データベースへ接続し、データを消去した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 314,
   "title": "GitHub Availability Report: August 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2023/",
   "provider": "GitHub",
   "date": "2023-08-15",
   "year": 2023,
   "datetimeBegin": "2023-08-15 16:58:00",
   "datetimeEnd": "2023-08-15 20:58:00",
   "tz": "UTC",
   "duration": "4時間",
   "durationMinutes": 240,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: August 2023",
   "rootCause": "Webhook配信が大幅かつ持続的に急増してキューが滞留し、配信やGitHub Actionsなどの非同期処理がすぐ実行されなくなった。また、ジョブ配送部は想定外のCPU制限とKafkaの短いセッションタイムアウトの相互作用で失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 315,
   "title": "The Four Critical Security Flaws that Resulted in Last Friday's Hack",
   "url": "https://blog.cloudflare.com/the-four-critical-security-flaws-that-resulte",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "The Four Critical Security Flaws that Resulted in Last Friday's Hack",
   "rootCause": "Cloudflareは先週受けた攻撃の詳細を公開し、セキュリティ情報は組織間で共有してインターネット全体を安全にすべきだと述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 316,
   "title": "GitHub Availability Report: May 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2024/",
   "provider": "GitHub",
   "date": "2024-05-21",
   "year": 2024,
   "datetimeBegin": "2024-05-21 11:40:00",
   "datetimeEnd": "2024-05-21 18:40:00",
   "tz": "UTC",
   "duration": "7時間",
   "durationMinutes": 420,
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "upstream-failure"
   ],
   "summary": "GitHub Availability Report: May 2024",
   "rootCause": "上流のクラウド事業者で予定されていたOS更新により、クラスタ内のトラフィックが意図せず偏って分散し、GitHubの各サービスに遅延が生じた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 317,
   "title": "GitHub Availability Report: April 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2021/",
   "provider": "GitHub",
   "date": "2021-04-01",
   "year": 2021,
   "datetimeBegin": "2021-04-01 21:30:00",
   "datetimeEnd": "2021-04-01 22:23:00",
   "tz": "UTC",
   "duration": "53分",
   "durationMinutes": 53,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "software-defect"
   ],
   "summary": "GitHub Availability Report: April 2021",
   "rootCause": "最近のデータ移行で入ったバグによりDNS解決が失敗し、GitHub Packagesのコンテナレジストリの可用性が劣化した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 318,
   "title": "GitHub Availability Report: October 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2024/",
   "provider": "GitHub",
   "date": "2024-10-11",
   "year": 2024,
   "datetimeBegin": "2024-10-11 05:59:00",
   "datetimeEnd": "2024-10-12 01:11:00",
   "tz": "UTC",
   "duration": "19時間12分",
   "durationMinutes": 1152,
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "GitHub Availability Report: October 2024",
   "rootCause": "データベース移行のあと、ある拠点のDNSが名前解決に失敗した。復旧の試みが連鎖障害となり、その拠点のDNSに影響し、コード検索は約4時間すべて失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 319,
   "title": "GitHub Availability Report: September 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2025/",
   "provider": "GitHub",
   "date": "2025-09-15",
   "year": 2025,
   "datetimeBegin": "2025-09-15 17:55:00",
   "datetimeEnd": "2025-09-15 18:20:00",
   "tz": "UTC",
   "duration": "25分",
   "durationMinutes": 25,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: September 2025",
   "rootCause": "全リクエストが403になった原因は、レート制限の未検出の境界条件だった。別の障害では異常な通信量で送信メールサーバが資源競合し、さらに別の障害では内部依存の更新が誤設定を露呈した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 320,
   "title": "Enom",
   "url": "https://enomstatus.com/incidents/03q064h6rb7x",
   "provider": "Enom",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Enom",
   "rootCause": "レジストリの計画メンテナンスにより、.COMと.NETのSRS本番でWhoisやドメインの購入、更新、変更などが一時使えなくなる可能性があった。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 321,
   "title": "Network problems last Friday",
   "url": "https://github.blog/news-insights/the-library/network-problems-last-friday",
   "provider": "GitHub",
   "date": "2012-12-05",
   "year": 2012,
   "datetimeBegin": "2012-12-05",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Network problems last Friday",
   "rootCause": "スイッチの対の誤設定でブリッジループが起きた。ポート不足でアクセススイッチを切り離して集約構成へ変えており、集約スイッチ1台の故障には耐えられなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 322,
   "title": "Incident Management at Spotify | Spotify Engineering",
   "url": "https://engineering.atspotify.com/2013/6/incident-management-at-spotify",
   "provider": "Spotify",
   "date": "2013-06-04",
   "year": 2013,
   "datetimeBegin": "2013-06-04",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Incident Management at Spotify | Spotify Engineering",
   "rootCause": "欧州の多くの利用者を巻き込む大規模障害が起きた。2か月前には最小のバックエンドPopcountで障害があり、遅いと各サービスはすぐ失敗する設計だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 323,
   "title": "아시아-태평양 서울 리전(AP-NorthEast-2)의 Amazon EC2 DNS 확인(Resolution) 이슈 요약",
   "url": "https://aws.amazon.com/message/74876-2/",
   "provider": "AWS",
   "date": "2018-11-22",
   "year": 2018,
   "datetimeBegin": "2018-11-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "아시아-태평양 서울 리전(AP-NorthEast-2)의 Amazon EC2 DNS 확인(Resolution) 이슈 요약",
   "rootCause": "設定更新がAP-NORTHEAST-2のEC2 DNSリゾルバ群から、最小正常ホスト数の設定を誤って削除した。正常ホストが減り、EC2内からのDNS問い合わせが失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 324,
   "title": "A kubernetes failure story (#1 - dex)",
   "url": "https://pieterlange.github.io/failure-stories/2019-06.dex.html",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "A kubernetes failure story (#1 - dex)",
   "rootCause": "DexのNamespaceにkubectlでは消せないkubernetesファイナライザが付いていた。対処したあともetcdに0.5Gのauthrequestsが残った。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 325,
   "title": "GitHub Availability Report: July 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2022/",
   "provider": "GitHub",
   "date": "2022-07-27",
   "year": 2022,
   "datetimeBegin": "2022-07-27 22:29:00",
   "datetimeEnd": "2022-07-28 04:24:00",
   "tz": "UTC",
   "duration": "5時間55分",
   "durationMinutes": 355,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: July 2022",
   "rootCause": "DNSレコードを新しいロードバランサへ移す際、置換レコードの追加が失敗し、旧設定へ戻す更新も失敗してCodespacesが使えなくなった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 326,
   "title": "How to run PostgreSQL on Kubernetes",
   "url": "https://goteleport.com/blog/running-postgresql-on-kubernetes",
   "provider": "Goteleport",
   "date": "2018-01-22",
   "year": 2018,
   "datetimeBegin": "2018-01-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "How to run PostgreSQL on Kubernetes",
   "rootCause": "非同期レプリケーションが遅れたままフェイルオーバーすると、複製されていない書き込みが消えてデータが失われる、というパターンを説明している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 327,
   "title": "Cloudflare outage on November 18, 2025",
   "url": "https://blog.cloudflare.com/18-november-2025-outage-uk-ua",
   "provider": "Cloudflare",
   "date": "2025-11-18",
   "year": 2025,
   "datetimeBegin": "2025-11-18",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare outage on November 18, 2025",
   "rootCause": "データベースの権限変更で、Bot Managementが使うfeature fileに複数エントリが出力され、Cloudflareの基幹トラフィック配送が大きく失敗した。サイバー攻撃ではなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 328,
   "title": "GitHub Availability Report: April 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2025/",
   "provider": "GitHub",
   "date": "2025-04-11",
   "year": 2025,
   "datetimeBegin": "2025-04-11 03:05:00",
   "datetimeEnd": "2025-04-11 03:44:00",
   "tz": "UTC",
   "duration": "39分",
   "durationMinutes": 39,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: April 2025",
   "rootCause": "内部依存への手動の設定変更がテストをすり抜け、Codespaces利用者の約75%で作成と開始が失敗した。別件ではデータベースホストの資源競合で複数サービスが劣化した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 329,
   "title": "GitHub Availability Report: October 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2020/",
   "provider": "GitHub",
   "date": "2020-10-09",
   "year": 2020,
   "datetimeBegin": "2020-10-09 21:30:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: October 2020",
   "rootCause": "不正な状態により、バックグラウンドジョブへの書き込みの約10%が失敗し、二次系統へ処理を移す間にジョブが滞留した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 330,
   "title": "Summary of the AWS Service Event in the US East Region",
   "url": "https://aws.amazon.com/jp/message/67457/",
   "provider": "AWS",
   "date": "2012-06-29",
   "year": 2012,
   "datetimeBegin": "2012-06-29",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Summary of the AWS Service Event in the US East Region",
   "rootCause": "米国東部を襲った大規模な雷雨の中、発電機は起動したものの、投入時に各機が独立して安定した電圧を出せなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 331,
   "title": "GitHub Availability Report: September 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2021/",
   "provider": "GitHub",
   "date": "2021-10-06",
   "year": 2021,
   "datetimeBegin": "2021-10-06",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: September 2021",
   "rootCause": "2021年9月、GitHubは中核サービスが停止するインシデントを経験しなかったと可用性報告に書いている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 332,
   "title": "GitHub Availability Report: November 2020",
   "url": "https://github.blog/news-insights/company-news/availability-report-november-2020/",
   "provider": "GitHub",
   "date": "2020-11-02",
   "year": 2020,
   "datetimeBegin": "2020-11-02 12:00:00",
   "datetimeEnd": "2020-11-02 12:32:00",
   "tz": "UTC",
   "duration": "32分",
   "durationMinutes": 32,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: November 2020",
   "rootCause": "GitHubの2020年11月の報告では、直近のインシデントの寄与要因を調査中で、詳細は翌月の報告で更新するとしている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 333,
   "title": "Intermittent delays in Kubernetes",
   "url": "https://medium.com/techmindtickle/intermittent-delays-in-kubernetes-e9de8239e2fa",
   "provider": "Medium",
   "date": "2019-08-05",
   "year": 2019,
   "datetimeBegin": "2019-08-05",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Intermittent delays in Kubernetes",
   "rootCause": "Pod間通信が5秒単位で遅れた。原因はDNS参照で、libcが5秒待って再試行しており、DNATやSNAT時のconntrackの競合状態で起きていた。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 334,
   "title": "Cloudflare outage caused by bad software deploy (updated)",
   "url": "https://blog.cloudflare.com/cloudflare-outage",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "resource-exhaustion"
   ],
   "summary": "Cloudflare outage caused by bad software deploy (updated)",
   "rootCause": "不適切なソフトウェア配備でCPU使用率が急上昇し、Cloudflare経由のサイトで約30分間502エラーが出た。その配備はロールバックした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 335,
   "title": "Postmortem on the read-only outage of Basecamp on November 9th, 2018",
   "url": "https://m.signalvnoise.com/postmortem-on-the-read-only-outage-of-basecamp-on-november-9th-2018",
   "provider": "M",
   "date": "2018-11-09",
   "year": 2018,
   "datetimeBegin": "2018-11-09",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Postmortem on the read-only outage of Basecamp on November 9th, 2018",
   "rootCause": "書き込みの多いeventsテーブルが整数の上限2147483647に達し、Basecampが読み取り専用になった。上限までの余裕が減る速さを見誤っていた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 336,
   "title": "Sun Screen",
   "url": "https://forbes.com/forbes/2000/1113/6613068a.html",
   "provider": "Forbes",
   "date": "2000-11-13",
   "year": 2000,
   "datetimeBegin": "2000-11-13 00:00:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Sun Screen",
   "rootCause": "Sunのハイエンドサーバが明白な理由なく突然クラッシュし、AOLやeBayなどに影響した。当初Sunは自社装置ではなく顧客側データセンターの欠陥が原因だと考えていた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 337,
   "title": "Intermittent failures - incident.io Status",
   "url": "https://status.incident.io/incidents/01JRDFKAGE07YYDY0KZR137BX3/write-up",
   "provider": "Incident.io",
   "date": "2025-04-09",
   "year": 2025,
   "datetimeBegin": "2025-04-09",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Intermittent failures - incident.io Status",
   "rootCause": "空テーブルの作成と索引追加という定例の移行がPGAuditと予期せず干渉し、拡張が重要なロックを持ったまま無応答になった。データベースを再起動した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 338,
   "title": "Cloudflare incident on January 24, 2023",
   "url": "https://blog.cloudflare.com/cloudflare-incident-on-january-24th-2023",
   "provider": "Cloudflare",
   "date": "2023-01-24",
   "year": 2023,
   "datetimeBegin": "2023-01-24",
   "datetimeEnd": "2023-01-24",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Cloudflare incident on January 24, 2023",
   "rootCause": "サービストークンを管理するコードのリリース誤りでトークンが上書きされ、そのアカウント上のサービスが121分間、リクエスト失敗などの異常を起こした。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 339,
   "title": "crates.io Postmortem: Broken Crate Downloads | Inside Rust Blog",
   "url": "https://blog.rust-lang.org/inside-rust/2023/07/21/crates-io-postmortem/",
   "provider": "Rust",
   "date": "2023-07-20",
   "year": 2023,
   "datetimeBegin": "2023-07-20",
   "datetimeEnd": "2023-07-20",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "crates.io Postmortem: Broken Crate Downloads | Inside Rust Blog",
   "rootCause": "ダウンロードにバグを含む配備により、2023年7月20日12時17分から12時30分UTCまで、crates.ioのクレート取得がすべて失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 340,
   "title": "https://yashmehrotra.com/posts/the-case-of-the-missing-packet-an-eks-migration-tale/",
   "url": "https://yashmehrotra.com/post/2020-03-16-case-of-missing-packet",
   "provider": "Yashmehrotra",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "https://yashmehrotra.com/posts/the-case-of-the-missing-packet-an-eks-migration-tale/",
   "archived": false
  },
  {
   "id": 341,
   "title": "Elastic Cloud Incident Report: February 4, 2019",
   "url": "https://elastic.co/blog/elastic-cloud-incident-report-feburary-4-2019",
   "provider": "Elastic",
   "date": "2019-02-04",
   "year": 2019,
   "datetimeBegin": "2019-02-04",
   "datetimeEnd": "2019-02-04",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Elastic Cloud Incident Report: February 4, 2019",
   "rootCause": "このリージョンでのZooKeeperのパッチ適用が想定どおり進まず、調整サービスが停止した。アンサンブルはCPU、IO、メモリが高負荷になり、クライアント接続の失敗と再接続が多発した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 342,
   "title": "Making sure you're not a bot!",
   "url": "https://lkml.org/lkml/2012/7/1/203",
   "provider": "Lkml",
   "date": "2012-07-01",
   "year": 2012,
   "datetimeBegin": "2012-07-01",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Making sure you're not a bot!",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 343,
   "title": "Observability: cloud monitoring and logging",
   "url": "https://cloud.google.com/products/observability",
   "provider": "Google Cloud",
   "date": "2018-07-01",
   "year": 2018,
   "datetimeBegin": "2018-07-01",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Observability: cloud monitoring and logging",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 344,
   "title": "Today we mitigated 1.1.1.1",
   "url": "https://blog.cloudflare.com/today-we-mitigated-1-1-1-1",
   "provider": "Cloudflare",
   "date": "2018-05-31",
   "year": 2018,
   "datetimeBegin": "2018-05-31",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Today we mitigated 1.1.1.1",
   "rootCause": "2018年5月31日、1.1.1.1のDNSリゾルバが17分間、世界的に到達不能になった。攻撃の結果ではなく、DDoS緩和のGatebotの変更を十分に試験していなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 345,
   "title": "Summary of the AWS Service Event in the Sydney Region",
   "url": "https://aws.amazon.com/message/4372T8",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "upstream-failure"
   ],
   "summary": "Summary of the AWS Service Event in the Sydney Region",
   "rootCause": "商用電源が失われ、複数のAWS施設が停電した。いくつかの電源系統が発電機へ負荷を移せず、インスタンスは主系と副系の電力を両方失い、電圧低下も異常に長かった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 346,
   "title": "October 21 post-incident analysis",
   "url": "https://github.blog/news-insights/company-news/oct21-post-incident-analysis",
   "provider": "GitHub",
   "date": "2018-10-21",
   "year": 2018,
   "datetimeBegin": "2018-10-21",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "October 21 post-incident analysis",
   "rootCause": "故障した100G光装置を交換する定例作業で、米国東海岸の拠点と主データセンターの接続が失われた。43秒で戻ったが、24時間11分のサービス劣化につながった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 347,
   "title": "Quantifying the Impact of \"Cloudbleed\"",
   "url": "https://blog.cloudflare.com/quantifying-the-impact-of-cloudbleed",
   "provider": "Cloudflare",
   "date": "2016-09-22",
   "year": 2016,
   "datetimeBegin": "2016-09-22",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Quantifying the Impact of \"Cloudbleed\"",
   "rootCause": "Cloudflareのパーサのバグにより、同社ネットワークを流れるデータがインターネット上へ漏えいした。通知から数時間でバグを修正した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 348,
   "title": "GitHub Availability Report: July 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2023/",
   "provider": "GitHub",
   "date": "2023-07-21",
   "year": 2023,
   "datetimeBegin": "2023-07-21 13:07:00",
   "datetimeEnd": "2023-07-21 14:06:00",
   "tz": "UTC",
   "duration": "59分",
   "durationMinutes": 59,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "GitHub Availability Report: July 2023",
   "rootCause": "2023年7月21日13時07分UTCから59分間、冗長なデータセンターの一つで部分停電が起き、計算容量を失った。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 349,
   "title": "GitHub Availability Report: April 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2024/",
   "provider": "GitHub",
   "date": "2024-04-05",
   "year": 2024,
   "datetimeBegin": "2024-04-05 08:11:00",
   "datetimeEnd": "2024-04-05 08:58:00",
   "tz": "UTC",
   "duration": "47分",
   "durationMinutes": 47,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: April 2024",
   "rootCause": "データベースロードバランサの変更で、1つのデータセンターにある複数の重要データベースへの接続が失敗し、10万を超えるActionsのワークフローが開始できなかった。別件では無制限のクエリでプライマリが過負荷になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 350,
   "title": "GitHub Availability Report: May 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2021/",
   "provider": "GitHub",
   "date": "2021-05-08",
   "year": 2021,
   "datetimeBegin": "2021-05-08 06:46:00",
   "datetimeEnd": "2021-05-08 15:46:00",
   "tz": "UTC",
   "duration": "9時間",
   "durationMinutes": 540,
   "triggers": [
    "Application bugs",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: May 2021",
   "rootCause": "基盤のMySQLの障害で操作が時間切れになり、GitHub Container registryの表示やdocker pushとpullが失敗した。レプリカへ切り替えて復旧した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 351,
   "title": "DNS Outage on 2023-01-25 | Inside Rust Blog",
   "url": "https://blog.rust-lang.org/inside-rust/2023/02/08/dns-outage-portmortem/",
   "provider": "Rust",
   "date": "2023-01-25",
   "year": 2023,
   "datetimeBegin": "2023-01-25",
   "datetimeEnd": "2023-01-25",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "DNS Outage on 2023-01-25 | Inside Rust Blog",
   "rootCause": "配備中にstatic.crates.ioのDNSレコードが推定10分から15分の間解決せず、クレートを取得できないためビルドが失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 352,
   "title": "How and why the leap second affected Cloudflare DNS",
   "url": "https://blog.cloudflare.com/how-and-why-the-leap-second-affected-cloudflare-dns",
   "provider": "Cloudflare",
   "date": "2017-01-01",
   "year": 2017,
   "datetimeBegin": "2017-01-01",
   "datetimeEnd": "2017-01-01",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "How and why the leap second affected Cloudflare DNS",
   "rootCause": "うるう秒に伴って値が負になり、CNAME参照コードのバグでRRDNSがパニックした。Cloudflareが管理する一部サイトのDNS解決が失敗した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 353,
   "title": "GitHub Availability Report: October 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2021/",
   "provider": "GitHub",
   "date": "2021-10-08",
   "year": 2021,
   "datetimeBegin": "2021-10-08 17:16:00",
   "datetimeEnd": "2021-10-08 18:52:00",
   "tz": "UTC",
   "duration": "1時間36分",
   "durationMinutes": 96,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "GitHub Availability Report: October 2021",
   "rootCause": "Codespacesの公開API開始時に、中核APIの応答構造が意図せず変わり、既存クライアントが影響を受けた。VS Codeデスクトップから新しいCodespacesを開始できなくなった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 354,
   "title": "GitHub Availability Report: September 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2020/",
   "provider": "GitHub",
   "date": "2020-09-17",
   "year": 2020,
   "datetimeBegin": "2020-09-17 15:50:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: September 2020",
   "rootCause": "あるノード向けのビルドが失敗し、そのノードを手動で無効化するまで失敗が続いた。同種の失敗は自動で直し、可能なら別ノードで再試行するとしている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 355,
   "title": "Incorrect proxying of 24 hostnames on January 24, 2022",
   "url": "https://blog.cloudflare.com/incorrect-proxying-of-24-hostnames-on-january-24-2022",
   "provider": "Cloudflare",
   "date": "2022-01-24",
   "year": 2022,
   "datetimeBegin": "2022-01-24",
   "datetimeEnd": "2022-01-24",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Incorrect proxying of 24 hostnames on January 24, 2022",
   "rootCause": "24のホスト名が誤って中継され、API呼び出しなどが正しく応答しないか、完全に失敗した。www.cloudflare.comは正しいオリジンへ戻した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 356,
   "title": "Steam Outage: How to Monitor Data Center Connectivity",
   "url": "https://blog.thousandeyes.com/steam-outage-monitor-data-center-connectivity",
   "provider": "Thousandeyes",
   "date": "2015-05-07",
   "year": 2015,
   "datetimeBegin": "2015-05-07",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "2時間",
   "durationMinutes": 120,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "network-fault"
   ],
   "summary": "Steam Outage: How to Monitor Data Center Connectivity",
   "rootCause": "5月7日11時45分（太平洋時間）から2時間、Steamが広範囲に停止した。記事はデータセンターへの接続を監視する重要性を述べている。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 357,
   "title": "GitHub Availability Report: November 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2021/",
   "provider": "GitHub",
   "date": "2021-11-27",
   "year": 2021,
   "datetimeBegin": "2021-11-27 20:40:00",
   "datetimeEnd": "2021-11-27 23:30:00",
   "tz": "UTC",
   "duration": "2時間50分",
   "durationMinutes": 170,
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: November 2021",
   "rootCause": "大きなMySQLテーブルのスキーマ移行でデッドロックが起き、読み取りレプリカがクラッシュ回復に入った。正常なレプリカへ負荷が集中し、中核サービスの可用性が低下した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 358,
   "title": "GitHub availability report: August 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2026/",
   "provider": "GitHub",
   "date": "2026-09-09",
   "year": 2026,
   "datetimeBegin": "2026-09-09",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "10時間42分",
   "durationMinutes": 642,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion",
    "software-defect"
   ],
   "summary": "GitHub availability report: August 2026",
   "rootCause": "8月の障害を受け、耐久性のある容量と分離が引き続き必要だとしている。データベースプライマリの移設やAzureへの移行、容量管理の自動化を進めている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 359,
   "title": "Outage post-mortem - Moonlight updates",
   "url": "https://updates.moonlightwork.com/outage-post-mortem-87370",
   "provider": "Updates",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "software-defect"
   ],
   "summary": "Outage post-mortem - Moonlight updates",
   "rootCause": "1月18日から22日まで、MoonlightのサイトとAPIが断続的に停止した。Google Cloudのネットワーク障害の報告を原因とみて、サポートへ連絡した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 360,
   "title": "Posts tagged \"Post Mortem\"",
   "url": "https://blog.cloudflare.com/tag/post-mortem/",
   "provider": "Cloudflare",
   "date": "2026-02-21",
   "year": 2026,
   "datetimeBegin": "2026-02-21",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "25分",
   "durationMinutes": 25,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Posts tagged \"Post Mortem\"",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 361,
   "title": "Dropbox Tech Blog",
   "url": "https://dropbox.tech/",
   "provider": "Dropbox",
   "date": "2026-09-29",
   "year": 2026,
   "datetimeBegin": "2026-09-29",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Dropbox Tech Blog",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 362,
   "title": "December 4 - NRE Labs Outage Post-Mortem",
   "url": "https://oswalt.dev/2018/12/december-4-nre-labs-outage-post-mortem",
   "provider": "Oswalt",
   "date": "2018-12-04",
   "year": 2018,
   "datetimeBegin": "2018-12-04",
   "datetimeEnd": "2018-12-04",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "December 4 - NRE Labs Outage Post-Mortem",
   "rootCause": "12月4日のNRE Labsの障害では、ノードの一つが他と異なるバージョンで動いていた。公開された脆弱性のためクラスタのバージョンを上げる必要があり、告知のあと利用は再び落ちた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 363,
   "title": "Apollo 11 and Other Screw-Ups",
   "url": "https://www.doneyles.com/LM/Tales.html",
   "provider": "Doneyles",
   "date": "2004-02-06",
   "year": 2004,
   "datetimeBegin": "2004-02-06",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Apollo 11 and Other Screw-Ups",
   "rootCause": "誤ったデータにより、月着陸船の降下エンジンの推力が激しく変動した。スロットル制御がかろうじて安定なだけで、delta-Vモニタが故障と判断してエンジン停止を指令した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 364,
   "title": "How A Cryptocurrency Miner Made Its Way onto Our Internal Kubernetes Clusters",
   "url": "https://medium.com/jw-player-engineering/how-a-cryptocurrency-miner-made-its-way-onto-our-internal-kubernetes-clusters-9b09c4704205",
   "provider": "Medium",
   "date": "2019-03-19",
   "year": 2019,
   "datetimeBegin": "2019-03-19",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "How A Cryptocurrency Miner Made Its Way onto Our Internal Kubernetes Clusters",
   "rootCause": "内部のKubernetesクラスタに暗号通貨マイナーが入った。高負荷平均の原因は正規サービスの負荷増と判定され、同種の警報は変動が収まるまでミュートされた。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 365,
   "title": "スーパーコンピュータシステムのファイル消失のお詫び | 京都大学情報環境機構",
   "url": "https://www.iimc.kyoto-u.ac.jp/ja/news/information/211228056999",
   "provider": "Iimc",
   "date": "2021-12-28",
   "year": 2021,
   "datetimeBegin": "2021-12-28",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "スーパーコンピュータシステムのファイル消失のお詫び | 京都大学情報環境機構",
   "rootCause": "バックアッププログラムの不具合により、2021年12月14日から16日にかけて、スーパーコンピュータの大容量ストレージの一部データが意図せず削除された。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 366,
   "title": "Incident details | Google Cloud Service Health",
   "url": "https://status.cloud.google.com/incidents/eo76pxZiDgWVz4z3kmUv",
   "provider": "Google Cloud",
   "date": "2022-05-20",
   "year": 2022,
   "datetimeBegin": "2022-05-20",
   "datetimeEnd": "2022-05-20",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "米国中部のゲートウェイから出るファイバ経路の部品が故障し、複数のエッジとの可用帯域が減ってパケットロスが起きた。バックボーンは残りの経路へ自動でトラフィックを移した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 367,
   "title": "One, Two, Skip a Few... | Blog | incident.io",
   "url": "https://incident.io/blog/one-two-skip-a-few",
   "provider": "Incident.io",
   "date": "2021-07-12",
   "year": 2021,
   "datetimeBegin": "2021-07-12",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "One, Two, Skip a Few... | Blog | incident.io",
   "rootCause": "インシデントの外部IDを組織別のシーケンスで採番する仕組みで番号が飛んだ。最初はトランザクションのロールバックが原因ではないかと調べた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 368,
   "title": "Addressing GitHub’s recent availability issues",
   "url": "https://github.blog/news-insights/company-news/addressing-githubs-recent-availability-issues/",
   "provider": "GitHub",
   "date": "2023-05-09",
   "year": 2023,
   "datetimeBegin": "2023-05-09",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Addressing GitHub’s recent availability issues",
   "rootCause": "2023年5月9日の設定変更でGitデータベースが劣化し、主要10サービスのうち8つが重大な障害になった。多くのサービスが新しく書かれたGitデータを読めなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 369,
   "title": "The deep-dive into how Verizon and a BGP Optimizer Knocked Large Parts of the Internet Offline Monday",
   "url": "https://blog.cloudflare.com/the-deep-dive-into-how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-monday",
   "provider": "Cloudflare",
   "date": "2019-06-24",
   "year": 2019,
   "datetimeBegin": "2019-06-24T00:00:00",
   "datetimeEnd": "2019-06-24T00:00:00",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "The deep-dive into how Verizon and a BGP Optimizer Knocked Large Parts of the Internet Offline Monday",
   "rootCause": "Verizonが経路をインターネットの他へ転送し、BGPオプティマイザとともに広域をオフラインにした。その経路は転送されるべきではなかったと記事は書いている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 370,
   "title": "Postmortem: Trading and hanging orders on 12th April 2018",
   "url": "https://zerodha.com/marketintel/bulletin/105569/postmortem-trading-and-hanging-orders-on-12th-april-2018",
   "provider": "Zerodha",
   "date": "2018-04-12",
   "year": 2018,
   "datetimeBegin": "2018-04-12",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Postmortem: Trading and hanging orders on 12th April 2018",
   "rootCause": "2018年4月12日の取引と、止まったままの注文について、影響を受けた顧客に苦痛を与えたと謝罪している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 371,
   "title": "Major data center power failure (again): Cloudflare Code Orange tested",
   "url": "https://blog.cloudflare.com/major-data-center-power-failure-again-cloudflare-code-orange-tested",
   "provider": "Cloudflare",
   "date": "2023-11-02",
   "year": 2023,
   "datetimeBegin": "2023-11-02",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "upstream-failure"
   ],
   "summary": "Major data center power failure (again): Cloudflare Code Orange tested",
   "rootCause": "電力網事業者の保守がきっかけとみられる連鎖故障が施設の地絡故障に至り、同じ主要データセンターが5か月足らずで再び停電した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 372,
   "title": "Our October 20 Service Disruption: What Happened, What We Learned and How We’re Improving | LaunchDarkly",
   "url": "https://launchdarkly.com/blog/what-happened-what-we-learned-and-how-were-improving",
   "provider": "LaunchDarkly",
   "date": "2025-10-20",
   "year": 2025,
   "datetimeBegin": "2025-10-20",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Our October 20 Service Disruption: What Happened, What We Learned and How We’re Improving | LaunchDarkly",
   "rootCause": "AWSのus-east-1の大規模障害から始まり、内部の連鎖障害でLaunchDarklyの復旧が延びた。イベント取り込みが劣化し、米国とEUでデータが失われた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 373,
   "title": "Update on Azure Storage Service Interruption | Microsoft Azure Blog",
   "url": "https://azure.microsoft.com/en-us/blog/update-on-azure-storage-service-interruption",
   "provider": "Azure",
   "date": "2014-11-19",
   "year": 2014,
   "datetimeBegin": "2014-11-19",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Update on Azure Storage Service Interruption | Microsoft Azure Blog",
   "rootCause": "Azure Storageフロントエンドへの設定変更でバグが発動し、Blobフロントエンドがトラフィックを受け取れなくなった。その上のサービスにも問題が及んだ。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 374,
   "title": "An update on recent service disruptions",
   "url": "https://github.blog/news-insights/company-news/an-update-on-recent-service-disruptions/",
   "provider": "GitHub",
   "date": "2022-03-16",
   "year": 2022,
   "datetimeBegin": "2022-03-16 14:09:00",
   "datetimeEnd": "2022-03-16 19:45:00",
   "tz": "UTC",
   "duration": "5時間36分",
   "durationMinutes": 336,
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "An update on recent service disruptions",
   "rootCause": "mysql1クラスタの資源競合で、ピーク時に多くのサービスが劣化した。git操作やWebhook、APIなどを含む書き込みがすべてできず、正常なレプリカへ切り替えて回復した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 375,
   "title": "GitHub Availability Report: November 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2025/",
   "provider": "GitHub",
   "date": "2025-11-17",
   "year": 2025,
   "datetimeBegin": "2025-11-17 16:52:00",
   "datetimeEnd": "2025-11-17 19:08:00",
   "tz": "UTC",
   "duration": "2時間16分",
   "durationMinutes": 136,
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: November 2025",
   "rootCause": "内部のサービス間通信に使うTLS証明書が期限切れになり、SSHとHTTPのGit操作と生ファイルの参照がすべて失敗した。別件でCopilotのClaude Sonnet 4.5が停止した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 376,
   "title": "GitHub Availability Report: August 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2022/",
   "provider": "GitHub",
   "date": "2022-08-29",
   "year": 2022,
   "datetimeBegin": "2022-08-29 12:51:00",
   "datetimeEnd": "2022-08-29 18:31:00",
   "tz": "UTC",
   "duration": "5時間40分",
   "durationMinutes": 340,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: August 2022",
   "rootCause": "米国東部と西部でCodespaces用の新規VM作成が高率に失敗し、空きを待つうちに時間切れになった。クラウド事業者は作成成功と報告したが、作成時に必要な重要プロセスは動いていなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 377,
   "title": "GitHub Availability Report: May 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2025/",
   "provider": "GitHub",
   "date": "2025-05-01",
   "year": 2025,
   "datetimeBegin": "2025-05-01 22:09:00",
   "datetimeEnd": "2025-05-01 23:13:00",
   "tz": "UTC",
   "duration": "1時間4分",
   "durationMinutes": 64,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "GitHub Availability Report: May 2025",
   "rootCause": "全クライアントのHTTP要求へ独自ヘッダを付ける新機能が、添付のアップロードでCORSエラーを起こした。別件ではフェイルオーバー後のキャッシュ誤設定でジョブが重複し、ホステッドランナーの容量が減った。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 378,
   "title": "The mechanics of a sophisticated phishing scam and how we stopped it",
   "url": "https://blog.cloudflare.com/2022-07-sms-phishing-attacks",
   "provider": "Cloudflare",
   "date": "2022-07-20",
   "year": 2022,
   "datetimeBegin": "2022-07-20",
   "datetimeEnd": "2022-07-20",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "The mechanics of a sophisticated phishing scam and how we stopped it",
   "rootCause": "フィッシング用ドメインが新しすぎて新規.com登録として公開されておらず、システムは登録を検知できなかった。失敗したログインではパスワードは正しく、第二要素は確認できなかった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 379,
   "title": "GitHub Availability Report: September 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2024/",
   "provider": "GitHub",
   "date": "2024-09-16",
   "year": 2024,
   "datetimeBegin": "2024-09-16 21:11:00",
   "datetimeEnd": "2024-09-16 22:08:00",
   "tz": "UTC",
   "duration": "57分",
   "durationMinutes": 57,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: September 2024",
   "rootCause": "ランナー接続を管理するサービスの誤設定でCPUが制限され、性能が劣化した。別件では配備後にSNATポートが枯渇し、Codespacesの接続が切れてエラー率が約25%になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 380,
   "title": "Bungie.net",
   "url": "https://bungie.net/en/News/Article/48723",
   "provider": "Bungie",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Bungie.net",
   "rootCause": "公開ページから原因を特定できない",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 381,
   "title": "GitHub Availability Report: October 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2025/",
   "provider": "GitHub",
   "date": "2025-10-09",
   "year": 2025,
   "datetimeBegin": "2025-10-09 14:45:00",
   "datetimeEnd": "2025-10-09 16:40:00",
   "tz": "UTC",
   "duration": "1時間55分",
   "durationMinutes": 115,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub Availability Report: October 2025",
   "rootCause": "モバイルのプッシュ通知が70分間届かなかった。Codespacesはdevcontainerの構築に必要な第三者の障害から連鎖して失敗し、別件は第三者の広域障害でサービスが劣化した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 382,
   "title": "オーストラリアで起きた全国的な通信障害についてまとめてみた - piyolog",
   "url": "https://piyolog.hatenadiary.jp/entry/2026/08/22/033313",
   "provider": "Piyolog",
   "date": "2026-07-08",
   "year": 2026,
   "datetimeBegin": "2026-07-08",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "software-defect"
   ],
   "summary": "オーストラリアで起きた全国的な通信障害についてまとめてみた - piyolog",
   "rootCause": "Telstraの時刻同期サーバが保守後の再起動で日付を過去へ誤って戻し、誤った日付が相互接続されたシステムへ伝播して全国の通話・データと緊急通報に影響した。原因は未文書化の設計変更とソフト更新の未適用だった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 383,
   "title": "Incident details | Google Workspace Status Dashboard",
   "url": "https://google.com/appsstatus/dashboard/incidents/k71P8nHp32hgcMSsC3mR",
   "provider": "Google",
   "date": "2021-10-25",
   "year": 2021,
   "datetimeBegin": "2021-10-25",
   "datetimeEnd": "2021-10-25",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion",
    "config-error"
   ],
   "summary": "Incident details | Google Workspace Status Dashboard",
   "rootCause": "Google Meetのライブ配信で、処理を補助するメッセージ配送が想定外の負荷急増を受け、設定された閾値に達して一部視聴者の品質が断続的に落ちた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 384,
   "title": "Post Mortem: Today's Attack; Apparent Google Apps/Gmail Vulnerability; and How to Protect Yourself",
   "url": "https://blog.cloudflare.com/post-mortem-todays-attack-apparent-google-app",
   "provider": "Cloudflare",
   "date": "2012-06-02",
   "year": 2012,
   "datetimeBegin": "2012-06-02 07:40:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Post Mortem: Today's Attack; Apparent Google Apps/Gmail Vulnerability; and How to Protect Yourself",
   "rootCause": "無効なパスワード再設定の要求を見張るため、要求の写しをデバッグ用の管理メールアカウントへ送っていた、と攻撃の記事は述べている。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 385,
   "title": "Incident 2023-12-04: Data leak and loss in some free tier databases",
   "url": "https://turso.tech/blog/incident-2023-12-04-data-leak-and-loss-in-some-free-tier-databases-7cba5bc7",
   "provider": "Turso",
   "date": "2023-12-04",
   "year": 2023,
   "datetimeBegin": "2023-12-04",
   "datetimeEnd": "2023-12-04",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "upstream-failure"
   ],
   "summary": "Incident 2023-12-04: Data leak and loss in some free tier databases",
   "rootCause": "無料枠は1時間使わないと縮退するが、fly.ioがホストの資源不足でプロセスを戻せないことがある。その処理のバグで、一部のデータベースが空のバックアップ識別子を使い、データの漏えいと消失が起きた。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 386,
   "title": "Incident with Actions, Pull Requests and Issues",
   "url": "https://www.githubstatus.com/incidents/93njd414rpbx",
   "provider": "GitHub",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 12:21:00",
   "datetimeEnd": "2026-10-12 20:16:00",
   "tz": "UTC",
   "duration": "7時間55分",
   "durationMinutes": 475,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Incident with Actions, Pull Requests and Issues",
   "rootCause": "Actionsの新規実行のキューイング、Checks API、Issueの作成・更新、PRのレビュー依頼が失敗または遅延し、Web/メール通知も滞留した。原因は未公表で、詳細な根本原因分析を後日共有すると発表された。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 387,
   "title": "Increased build and deployment failures",
   "url": "https://www.vercel-status.com/incidents/sps6n39gm4sg",
   "provider": "Vercel",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 13:35:00",
   "datetimeEnd": "2026-10-12 20:11:00",
   "tz": "UTC",
   "duration": "6時間36分",
   "durationMinutes": 396,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Increased build and deployment failures",
   "rootCause": "上流のGitHub障害により、GitHub連携プロジェクトのビルドとデプロイが失敗した。デプロイイベント（PR上のデプロイ状態更新など）の反映も遅延した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 388,
   "title": "ES-2281237",
   "url": "https://status.databricks.com/pages/incident/5cf02dde58a00904bda41926/6accd920d492610581e1c8c1",
   "provider": "Databricks",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 12:30:00",
   "datetimeEnd": "2026-10-12 16:30:00",
   "tz": "UTC",
   "duration": "4時間",
   "durationMinutes": 240,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "ES-2281237",
   "rootCause": "AWS US West 2のServerless Computeがコンテナイメージを取得できず起動に失敗し、ジョブ、Lakeflow、SQL warehouse、AI/BIダッシュボードとGenieに影響した。クラシックコンピュートは影響を受けなかった。",
   "extraUrl": "https://status.databricks.com/pages/incident/5cf02dde58a00904bda41926/6accd920d492610581e1c8c1",
   "archived": false
  },
  {
   "id": 389,
   "title": "Microsoft 365 outage on 2026-10-12 | UptimeRobot",
   "url": "https://uptimerobot.com/is-it-down/microsoft-365/2026-10-12/",
   "provider": "Microsoft 365",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 07:00:00",
   "datetimeEnd": "2026-10-12 10:42:00",
   "tz": "UTC",
   "duration": "3時間42分",
   "durationMinutes": 222,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Microsoft 365: Azure Rights Management encrypt/decrypt failures",
   "rootCause": "Azure Rights Managementの処理コンポーネントが異常状態となり、保護ファイル・メールの暗号化と復号が失敗した。Purview、Power BI、SharePoint Online、Microsoft 365 Copilot Chatの一部に影響した。コンポーネントを再起動し、影響を受けた基盤からトラフィックを迂回して回復した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 390,
   "title": "Microsoft 365 outage on 2026-10-12 | UptimeRobot",
   "url": "https://uptimerobot.com/is-it-down/microsoft-365/2026-10-12/",
   "provider": "Microsoft 365",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 08:15:00",
   "datetimeEnd": "2026-10-12 13:04:00",
   "tz": "UTC",
   "duration": "4時間49分",
   "durationMinutes": 289,
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Microsoft 365: Exchange admin center inaccessible",
   "rootCause": "Exchange管理センターがInternal Server Errorで開けなくなった。原因は直近のEAC設定変更で、予期しないHTTP 302リダイレクトが発生した。設定変更をロールバックして回復した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 391,
   "title": "Cloudflare Network Performance Issues",
   "url": "https://www.cloudflarestatus.com/incidents/ja8aolszxtrg",
   "provider": "Cloudflare",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 16:22:00",
   "datetimeEnd": "2026-10-12 23:49:00",
   "tz": "UTC",
   "duration": "7時間27分",
   "durationMinutes": 447,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Cloudflare Network Performance Issues",
   "rootCause": "一部データセンターで間欠的な性能問題が発生し、Cloudflare経由のサイトでエラーや遅延が出た。原因は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 392,
   "title": "Cloudflare Workers - Cron Trigger Activation Issues",
   "url": "https://www.cloudflarestatus.com/incidents/mbv1dfp471bh",
   "provider": "Cloudflare",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 19:09:00",
   "datetimeEnd": "2026-10-12 22:20:00",
   "tz": "UTC",
   "duration": "3時間11分",
   "durationMinutes": 191,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Cloudflare Workers - Cron Trigger Activation Issues",
   "rootCause": "最近作成または変更したWorkers Cron Triggerのスケジュールが期待どおり実行されない状態になった。未変更の既存スケジュールは影響を受けなかった。修正を適用して回復した。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 393,
   "title": "Elevated errors in Los Angeles (LAX)",
   "url": "https://www.cloudflarestatus.com/incidents/vyy1a1dspusg",
   "provider": "Cloudflare",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 08:52:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Elevated errors in Los Angeles (LAX)",
   "rootCause": "Los Angeles (LAX) コロへの到達でエラーが増加した。原因は公表されておらず、報告時点では対応が継続している。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 394,
   "title": "【復旧】全国でインターネット接続がご利用できない /ご利用しづらい状況...",
   "url": "https://information.myjcom.jp/outage/55529.html",
   "provider": "J:COM",
   "date": "2026-10-12",
   "year": 2026,
   "datetimeBegin": "2026-10-12 11:15:00",
   "datetimeEnd": "2026-10-12 17:19:00",
   "tz": "JST",
   "duration": "6時間4分",
   "durationMinutes": 364,
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "【復旧】全国でインターネット接続がご利用できない /ご利用しづらい状況について",
   "rootCause": "J:COM NET 光の設備不良により、マンションタイプの一部加入者で全国的にインターネット接続が利用できない、またはしづらい状態になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 395,
   "title": "Yandex confirms service outage as users lose access to cloud files",
   "url": "https://www.bleepingcomputer.com/news/security/yandex-confirms-service-outage-as-users-lose-access-to-cloud-files/",
   "provider": "Yandex",
   "date": "2026-10-08",
   "year": 2026,
   "datetimeBegin": "2026-10-08",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Yandex confirms service outage as users lose access to cloud files",
   "rootCause": "ドローン攻撃でSasovo（10月8日）、Kaluga（10月9日）、Vladimir（10月11日）の3データセンターが被害を受け、SasovoとVladimirは全停止、Kalugaは部分停止となった。利用者がクラウド上のファイルにアクセスできない障害が報告され、Compute・AI Studio・セキュリティは部分稼働、復旧時期は示されていない。",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 396,
   "title": "Cloudflare Service Issues",
   "url": "https://www.cloudflarestatus.com/incidents/z7vongh8rqc1",
   "provider": "Cloudflare",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 16:39:00",
   "datetimeEnd": "2026-10-13 17:07:00",
   "tz": "UTC",
   "duration": "28分",
   "durationMinutes": 28,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Cloudflare Service Issues",
   "rootCause": "IAD（アッシュバーン）でネットワーク性能問題が発生し、Cloudflareサービス全体でエラーやタイムアウトが増加した。影響度はmajor。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 397,
   "title": "Network Performance Issues in LAX",
   "url": "https://www.cloudflarestatus.com/incidents/fdgz8zlmfhw6",
   "provider": "Cloudflare",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 20:37:00",
   "datetimeEnd": "2026-10-13 22:44:00",
   "tz": "UTC",
   "duration": "2時間7分",
   "durationMinutes": 127,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Network Performance Issues in LAX",
   "rootCause": "Los Angeles（LAX）でネットワーク性能問題が発生した。影響度はminor。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 398,
   "title": "Cloudflare Workers - Cron Trigger Activation Issues",
   "url": "https://www.cloudflarestatus.com/incidents/cbvocc87nsne",
   "provider": "Cloudflare",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 15:18:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Cloudflare Workers - Cron Trigger Activation Issues",
   "rootCause": "最近作成または変更したWorkers Cron Triggerのスケジュールが期待どおり実行されない状態になった。未変更の既存スケジュールは影響を受けなかった。修正の適用後も監視中で、報告時点では未解決。終了時刻は未公表。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 399,
   "title": "MO1505952: Users may be unable to access multiple Microsoft 365 services using Global Secure Access (GSA) | Microsoft 365 service health | 365Fanatic",
   "url": "https://www.365fanatic.com/m365-status/MO1505952/",
   "provider": "Microsoft 365",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 07:40:00",
   "datetimeEnd": "2026-10-13 18:31:00",
   "tz": "UTC",
   "duration": "10時間51分",
   "durationMinutes": 651,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Microsoft 365: Users may be unable to access multiple services using GSA (MO1505952)",
   "rootCause": "Global Secure Access（GSA）基盤の一部が性能閾値を下回り、ドイツの一部利用者でOutlook、Outlook on the web、OneDrive、SharePoint Online、Microsoft Teams、Windows 365 Cloud PCへの接続ができなくなった。トラフィックを健全な基盤へ迂回し、影響を受けた基盤を再起動して復旧した。",
   "extraUrl": "https://status.cloud.microsoft/m365/referrer=serviceStatus",
   "archived": false
  },
  {
   "id": 400,
   "title": "Degraded performance in GPT-6.1 Sol Codex and Work mode - OpenAI Status",
   "url": "https://status.openai.com/incidents/01M4T4ZCM54D3ZPTQXRSWFG0XS",
   "provider": "OpenAI",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 08:18:00",
   "datetimeEnd": "2026-10-13 16:36:00",
   "tz": "UTC",
   "duration": "8時間18分",
   "durationMinutes": 498,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Degraded performance in GPT-6.1 Sol Codex and Work mode",
   "rootCause": "GPT-6.1 SolでCodex（Web / API / VS Code）とChatGPT Workの性能が低下した。緩和策を適用し、監視の後に復旧した。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 401,
   "title": "2026年10月13日通信サービスご利用不可発生のご報告（復旧） | BroadLine 障害情報 | TOKAIコミュニケーションズ",
   "url": "https://www.broadline.ne.jp/support/20261013-100358.html",
   "provider": "TOKAI BroadLine",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 08:53:00",
   "datetimeEnd": "2026-10-13 09:17:00",
   "tz": "JST",
   "duration": "24分",
   "durationMinutes": 24,
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "2026年10月13日通信サービスご利用不可発生のご報告（復旧）",
   "rootCause": "特定顧客の一時的なトラフィック急増により閾値を超過し、リレーションEthernetおよびそれをアクセス回線とするクラウド接続（AWS、Azure、GCP、Oracle Cloud、IBM Cloud、IDCFクラウド）、Ethernetインターネット、トランジットサービスが一時的に利用不可になった。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 402,
   "title": "【重要】（復旧済み）日本株・ETF全銘柄の取引停止について | お知らせ | PayPay証券",
   "url": "https://www.paypay-sec.co.jp/notice/20261013_1.html",
   "provider": "PayPay証券",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 10:15:00",
   "datetimeEnd": "2026-10-14 09:00:00",
   "tz": "JST",
   "duration": "22時間45分",
   "durationMinutes": 1365,
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "【重要】（復旧済み）日本株・ETF全銘柄の取引停止について",
   "rootCause": "外部接続先であるみずほ証券株式会社の日本株取引に関する受発注システムに障害が発生し、日本株・ETF全銘柄の取引が停止した。サイバー攻撃や不正アクセスによるものではない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 403,
   "title": "Degraded performance in Codex and ChatGPT Work - OpenAI Status",
   "url": "https://status.openai.com/incidents/01M4WKPE1EY48ZB4RZJ80YH7ES",
   "provider": "OpenAI",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 07:05:00",
   "datetimeEnd": "2026-10-14 09:53:00",
   "tz": "UTC",
   "duration": "2時間48分",
   "durationMinutes": 168,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Degraded performance in Codex and ChatGPT Work",
   "rootCause": "Codex（ChatGPT Desktop）とChatGPT Workでエラーが増加し、性能が低下した。緩和策を適用し、監視の後に復旧した。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 404,
   "title": "Limited availability on gpt-image-2.5-flare and gpt-image-2.5-sunburst - OpenAI Status",
   "url": "https://status.openai.com/incidents/01M4WYPP5QA0CJ3JV76KH285K8",
   "provider": "OpenAI",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 10:18:00",
   "datetimeEnd": "2026-10-14 10:58:00",
   "tz": "UTC",
   "duration": "40分",
   "durationMinutes": 40,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Limited availability on gpt-image-2.5-flare and gpt-image-2.5-sunburst",
   "rootCause": "Images APIのgpt-image-2.5-flareおよびgpt-image-2.5-sunburstで利用制限が発生した。緩和策を適用し、監視の後に復旧した。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 405,
   "title": "Cloudflare Workers - Cron Trigger Activation Issues",
   "url": "https://www.cloudflarestatus.com/incidents/npjny9agana8",
   "provider": "Cloudflare",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 05:36:00",
   "datetimeEnd": "2026-10-15 01:29:00",
   "tz": "UTC",
   "duration": "19時間53分",
   "durationMinutes": 1193,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Cloudflare Workers - Cron Trigger Activation Issues",
   "rootCause": "最近作成または変更したWorkers Cron Triggerのスケジュールが期待どおり実行されない状態になった。未変更の既存スケジュールは影響を受けなかった。修正適用後にバックログが解消し復旧した。一部の影響を受けたWorkerではスケジュールの再デプロイが必要な場合がある。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 406,
   "title": "Elevated number of 5XX errors in PDX",
   "url": "https://www.cloudflarestatus.com/incidents/7hicc5bfkvx3",
   "provider": "Cloudflare",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 04:40:00",
   "datetimeEnd": "2026-10-14 06:45:00",
   "tz": "UTC",
   "duration": "2時間5分",
   "durationMinutes": 125,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Elevated number of 5XX errors in PDX",
   "rootCause": "Portland（PDX）で5XXエラーが増加した。修正を適用して監視し、再発防止の緩和策を入れて復旧した。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 407,
   "title": "Issues with login and viewing packages",
   "url": "https://status.npmjs.org/incidents/nwrj52br2kjv",
   "provider": "npm",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 09:29:00",
   "datetimeEnd": "2026-10-14 11:44:00",
   "tz": "UTC",
   "duration": "2時間15分",
   "durationMinutes": 135,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Issues with login and viewing packages",
   "rootCause": "www.npmjs.comのログインとパッケージ閲覧でエラーと遅延が増加し、パッケージ設定へのアクセスでもエラーが増加した。修正を適用して復旧した。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 408,
   "title": "Unable to Access dbt Platform - dbt Cloud Status",
   "url": "https://status.getdbt.com/incidents/01M4VP33REQMCYNC5K4W21C1C6",
   "provider": "dbt Labs",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 22:28:00",
   "datetimeEnd": "2026-10-14 04:33:00",
   "tz": "UTC",
   "duration": "6時間5分",
   "durationMinutes": 365,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Unable to Access dbt Platform",
   "rootCause": "dbt PlatformのWebアプリケーションが読み込めず、ログインとアクセス、Admin APIが利用できない状態になった。修正をデプロイし、WebアプリとAdmin APIは通常稼働に戻った。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 409,
   "title": "Docs.redhat.com - Outage Investigating",
   "url": "https://status.redhat.com/incidents/prt11ynk3lpq",
   "provider": "Red Hat",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 06:02:00",
   "datetimeEnd": "2026-10-14 13:04:00",
   "tz": "UTC",
   "duration": "7時間2分",
   "durationMinutes": 422,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Docs.redhat.com - Outage Investigating",
   "rootCause": "docs.redhat.comで間欠的な性能問題が発生し、ページの読み込み遅延、タイムアウト、表示失敗が起きた。本番環境が安定したことを確認して復旧した。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 410,
   "title": "Ingestion Halted for EAP data in EU",
   "url": "https://status.sentry.io/incidents/600twx50v7vg",
   "provider": "Sentry",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 05:46:00",
   "datetimeEnd": "2026-10-14 08:20:00",
   "tz": "UTC",
   "duration": "2時間34分",
   "durationMinutes": 154,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Ingestion Halted for EAP data in EU",
   "rootCause": "EUリージョンのEAPデータ取り込みが停止した。修正を適用し、取り込み遅延の解消を待って復旧した。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 411,
   "title": "Authentication errors in prod-us-west-0",
   "url": "https://status.grafana.com/incidents/wxxw35jkm52b",
   "provider": "Grafana",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 12:57:00",
   "datetimeEnd": "2026-10-14 15:45:00",
   "tz": "UTC",
   "duration": "2時間48分",
   "durationMinutes": 168,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Authentication errors in prod-us-west-0",
   "rootCause": "Grafana Cloudのprod-us-west-0で認証エラーが増加した。認証サービスに影響するデータベースの性能低下が確認され、緩和策の後に恒久対応としてDBパッチを適用して復旧した。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 412,
   "title": "【重要】使えるプライベートクラウド 問題発生のご連絡 - 使えるねっと",
   "url": "https://www.tsukaeru.net/server-maintenance/20261014/",
   "provider": "使えるねっと",
   "date": "2026-10-14",
   "year": 2026,
   "datetimeBegin": "2026-10-14 21:54:00",
   "datetimeEnd": "2026-10-15 01:25:00",
   "tz": "JST",
   "duration": "3時間31分",
   "durationMinutes": 211,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "【重要】使えるプライベートクラウド 問題発生のご連絡",
   "rootCause": "一部ノードが再起動し、当該ノード上の仮想マシンも再起動したため、一時的にサービスへアクセスできない状態になった。ノードおよび仮想マシンの起動完了を確認して復旧した。ノード再起動の原因は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 413,
   "title": "【復旧】一部の工事・故障情報メールの配信に時間がかかる事象について | NTTドコモビジネス お客さまサポート",
   "url": "https://support.ntt.com/supportTopInfo/detail/pid2500002hdg/",
   "provider": "NTTドコモビジネス",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 12:00:00",
   "datetimeEnd": "2026-10-14 20:10:00",
   "tz": "JST",
   "duration": "32時間10分",
   "durationMinutes": 1930,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "【復旧】一部の工事・故障情報メールの配信に時間がかかる事象について",
   "rootCause": "お客さまサポートサイトの工事・故障情報通知サービスで、一部のメール配信に遅延が発生した。サポートサイト上の工事・故障情報の閲覧は通常どおり利用できた。原因の詳細は公表されていない。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 414,
   "title": "当社サービスの一部システムに対する不正アクセスについて | IDCフロンティア",
   "url": "https://www.idcf.jp/news/topics/20261007001",
   "provider": "IDCFクラウド",
   "date": "2026-10-07",
   "year": 2026,
   "datetimeBegin": "2026-10-07 03:40:00",
   "datetimeEnd": "",
   "tz": "JST",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "External failure",
    "Security"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "当社サービスの一部システムに対する不正アクセスについて",
   "rootCause": "IDCFクラウド東日本リージョン1の一部（tesla／henry／pascal／jouleゾーン）に対する第三者からのランサムウェア攻撃により、仮想サーバーの停止と再起動不可が発生した。二次被害防止のため当該リージョンをネットワークから遮断し、調査と対応が継続している。報告時点では未解決。",
   "extraUrl": "https://www.idcf.jp/news/topics/20261014001",
   "archived": false
  },
  {
   "id": 415,
   "title": "Network Performance Issues in Eastern North America",
   "url": "https://www.cloudflarestatus.com/incidents/fiv2bu3zf8kx",
   "provider": "Cloudflare",
   "date": "2026-10-15",
   "year": 2026,
   "datetimeBegin": "2026-10-15 20:48:00",
   "datetimeEnd": "2026-10-15 21:38:00",
   "tz": "UTC",
   "duration": "0時間50分",
   "durationMinutes": 50,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Network Performance Issues in Eastern North America",
   "rootCause": "公式は原因詳細未公表。Ashburn（IAD）およびNewark（EWR）施設でのネットワーク性能問題。顧客影響はレイテンシ上昇・エラー。約50分で復旧。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 416,
   "title": "Network Performance Issues in London",
   "url": "https://www.cloudflarestatus.com/incidents/ybyy2whvd8ef",
   "provider": "Cloudflare",
   "date": "2026-10-15",
   "year": 2026,
   "datetimeBegin": "2026-10-15 17:33:00",
   "datetimeEnd": "2026-10-15 17:46:00",
   "tz": "UTC",
   "duration": "0時間13分",
   "durationMinutes": 13,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Network Performance Issues in London",
   "rootCause": "公式は原因詳細未公表。ロンドン（LHR）施設のネットワーク性能問題。Durable Objects、R2、RealtimeKitが影響を受けた。約13分で復旧。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 417,
   "title": "DeepSeek 网页/API 部分中断（DeepSeek Web/API Partially Unavailable） · DeepSeek Status",
   "url": "https://status.deepseek.com/incidents/7116348214287",
   "provider": "DeepSeek",
   "date": "2026-10-15",
   "year": 2026,
   "datetimeBegin": "2026-10-15 00:11:00",
   "datetimeEnd": "2026-10-15 05:04:00",
   "tz": "UTC",
   "duration": "4時間52分",
   "durationMinutes": 292,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "DeepSeek Web/API Partially Unavailable",
   "rootCause": "公式ステータスは原因の詳細を公開していない。「原因を特定し修正を実施」と記載。ウェブチャットとAPI（報道ではV4 Pro、V4.1 Flash）が一時利用不可。公式開放プラットフォームは影響を受けたAPI利用者へ補償（7日分の消耗金額を贈金で返還）を発表したとの報道がある。",
   "extraUrl": "https://technode.com/2026/10/15/deepseek-implements-fix-after-partial-outage-affects-chat-and-api-services/",
   "archived": false
  },
  {
   "id": 418,
   "title": "Widespread feature degradation - OpenAI Status",
   "url": "https://status.openai.com/incidents/01M506BA4XRSWH7THR53HQGN3Z",
   "provider": "OpenAI",
   "date": "2026-10-15",
   "year": 2026,
   "datetimeBegin": "2026-10-15 16:29:00",
   "datetimeEnd": "2026-10-15 18:56:00",
   "tz": "UTC",
   "duration": "2時間27分",
   "durationMinutes": 147,
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Widespread feature degradation",
   "rootCause": "ChatGPTモバイルのログイン/サインアップを含む広範な機能劣化。緩和策適用後に復旧。公式の根本原因は未公表。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 419,
   "title": "Nasdaq resolves network disruption that caused data gaps, source says | MarketScreener",
   "url": "https://www.marketscreener.com/news/nasdaq-reports-network-disruption-us-equities-data-feeds-impacted-ce785dd3de8df72d",
   "provider": "Nasdaq",
   "date": "2026-10-15",
   "year": 2026,
   "datetimeBegin": "2026-10-15 15:27:50",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "attack"
   ],
   "summary": "Nasdaq reports network disruption; US equities data feeds impacted",
   "rootCause": "Carteret（ニュージャージー）施設のネットワーク障害により、Nasdaq・Nasdaq Texas・Nasdaq PSXの米株データフィード（A/B両系）に断続的欠落。取引自体への影響なし。シカゴ側バックアップフィードへ切替案内。関係者はルーチンなネットワーク問題と説明。公式ステータスページのインシデントIDは確認できず、終了時刻は未公表。",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 420,
   "title": "Tableau Feature Degradation (Load a View) | Salesforce Trust Status",
   "url": "https://status.salesforce.com/incidents/20004486",
   "provider": "Salesforce",
   "date": "2026-10-13",
   "year": 2026,
   "datetimeBegin": "2026-10-13 18:36:00",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "durationMinutes": null,
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Tableau Feature Degradation (Load a View)",
   "rootCause": "Tableau Cloudの「ビューの読み込み」（Load a View）等で機能劣化。ダッシュボードやワークブックが読み込めない、「Loading data sources」で停止、または開くのに時間がかかる。影響範囲が当初より広いと更新。公式は最近の変更に起因し、データソース読み込み中にプロセスがデッドロックする可能性を指摘。修正は検証済みで本番展開中、関連機能の無効化緩和が継続。復旧ETAなし。報告時点では未解決。",
   "extraUrl": "",
   "archived": false
  }
 ]
};
