window.FAILURE_REPORTS = {
 "generatedAt": "2026-10-12T09:56:48+00:00",
 "triggerLabels": {
  "Application bugs": "アプリケーションのバグ",
  "Hardware fault": "ハードウェア障害",
  "Infrastructure failure": "インフラ障害",
  "Job Failure": "ジョブの失敗",
  "Maintainance": "メンテナンス",
  "Misconfiguration": "設定ミス",
  "Request increase": "リクエスト増加",
  "External failure": "外部要因",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "failover-gap"
   ],
   "summary": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "resource-exhaustion"
   ],
   "summary": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "",
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
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
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
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion",
    "operational-error"
   ],
   "summary": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
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
   "tz": "-",
   "duration": "-",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
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
   "tz": "-",
   "duration": "-",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
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
   "tz": "-",
   "duration": "-",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
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
   "tz": "-",
   "duration": "-",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
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
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 38,
   "title": "Tarsnap outage 2017-02-28 17:37 -- 2017-02-28 ~21:52",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00038.html",
   "provider": "Tarsnap",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 39,
   "title": "Tarsnap partial outage, 2021-12-07 18:00-19:50 UTC",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00045.html",
   "provider": "Tarsnap",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 40,
   "title": "Tarsnap outage 2023-07-02",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00048.html",
   "provider": "Tarsnap",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 41,
   "title": "2023-07-02 -- 2023-07-03 Tarsnap outage post-mortem",
   "url": "https://mail.tarsnap.com/tarsnap-announce/msg00050.html",
   "provider": "Tarsnap",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 42,
   "title": "A deep dive into Cloudflare’s September 12, 2025 dashboard and API outage",
   "url": "https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "resource-exhaustion"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 43,
   "title": "NTT西日本による通信障害の原因が判明、VLAN IDの設定ミスでループ発生",
   "url": "https://xtech.nikkei.com/atcl/nxt/column/18/00001/11102/",
   "provider": "NTT西日本",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "operational-error"
   ],
   "summary": "",
   "rootCause": "",
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
   "tz": "",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 45,
   "title": "IBMクラウド障害の引き金となった「誤ったルート広告」、他社で起こる可能性も",
   "url": "https://xtech.nikkei.com/atcl/nxt/column/18/00989/070800030/",
   "provider": "IBM Cloud",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "",
   "rootCause": "2020年6月10日 午前6時55分頃、外部のネットワークプロバイダーが誤ったルート広告（ルーター間での経路情報の通知）を行ったため、インターネットのトラフィックに深刻な影響が発生しました。これにより、IBM Cloudのインターネット・ネットワークに障害が発生しました。これは、東京リージョンのデータセンターだけではなくIBM Cloudの複数のデータセンターに以下のような影響を及ぼしました。",
   "extraUrl": "https://xtech.nikkei.com/atcl/nxt/column/18/00989/070800030/",
   "archived": false
  },
  {
   "id": 46,
   "title": "More details about the October 4 outage",
   "url": "https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/",
   "provider": "Meta",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 47,
   "title": "平成 29 年 8 月に発生した大規模なインターネット接続障害に関する検証報告",
   "url": "https://www.soumu.go.jp/main_content/000523153.pdf#page=2.35",
   "provider": "Google",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "network-fault"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "https://www.geekpage.jp/blog/?id=2017-8-29-1",
   "archived": false
  },
  {
   "id": 48,
   "title": "Google Cloud Status Dashboard",
   "url": "https://status.cloud.google.com/incident/cloud-networking/19005",
   "provider": "Google",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 49,
   "title": "アマゾンのクラウドが落雷で一部停止、そのとき何が起きたか？",
   "url": "https://www.publickey1.jp/blog/09/post_26.html",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "https://www.publickey1.jp/blog/09/post_26.html",
   "archived": false
  },
  {
   "id": 50,
   "title": "米国東部（バージニア北部、US-EAST-1）リージョンにおける Amazon DynamoDB サービス中断の概要",
   "url": "https://aws.amazon.com/jp/message/101925/",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "network-fault"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 51,
   "title": "Azure outage: Microsoft still working on fix, says recovery expected in several hours",
   "url": "https://www.cnbc.com/2025/10/29/microsoft-hit-with-azure-365-outage-ahead-of-quarterly-earnings.html",
   "provider": "Azure",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "https://www.cnbc.com/2025/10/29/microsoft-hit-with-azure-365-outage-ahead-of-quarterly-earnings.html",
   "archived": false
  },
  {
   "id": 52,
   "title": "More Details on Today’s Outage",
   "url": "https://engineering.fb.com/2010/09/23/uncategorized/more-details-on-today-s-outage/",
   "provider": "Facebook",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "resource-exhaustion"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 53,
   "title": "How a Production Outage Was Caused Using Kubernetes Pod Priorities | Grafana Labs",
   "url": "https://grafana.com/blog/2019/07/24/how-a-production-outage-was-caused-using-kubernetes-pod-priorities/",
   "provider": "Grafana",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "resource-exhaustion"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 54,
   "title": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "url": "https://aws.amazon.com/message/65648/",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "failover-gap"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 55,
   "title": "A postmortem of three recent issues",
   "url": "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
   "provider": "Anthropic",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 56,
   "title": "Incident Management at Spotify | Spotify Engineering",
   "url": "https://labs.spotify.com/2013/06/04/incident-management-at-spotify",
   "provider": "Spotify",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 57,
   "title": "Kafkapocalypse: a postmortem on our service outage | Parse.ly",
   "url": "http://blog.parsely.com/post/1738/kafkapocalypse/",
   "provider": "Parsely",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "",
   "rootCause": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 59,
   "title": "BBC Online outage on Saturday 19th July 2014",
   "url": "https://www.bbc.co.uk/webarchive/https%3A%2F%2Fwww.bbc.co.uk%2Fblogs%2Finternet%2Fentries%2Fa37b0470-47d4-3991-82bb-a7d5b8803771",
   "provider": "BBC",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "",
   "duration": "",
   "triggers": [
    "Infrastructure failure",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 61,
   "title": "What really happened on Mars? -- Authoritative Account",
   "url": "https://web.archive.org/web/20161230103247/https://research.microsoft.com/en-us/um/people/mbj/Mars_Pathfinder/Authoritative_Account.html",
   "provider": "Archive",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "What really happened on Mars? -- Authoritative Account",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "software-defect"
   ],
   "summary": "Cloudflare incident on October 30, 2023",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Sleeping beauty - How one of the oldest bugs in EVE got hunted down and resolved | EVE Online",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 65,
   "title": "April 2022 Incident Review",
   "url": "https://heroku.com/blog/april-2022-incident-review",
   "provider": "Heroku",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "April 2022 Incident Review",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 66,
   "title": "GitHub Availability Report: July 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2020/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: July 2020",
   "rootCause": "",
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
   "triggers": [
    "Other"
   ],
   "triggerNote": "本文を取得できず、引き金を特定できない",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Salesforce Help",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 68,
   "title": "GitHub Availability Report: September 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "GitHub Availability Report: September 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 69,
   "title": "Azure の状態の履歴 | Microsoft Azure",
   "url": "https://azure.status.microsoft/ja-jp/status/history/",
   "provider": "Azure",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "複数のインシデントをまとめた履歴ページ",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Azure の状態の履歴 | Microsoft Azure",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 70,
   "title": "Retrospective and Technical Details on the recent Firefox Outage – Mozilla Hacks - the Web developer blog",
   "url": "https://hacks.mozilla.org/2022/02/retrospective-and-technical-details-on-the-recent-firefox-outage",
   "provider": "Hacks",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Retrospective and Technical Details on the recent Firefox Outage – Mozilla Hacks - the Web developer blog",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 71,
   "title": "GitHub Availability Report: October 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry",
    "config-error"
   ],
   "summary": "GitHub Availability Report: October 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 72,
   "title": "GitHub Availability Report: May 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: May 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 73,
   "title": "Engineering Archives",
   "url": "https://heroku.com/blog/category/engineering",
   "provider": "Heroku",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Engineering Archives",
   "rootCause": "",
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
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Postmortem: March 26 - April 10 Workflow Delay Incidents",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 75,
   "title": "GitHub Availability Report: August 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: August 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 76,
   "title": "Postmortem of database outage of January 31",
   "url": "https://about.gitlab.com/2017/02/10/postmortem-of-database-outage-of-january-31",
   "provider": "GitLab",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Postmortem of database outage of January 31",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 77,
   "title": "GitHub Availability Report: November 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub Availability Report: November 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 78,
   "title": "Denial of Service Attacks",
   "url": "https://github.blog/news-insights/the-library/denial-of-service-attacks",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Denial of Service Attacks",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 79,
   "title": "Add-Ons Outage Post-Mortem Result – Mozilla Hacks - the Web developer blog",
   "url": "https://hacks.mozilla.org/2019/07/add-ons-outage-post-mortem-result",
   "provider": "Hacks",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "Add-Ons Outage Post-Mortem Result – Mozilla Hacks - the Web developer blog",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 80,
   "title": "Addressing GitHub’s recent availability issues",
   "url": "https://github.blog/news-insights/company-news/addressing-githubs-recent-availability-issues-2/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Addressing GitHub’s recent availability issues",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 81,
   "title": "2013–09–17 Outage Postmortem",
   "url": "https://medium.com/xandr-tech/2013-09-17-outage-postmortem-586b19ae4307",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "software-defect"
   ],
   "summary": "2013–09–17 Outage Postmortem",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Incident report on memory leak caused by Cloudflare parser bug",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 83,
   "title": "Reddit - The heart of the internet",
   "url": "https://www.reddit.com/r/RedditEng/comments/11xx5o0/you_broke_reddit_the_piday_outage/",
   "provider": "Reddit",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
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
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Falcon Content Update Remediation and Guidance Hub | CrowdStrike",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 86,
   "title": "Cloudflare outage on December 5, 2025",
   "url": "https://blog.cloudflare.com/5-december-2025-outage/",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Cloudflare outage on December 5, 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 87,
   "title": "Cloudflare outage on November 18, 2025",
   "url": "https://blog.cloudflare.com/18-november-2025-outage/",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare outage on November 18, 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 88,
   "title": "Linux build queue backing up",
   "url": "https://status.circleci.com/incidents/8rklh3qqckp1",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Linux build queue backing up",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "Today's Network Issue",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 90,
   "title": "米国東部（バージニア北部、US-EAST-1）リージョンで発生した Amazon S3 サービス障害について",
   "url": "https://aws.amazon.com/jp/message/41926/",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "config-error"
   ],
   "summary": "米国東部（バージニア北部、US-EAST-1）リージョンで発生した Amazon S3 サービス障害について",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 91,
   "title": "Battling database performance | Blog | incident.io",
   "url": "https://incident.io/blog/database-performance",
   "provider": "Incident.io",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Battling database performance | Blog | incident.io",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 92,
   "title": "GitHub Availability Report: July 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: July 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 93,
   "title": "GitHub Availability Report: August 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: August 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 94,
   "title": "Summary of the December 17th event in the South America Region (SA-EAST-1)",
   "url": "https://aws.amazon.com/message/656481",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "upstream-failure"
   ],
   "summary": "Summary of the December 17th event in the South America Region (SA-EAST-1)",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "failover-gap"
   ],
   "summary": "The Day of the RDS Multi-AZ Failover - Razorpay Tech",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 97,
   "title": "GitHub Availability Report: April 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: April 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 99,
   "title": "GitHub availability report: May 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2026/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "GitHub availability report: May 2026",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 100,
   "title": "Slack’s Outage on January 4th 2021",
   "url": "https://slack.engineering/slacks-outage-on-january-4th-2021/",
   "provider": "Slack",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Slack’s Outage on January 4th 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 101,
   "title": "Azure Front Door: Implementing lessons learned following October outages | Microsoft Community Hub",
   "url": "https://techcommunity.microsoft.com/blog/azurenetworkingblog/azure-front-door-implementing-lessons-learned-following-october-outages/4479416",
   "provider": "Microsoft",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Azure Front Door: Implementing lessons learned following October outages | Microsoft Community Hub",
   "rootCause": "",
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
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Today's Outage Post Mortem",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 104,
   "title": "Cloudflare’s investigation of the January 2022 Okta compromise",
   "url": "https://blog.cloudflare.com/cloudflare-investigation-of-the-january-2022-okta-compromise",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Cloudflare’s investigation of the January 2022 Okta compromise",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 105,
   "title": "DNS issues in Kubernetes. Public postmortem #1",
   "url": "https://medium.com/preply-engineering/dns-postmortem-e169efd45afd",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "DNS issues in Kubernetes. Public postmortem #1",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 106,
   "title": "Summary of Windows Azure Service Disruption on Feb 29th, 2012 | Microsoft Azure Blog",
   "url": "https://azure.microsoft.com/en-us/blog/summary-of-windows-azure-service-disruption-on-feb-29th-2012",
   "provider": "Azure",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of Windows Azure Service Disruption on Feb 29th, 2012 | Microsoft Azure Blog",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 107,
   "title": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "url": "https://aws.amazon.com/jp/message/65648/",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 108,
   "title": "Summary of the December 24, 2012 Amazon ELB Service Event in the US-East Region",
   "url": "https://aws.amazon.com/message/680587",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 109,
   "title": "GitHub Availability Report: July 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: July 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 110,
   "title": "Intermittent downtime from repeated crashes | Blog | incident.io",
   "url": "https://incident.io/blog/intermittent-downtime",
   "provider": "Incident.io",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Intermittent downtime from repeated crashes | Blog | incident.io",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 111,
   "title": "Postmortem: May 21, 2021 - Delay in starting Docker Jobs. Machine & remote Docker environments blocked",
   "url": "https://discuss.circleci.com/t/postmortem-may-21-2021-delay-in-starting-docker-jobs-machine-remote-docker-environments-blocked/40274",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Postmortem: May 21, 2021 - Delay in starting Docker Jobs. Machine & remote Docker environments blocked",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 112,
   "title": "GitHub Availability Report: August 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2020/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: August 2020",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 113,
   "title": "1.1.1.1 lookup failures on October 4, 2023",
   "url": "https://blog.cloudflare.com/1-1-1-1-lookup-failures-on-october-4th-2023",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "1.1.1.1 lookup failures on October 4, 2023",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "How a Production Outage Was Caused Using Kubernetes Pod Priorities | Grafana Labs",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 115,
   "title": "GitHub Availability Report: April 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: April 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 116,
   "title": "All Circuits are Busy Now: The 1990 AT&T Long Distance Network Collapse",
   "url": "http://users.csc.calpoly.edu/~jdalbey/SWE/Papers/att_collapse.html",
   "provider": "Users",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "All Circuits are Busy Now: The 1990 AT&T Long Distance Network Collapse",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 117,
   "title": "Human Error Caused OWASA Fluoride Overdose, OWASA Very Sorry About That",
   "url": "https://indyweek.com/news/archives/human-error-caused-owasa-fluoride-overdose-owasa-sorry",
   "provider": "Indyweek",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Human Error Caused OWASA Fluoride Overdose, OWASA Very Sorry About That",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 118,
   "title": "The August 17 outage, and the work ahead",
   "url": "https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "The August 17 outage, and the work ahead",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 119,
   "title": "Clouds, caches and connection conundrums | Blog | incident.io",
   "url": "https://incident.io/blog/clouds-caches-and-connection-conundrums",
   "provider": "Incident.io",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Clouds, caches and connection conundrums | Blog | incident.io",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 120,
   "title": "Technical post-mortem of the August incident",
   "url": "https://medium.com/@florian_7764/technical-post-mortem-of-the-august-incident-82ab4c3d6547",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Technical post-mortem of the August incident",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 121,
   "title": "CPU limits and aggressive throttling in Kubernetes",
   "url": "https://engineering.omio.com/cpu-limits-and-aggressive-throttling-in-kubernetes-c5b20bd8a718",
   "provider": "Engineering",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "CPU limits and aggressive throttling in Kubernetes",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 122,
   "title": "Accidental repeated emails: sorry! - Google Code Jam",
   "url": "https://gist.github.com/jomo/2bae3821acb433d0446d",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Accidental repeated emails: sorry! - Google Code Jam",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 124,
   "title": "GitHub Availability Report: July 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: July 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 125,
   "title": "Incident Review: Working as Designed, But Still Failing",
   "url": "https://honeycomb.io/blog/incident-review-designed-failing",
   "provider": "Honeycomb",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Incident Review: Working as Designed, But Still Failing",
   "rootCause": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Authentication Latency on DUO1 Deployment",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 127,
   "title": "GitHub availability report: April 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2026/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub availability report: April 2026",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "config-error"
   ],
   "summary": "Post Mortem: What Yesterday's Network Outage Looked Like",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 129,
   "title": "GitHub Availability Report: September 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "GitHub Availability Report: September 2022",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Postmortem of last week's fileserver failure",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 131,
   "title": "GitHub Availability Report: May 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: May 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 132,
   "title": "GitHub Availability Report: October 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub Availability Report: October 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 133,
   "title": "Details Behind Today's Internet Hacks",
   "url": "https://blog.cloudflare.com/details-behind-todays-internet-hacks",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Details Behind Today's Internet Hacks",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 134,
   "title": "GitHub Availability Report: November 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "GitHub Availability Report: November 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 135,
   "title": "GitHub Availability Report: August 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: August 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 136,
   "title": "\"This site may harm your computer\" on every search result?!?!",
   "url": "https://googleblog.blogspot.com/2009/01/this-site-may-harm-your-computer-on.html",
   "provider": "Google",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "\"This site may harm your computer\" on every search result?!?!",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 137,
   "title": "Post Incident Report: April 4, 2025 - CircleCI UI Loading & build triggering issues",
   "url": "https://discuss.circleci.com/t/post-incident-report-april-4-2025-circleci-ui-loading-build-triggering-issues/53208",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Post Incident Report: April 4, 2025 - CircleCI UI Loading & build triggering issues",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Kubernetes made my latency 10x higher",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 139,
   "title": "The Internet is a cooperative system: CNAME to Dyn DNS outage of 6 July 2015",
   "url": "https://blog.cloudflare.com/the-internet-is-a-cooperative-system-dns-outage-of-6-july-2015",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "The Internet is a cooperative system: CNAME to Dyn DNS outage of 6 July 2015",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 140,
   "title": "Today’s outage for several Google services",
   "url": "https://blog.google/company-news/inside-google/company-announcements/todays-outage-for-several-google",
   "provider": "Google",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Today’s outage for several Google services",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 141,
   "title": "[xubuntu-users] Public postmortum of the brief Xubuntu.org torrent download compromise last month",
   "url": "https://lists.ubuntu.com/archives/xubuntu-users/2025-November/012210.html",
   "provider": "Lists",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "[xubuntu-users] Public postmortum of the brief Xubuntu.org torrent download compromise last month",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 142,
   "title": "Adammargherio | Peerless Info About Fire Rated Draft Stopping Vs Standard Insulation Blog",
   "url": "https://adammargherio.com/a-perfect-dns-storm",
   "provider": "Adammargherio",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Adammargherio | Peerless Info About Fire Rated Draft Stopping Vs Standard Insulation Blog",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Postmortem for Malicious Packages Published on July 12th, 2018 - ESLint - Pluggable JavaScript Linter",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 144,
   "title": "Summary of the Amazon DynamoDB Service Disruption in the Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/101925",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the Amazon DynamoDB Service Disruption in the Northern Virginia (US-EAST-1) Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 145,
   "title": "GitHub Availability Report: March 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "GitHub Availability Report: March 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 146,
   "title": "Incident Report: November 8, 2021 - Jobs stuck in a \"not running\" state",
   "url": "https://discuss.circleci.com/t/incident-report-november-8-2021-jobs-stuck-in-a-not-running-state/41890",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Incident Report: November 8, 2021 - Jobs stuck in a \"not running\" state",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 147,
   "title": "January 28th Incident Report",
   "url": "https://github.blog/news-insights/company-news/january-28th-incident-report",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "January 28th Incident Report",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 148,
   "title": "GitHub Availability Report: June 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: June 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 149,
   "title": "GitHub Availability Report: January 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: January 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 150,
   "title": "On Infrastructure at Scale: A Cascading Failure of Distributed Systems",
   "url": "https://danveloper.medium.com/on-infrastructure-at-scale-a-cascading-failure-of-distributed-systems-7cff2a3cd2df",
   "provider": "Danveloper",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "On Infrastructure at Scale: A Cascading Failure of Distributed Systems",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 152,
   "title": "Outage report 7 July 2020 - PythonAnywhere News",
   "url": "https://blog.pythonanywhere.com/189",
   "provider": "Pythonanywhere",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Outage report 7 July 2020 - PythonAnywhere News",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "About the boot.ini issue | EVE Online",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 154,
   "title": "How I Broke `git push heroku main`",
   "url": "https://heroku.com/blog/how-i-broke-git-push-heroku-main",
   "provider": "Heroku",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "How I Broke `git push heroku main`",
   "rootCause": "",
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
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "The shipwreck of GKE Cluster Upgrade",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 157,
   "title": "Details of Google Cloud GCVE incident | Google Cloud Blog",
   "url": "https://cloud.google.com/blog/products/infrastructure/details-of-google-cloud-gcve-incident",
   "provider": "Google Cloud",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "config-error"
   ],
   "summary": "Details of Google Cloud GCVE incident | Google Cloud Blog",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 158,
   "title": "GitHub Availability Report: November 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2021",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: November 2021",
   "rootCause": "",
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
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Zero-downtime Postgres migrations - the hard parts",
   "rootCause": "",
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
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 161,
   "title": "Roblox Return to Service | Roblox",
   "url": "https://about.roblox.com/newsroom/2022/01/roblox-return-to-service-10-28-10-31-2021",
   "provider": "Roblox",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Redirecting...",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Cloudflare outage on February 20, 2026",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "2023-03-08 Incident: Infrastructure connectivity issue affecting multiple regions | Datadog",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 165,
   "title": "kubernetes-on-aws/docs/postmortems/jun-2019-kubelet-qps.md at dev · zalando-incubator/kubernetes-on-aws",
   "url": "https://github.com/zalando-incubator/kubernetes-on-aws/blob/dev/docs/postmortems/jun-2019-kubelet-qps.md",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "kubernetes-on-aws/docs/postmortems/jun-2019-kubelet-qps.md at dev · zalando-incubator/kubernetes-on-aws",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 166,
   "title": "GitHub Availability Report: December 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: December 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 167,
   "title": "Postmortem — why Allegro went down",
   "url": "https://blog.allegro.tech/2018/08/postmortem-why-allegro-went-down.html",
   "provider": "Blog",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Postmortem — why Allegro went down",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 169,
   "title": "Container-based Linux Precise infrastructure emergency maintenance",
   "url": "https://traviscistatus.com/incidents/sxrh0l46czqn",
   "provider": "Travis CI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Container-based Linux Precise infrastructure emergency maintenance",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 170,
   "title": "Instapaper Outage Cause & Recovery",
   "url": "https://medium.com/making-instapaper/instapaper-outage-cause-recovery-3c32a7e9cc5f",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Instapaper Outage Cause & Recovery",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 171,
   "title": "CircleCI Jan 4, 2023 security incident report - CircleCI",
   "url": "https://circleci.com/blog/jan-4-2023-incident-report",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "CircleCI Jan 4, 2023 security incident report - CircleCI",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "RESOLVED: Current account payments may fail - Major Outage (27/10/2017)",
   "rootCause": "",
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
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "upstream-failure"
   ],
   "summary": "Cloudflare service outage June 12, 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 174,
   "title": "GitHub Availability Report: February 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: February 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 175,
   "title": "August 30th 2020: Analysis of CenturyLink/Level(3) outage",
   "url": "https://blog.cloudflare.com/analysis-of-todays-centurylink-level-3-outage",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "August 30th 2020: Analysis of CenturyLink/Level(3) outage",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: March 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 177,
   "title": "Our recent mobile network outage has been resolved: here’s what happened",
   "url": "https://www.telstra.com.au/exchange/some-mobile-calls-and-data-services-are-affected-today--here-s-w",
   "provider": "Telstra",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 178,
   "title": "Slack’s Incident on 2-22-22",
   "url": "https://slack.engineering/slacks-incident-on-2-22-22/",
   "provider": "Slack",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Slack’s Incident on 2-22-22",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 179,
   "title": "Maximize learnings from a Kubernetes cluster failure | TBNL",
   "url": "https://tibobeijen.nl/2019/02/01/learning-from-kubernetes-cluster-failure",
   "provider": "Tibobeijen",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Maximize learnings from a Kubernetes cluster failure | TBNL",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 180,
   "title": "Summary of the AWS Service Event in the Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/12721",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 181,
   "title": "Code Orange: Fail Small is complete. The result is a stronger Cloudflare network",
   "url": "https://blog.cloudflare.com/code-orange-fail-small-complete",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Code Orange: Fail Small is complete. The result is a stronger Cloudflare network",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 182,
   "title": "DNS Outage Post Mortem",
   "url": "https://github.blog/news-insights/the-library/dns-outage-post-mortem",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "software-defect"
   ],
   "summary": "DNS Outage Post Mortem",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 183,
   "title": "Downtime last Saturday",
   "url": "https://github.blog/news-insights/the-library/downtime-last-saturday/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Knightmare: A DevOps Cautionary Tale",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Project:Infrastructure/Incident reports/2018-06-28 Github - Gentoo wiki",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 186,
   "title": "GitHub Availability Report: December 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub Availability Report: December 2022",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "software-defect"
   ],
   "summary": "Hardening Workers KV",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 189,
   "title": "Summary of the AWS Lambda Service Event in Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/061323",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the AWS Lambda Service Event in Northern Virginia (US-EAST-1) Region",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Status",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 191,
   "title": "GitHub availability report: June 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2026/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub availability report: June 2026",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 193,
   "title": "GitHub Availability Report: January 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: January 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 194,
   "title": "Basecamp network attack postmortem",
   "url": "https://signalvnoise.com/posts/3729-basecamp-network-attack-postmortem",
   "provider": "Signalvnoise",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Basecamp network attack postmortem",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "PagerDuty Status Page",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "2020-09-25 Incident: Infrastructure connectivity issue impacting multiple systems | Datadog",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 197,
   "title": "Security Incident Disclosure",
   "url": "https://brew.sh/2018/08/05/security-incident-disclosure",
   "provider": "Homebrew",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Security Incident Disclosure",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 198,
   "title": "Mars Climate Orbiter - Wikipedia",
   "url": "https://en.wikipedia.org/wiki/Mars_Climate_Orbiter",
   "provider": "En",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Mars Climate Orbiter - Wikipedia",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 199,
   "title": "Website Intermittent Timeouts",
   "url": "https://status.mailgun.com/incidents/p9nxxql8g9rh",
   "provider": "Mailgun",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "resource-exhaustion"
   ],
   "summary": "Website Intermittent Timeouts",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 200,
   "title": "Summary of the Amazon EC2 Issues in the Asia Pacific (Tokyo) Region (AP-NORTHEAST-1)",
   "url": "https://aws.amazon.com/message/56489",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "hardware-failure"
   ],
   "summary": "Summary of the Amazon EC2 Issues in the Asia Pacific (Tokyo) Region (AP-NORTHEAST-1)",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 201,
   "title": "How a couple of characters brought down our site",
   "url": "https://medium.com/@SkyscannerEng/how-a-couple-of-characters-brought-down-our-site-356ccaf1fbc3",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "How a couple of characters brought down our site",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 202,
   "title": "GitHub Availability Report: February 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: February 2022",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Redirecting…",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Ariane flight V88 - Wikipedia",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 205,
   "title": "GitHub Availability Report: March 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: March 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 206,
   "title": "GitHub availability this week",
   "url": "https://github.blog/news-insights/the-library/github-availability-this-week/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub availability this week",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 207,
   "title": "Major outage on travis-ci.com",
   "url": "https://traviscistatus.com/incidents/z2b3lz2kwcfp",
   "provider": "Travis CI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Major outage on travis-ci.com",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 208,
   "title": "GitHub Availability Report: June 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: June 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 209,
   "title": "How Cloudflare mitigated yet another Okta compromise",
   "url": "https://blog.cloudflare.com/how-cloudflare-mitigated-yet-another-okta-compromise",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "How Cloudflare mitigated yet another Okta compromise",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Updates on the status of Stripe services",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 211,
   "title": "GitHub Availability Report: January 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "GitHub Availability Report: January 2025",
   "rootCause": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "When GKE ran out of IP addresses",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Summary of the Amazon EC2, Amazon EBS, and Amazon RDS Service Event in the EU West Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 214,
   "title": "Redesigning Workers KV for increased availability and faster performance",
   "url": "https://blog.cloudflare.com/rearchitecting-workers-kv-for-redundancy",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Redesigning Workers KV for increased availability and faster performance",
   "rootCause": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Summary of the Amazon DynamoDB Service Disruption and Related Impacts in the US-East Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 216,
   "title": "Code Orange: Fail Small — our resilience plan following recent incidents",
   "url": "https://blog.cloudflare.com/fail-small-resilience-plan",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Code Orange: Fail Small — our resilience plan following recent incidents",
   "rootCause": "",
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
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 218,
   "title": "Summary of the Amazon S3 Service Disruption in the Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/41926",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Summary of the Amazon S3 Service Disruption in the Northern Virginia (US-EAST-1) Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 219,
   "title": "Catalyst Blog | Digital.ai",
   "url": "https://digital.ai/catalyst-blog/subversion-sha1-collision-problem-statement-prevention-and-remediation-options",
   "provider": "Digital",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Catalyst Blog | Digital.ai",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 220,
   "title": "Kubernetes: Make your services faster by removing CPU limits",
   "url": "https://erickhun.com/posts/kubernetes-faster-services-no-cpu-limits/",
   "provider": "Erickhun",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Kubernetes: Make your services faster by removing CPU limits",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 221,
   "title": "GitHub availability report: February 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2026/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "failover-gap"
   ],
   "summary": "GitHub availability report: February 2026",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 222,
   "title": "March 20 ChatGPT outage: Here’s what happened",
   "url": "https://openai.com/index/march-20-chatgpt-outage/",
   "provider": "OpenAI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "March 20 ChatGPT outage: Here’s what happened",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 223,
   "title": "Summary of the Amazon Kinesis Event in the Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/11201",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the Amazon Kinesis Event in the Northern Virginia (US-EAST-1) Region",
   "rootCause": "",
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
   "triggers": [
    "Other"
   ],
   "triggerNote": "本文を取得できず、引き金を特定できない",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "skyliner.io",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 225,
   "title": "GitHub Availability Report: March 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: March 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 226,
   "title": "Cloudflare outage on June 21, 2022",
   "url": "https://blog.cloudflare.com/cloudflare-outage-on-june-21-2022",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare outage on June 21, 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 227,
   "title": "Billing Incident Post-Mortem: Breakdown, Analysis and Root Cause",
   "url": "https://twilio.com/en-us/blog/company/communications/billing-incident-post-mortem-breakdown-analysis-and-root-cause-html",
   "provider": "Twilio",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Billing Incident Post-Mortem: Breakdown, Analysis and Root Cause",
   "rootCause": "",
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
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Agentic Misalignment in Summer 2026",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "A Post-Mortem on the Recent Developer Story Information Leak",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 230,
   "title": "GitHub Availability Report: December 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: December 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 231,
   "title": "Making sure you're not a bot!",
   "url": "https://lkml.org/lkml/2009/1/2/373",
   "provider": "Lkml",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Making sure you're not a bot!",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 232,
   "title": "GitHub Availability Report: June 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: June 2025",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "What came first- the CNAME or the A record",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 234,
   "title": "BrowserStack Security Incident Report — November 2014 (Resolved)",
   "url": "https://browserstack.com/attack-and-downtime-on-9-November",
   "provider": "BrowserStack",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "BrowserStack Security Incident Report — November 2014 (Resolved)",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 235,
   "title": "Okta’s Investigation of the January 2022 Compromise",
   "url": "https://www.okta.com/blog/company-and-culture/oktas-investigation-of-the-january-2022-compromise/",
   "provider": "Okta",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Okta’s Investigation of the January 2022 Compromise",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 236,
   "title": "Summary of AWS Direct Connect Event in the Tokyo (AP-NORTHEAST-1) Region",
   "url": "https://aws.amazon.com/message/17908",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Summary of AWS Direct Connect Event in the Tokyo (AP-NORTHEAST-1) Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 237,
   "title": "Incident Summary: 2017–03–16",
   "url": "https://medium.com/square-corner-blog/incident-summary-2017-03-16-2f65be39297",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
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
   "triggers": [
    "Other"
   ],
   "triggerNote": "本文を取得できず、引き金を特定できない",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "PagerDuty Status Page",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 239,
   "title": "GitHub Availability Report: January 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "報告時点では原因は調査中",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: January 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 240,
   "title": "kubernetes-on-aws/docs/postmortems/jan-2019-dns-outage.md at dev · zalando-incubator/kubernetes-on-aws",
   "url": "https://github.com/zalando-incubator/kubernetes-on-aws/blob/dev/docs/postmortems/jan-2019-dns-outage.md",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 241,
   "title": "Summary of June 8 outage | Fastly",
   "url": "https://fastly.com/blog/summary-of-june-8-outage",
   "provider": "Fastly",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "config-error"
   ],
   "summary": "Summary of June 8 outage | Fastly",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 242,
   "title": "SaleMove US System Issue",
   "url": "https://status.glia.com/incidents/xf6cr710yrzn",
   "provider": "Glia",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "SaleMove US System Issue",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Today's Outage Post Mortem",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "The Day the Replication Died",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 245,
   "title": "GitHub Availability Report: February 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: February 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 246,
   "title": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "url": "https://aws.amazon.com/message/65648",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the Amazon EC2 and Amazon RDS Service Disruption in the US East Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 247,
   "title": "Summary of the Amazon Kinesis Data Streams Service Event in Northern Virginia (US-EAST-1) Region",
   "url": "https://aws.amazon.com/message/073024",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Summary of the Amazon Kinesis Data Streams Service Event in Northern Virginia (US-EAST-1) Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 248,
   "title": "Moved ~/.local/share/steam. Ran steam. It deleted everything on system owned by user. · Issue #3671 · ValveSoftware/steam-for-linux",
   "url": "https://github.com/valvesoftware/steam-for-linux/issues/3671",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Moved ~/.local/share/steam. Ran steam. It deleted everything on system owned by user. · Issue #3671 · ValveSoftware/steam-for-linux",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 250,
   "title": "Supermarket Intermittent Unresponsiveness Postmortem - Chef Blog | Chef",
   "url": "https://chef.io/blog/supermarket-intermittent-unresponsiveness-postmortem",
   "provider": "Chef",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Supermarket Intermittent Unresponsiveness Postmortem - Chef Blog | Chef",
   "rootCause": "",
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
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Partial Cloudflare outage on October 25, 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 253,
   "title": "Cloudflare outage on July 17, 2020",
   "url": "https://blog.cloudflare.com/cloudflare-outage-on-july-17-2020",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare outage on July 17, 2020",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 254,
   "title": "GitHub availability report: March 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2026/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub availability report: March 2026",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 255,
   "title": "GitHub Availability Report: June 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: June 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 256,
   "title": "GitHub Availability Report: December 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: December 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 257,
   "title": "GitHub availability report: January 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2026/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub availability report: January 2026",
   "rootCause": "",
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
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "network-fault"
   ],
   "summary": "Route leak incident on January 22, 2026",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 260,
   "title": "Salesforce's database outage: Why it happened and how to prevent another one",
   "url": "https://www.datacenterdynamics.com/en/opinions/salesforce-database-outage-why-it-happened-and-how-prevent-another-one/",
   "provider": "Datacenterdynamics",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Salesforce's database outage: Why it happened and how to prevent another one",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Connection errors in Asia Pacific region on July 9, 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 262,
   "title": "An update on recent service disruptions",
   "url": "https://github.blog/news-insights/company-news/an-update-on-recent-service-disruptions",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "An update on recent service disruptions",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 263,
   "title": "Rule attribute selector causing flag targeting web interface to crash",
   "url": "https://status.launchdarkly.com/incidents/yltrp45vtxm2",
   "provider": "LaunchDarkly",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Rule attribute selector causing flag targeting web interface to crash",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 264,
   "title": "GitHub Availability Report: February 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: February 2025",
   "rootCause": "",
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
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "resource-exhaustion"
   ],
   "summary": "Cloudflare incident on June 20, 2024",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "A Byzantine failure in the real world",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 267,
   "title": "Post Mortem: Kubernetes Node OOM",
   "url": "https://bluematador.com/blog/post-mortem-kubernetes-node-oom",
   "provider": "Bluematador",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Post Mortem: Kubernetes Node OOM",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Heroku Status",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Northeast blackout of 2003 - Wikipedia",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "テスラ障害：サーバートラブルが自動車とパワーウォールのサービスに影響 | Data Center Café",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Behind the Scenes of a long EVE Online downtime | EVE Online",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 272,
   "title": "GitHub Availability Report: December 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: December 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 273,
   "title": "Service disruption on October 20, 2025 | Blog | incident.io",
   "url": "https://incident.io/blog/service-disruption-october-20th-2025",
   "provider": "Incident.io",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Service disruption on October 20, 2025 | Blog | incident.io",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 274,
   "title": "Post-mortem of technical issue – August 29, 2019",
   "url": "https://zerodha.com/marketintel/bulletin/229363/post-mortem-of-technical-issue-august-29-2019",
   "provider": "Zerodha",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Post-mortem of technical issue – August 29, 2019",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 275,
   "title": "Apache Killer Terminated: Zero Day Exploit, Zero Day Fix",
   "url": "https://blog.cloudflare.com/apache-killer-killed-zero-day-exploit-zero-da",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Apache Killer Terminated: Zero Day Exploit, Zero Day Fix",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 276,
   "title": "February service disruptions post-incident analysis",
   "url": "https://github.blog/news-insights/company-news/february-service-disruptions-post-incident-analysis/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "February service disruptions post-incident analysis",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Google Cloud Status Dashboard",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "High queue times on OSX builds (.com and .org)",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 279,
   "title": "failing like never before",
   "url": "https://42gems.com/blog",
   "provider": "42Gems",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "failing like never before",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Jobs not starting",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 281,
   "title": "PIPEFAIL: How a missing shell option slowed Cloudflare down",
   "url": "https://blog.cloudflare.com/pipefail-how-a-missing-shell-option-slowed-cloudflare-down",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "PIPEFAIL: How a missing shell option slowed Cloudflare down",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 282,
   "title": "GitHub Availability Report: February 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-february-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: February 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 283,
   "title": "GitLab .com Downtime 2014-07-08 Postmortem",
   "url": "https://docs.google.com/document/d/1ScqXAdb6BjhsDzCo3qdPYbt1uULzgZqPO8zHeHHarS0/preview",
   "provider": "Docs",
   "date": "2014-07-08",
   "year": 2014,
   "datetimeBegin": "2014-07-08",
   "datetimeEnd": "2014-07-08",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitLab .com Downtime 2014-07-08 Postmortem",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 284,
   "title": "GitHub Availability Report: March 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-march-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault",
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "GitHub Availability Report: March 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 285,
   "title": "Post-Incident Review on the Atlassian April 2022 outage - Inside Atlassian",
   "url": "https://atlassian.com/blog/how-we-build/post-incident-review-april-2022-outage",
   "provider": "Atlassian",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Post-Incident Review on the Atlassian April 2022 outage - Inside Atlassian",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "The CircleCI Blog - CircleCI",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 287,
   "title": "High Filtering On SMS Towards AT&T Network In United States",
   "url": "https://status.twilio.com/incidents/wdrlk4qps0z1",
   "provider": "Twilio",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "High Filtering On SMS Towards AT&T Network In United States",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 288,
   "title": "Kubernetes' dirty endpoint secret and Ingress · Phil Pearl's Blog",
   "url": "https://philpearl.github.io/post/k8s_ingress",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Kubernetes' dirty endpoint secret and Ingress · Phil Pearl's Blog",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "npm Blog Archive: 2014-01-28 Outage Postmortem",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Kubernetes Networking Problems Due to the Conntrack",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 291,
   "title": "An Outage Post-Mortem for August 22nd – what went wrong?",
   "url": "https://buildkite.com/resources/blog/outage-post-mortem-for-august-22nd",
   "provider": "Buildkite",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "An Outage Post-Mortem for August 22nd – what went wrong?",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 292,
   "title": "GitHub Availability Report: December 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-december-2020/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: December 2020",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 293,
   "title": "Incident Resolution: Do You Remember, the Twenty Fires of September?",
   "url": "https://honeycomb.io/blog/incident-resolution-september-retrospective",
   "provider": "Honeycomb",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Incident Resolution: Do You Remember, the Twenty Fires of September?",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Postmortem: Removing all users from github.com/trivago · trivago tech blog",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 295,
   "title": "Post Incident Report: April 4, 2025 - Delays in starting workflows",
   "url": "https://discuss.circleci.com/t/post-incident-report-april-4-2025-delays-in-starting-workflows/53113",
   "provider": "CircleCI",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Post Incident Report: April 4, 2025 - Delays in starting workflows",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 296,
   "title": "GitHub Availability Report: June 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-june-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: June 2024",
   "rootCause": "",
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
   "triggers": [
    "Other"
   ],
   "triggerNote": "本文を取得できず、引き金を特定できない",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Cloudflare Registrar",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Summary of the Amazon SimpleDB Service Disruption",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 299,
   "title": "failing like never before",
   "url": "http://42gems.com/blog",
   "provider": "42Gems",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "failing like never before",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 300,
   "title": "GitHub Availability Report: January 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-january-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: January 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 301,
   "title": "Incident Review: Shepherd Cache Delays",
   "url": "https://honeycomb.io/blog/incident-review-shepherd-cache-delays",
   "provider": "Honeycomb",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Incident Review: Shepherd Cache Delays",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 302,
   "title": "Search and Reporting Outage",
   "url": "https://status.universe.com/incidents/115n3vxqwzcf",
   "provider": "Universe",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Search and Reporting Outage",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 303,
   "title": "Summary of the October 22, 2012 AWS Service Event in the US-East Region",
   "url": "https://aws.amazon.com/message/680342",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Summary of the October 22, 2012 AWS Service Event in the US-East Region",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "メンテナンス・障害情報・機能追加｜さくらインターネット公式サポートサイト",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 305,
   "title": "Incident review: API and Dashboard outage on 10 October 2017",
   "url": "https://gocardless.com/blog/incident-review-api-and-dashboard-outage-on-10th-october",
   "provider": "GoCardless",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "failover-gap"
   ],
   "summary": "Incident review: API and Dashboard outage on 10 October 2017",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 307,
   "title": "Breaking Kubernetes: How We Broke and Fixed our K8s Cluster",
   "url": "https://medium.com/@CivisAnalytics/https-medium-com-civis-analytics-breaking-kubernetes-how-we-broke-and-fixed-our-k8s-cluster-adfa6fbade61",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Breaking Kubernetes: How We Broke and Fixed our K8s Cluster",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 308,
   "title": "Post-mortem of October 22, 2012 AWS degradation",
   "url": "https://netflixtechblog.com/post-mortem-of-october-22-2012-aws-degradation-efcee3ab40d5",
   "provider": "Netflix",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Post-mortem of October 22, 2012 AWS degradation",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 309,
   "title": "GitHub availability report: July 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2026/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry",
    "software-defect"
   ],
   "summary": "GitHub availability report: July 2026",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "The impact of the Salesloft Drift breach on Cloudflare and our customers",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 311,
   "title": "Cloudflare incident on March 21, 2025",
   "url": "https://blog.cloudflare.com/cloudflare-incident-march-21-2025",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 312,
   "title": "GitHub Availability Report: November 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: November 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 313,
   "title": "I deleted the production database by accident 💥",
   "url": "https://keepthescore.co/blog/posts/deleting_the_production_database",
   "provider": "Keepthescore",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error",
    "config-error"
   ],
   "summary": "I deleted the production database by accident 💥",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 314,
   "title": "GitHub Availability Report: August 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: August 2023",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "The Four Critical Security Flaws that Resulted in Last Friday's Hack",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 316,
   "title": "GitHub Availability Report: May 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: May 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 317,
   "title": "GitHub Availability Report: April 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault",
    "software-defect"
   ],
   "summary": "GitHub Availability Report: April 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 318,
   "title": "GitHub Availability Report: October 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "GitHub Availability Report: October 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 319,
   "title": "GitHub Availability Report: September 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: September 2025",
   "rootCause": "",
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
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Enom",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 321,
   "title": "Network problems last Friday",
   "url": "https://github.blog/news-insights/the-library/network-problems-last-friday",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Network problems last Friday",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 322,
   "title": "Incident Management at Spotify | Spotify Engineering",
   "url": "https://engineering.atspotify.com/2013/6/incident-management-at-spotify",
   "provider": "Spotify",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Incident Management at Spotify | Spotify Engineering",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 323,
   "title": "아시아-태평양 서울 리전(AP-NorthEast-2)의 Amazon EC2 DNS 확인(Resolution) 이슈 요약",
   "url": "https://aws.amazon.com/message/74876-2/",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "아시아-태평양 서울 리전(AP-NorthEast-2)의 Amazon EC2 DNS 확인(Resolution) 이슈 요약",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "A kubernetes failure story (#1 - dex)",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 325,
   "title": "GitHub Availability Report: July 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: July 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 326,
   "title": "How to run PostgreSQL on Kubernetes",
   "url": "https://goteleport.com/blog/running-postgresql-on-kubernetes",
   "provider": "Goteleport",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "How to run PostgreSQL on Kubernetes",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 327,
   "title": "Cloudflare outage on November 18, 2025",
   "url": "https://blog.cloudflare.com/18-november-2025-outage-uk-ua",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Cloudflare outage on November 18, 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 328,
   "title": "GitHub Availability Report: April 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "GitHub Availability Report: April 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 329,
   "title": "GitHub Availability Report: October 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2020/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: October 2020",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 330,
   "title": "Summary of the AWS Service Event in the US East Region",
   "url": "https://aws.amazon.com/jp/message/67457/",
   "provider": "AWS",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Summary of the AWS Service Event in the US East Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 331,
   "title": "GitHub Availability Report: September 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "この月はサービス停止を伴うインシデントは報告されていない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "GitHub Availability Report: September 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 332,
   "title": "GitHub Availability Report: November 2020",
   "url": "https://github.blog/news-insights/company-news/availability-report-november-2020/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: November 2020",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 333,
   "title": "Intermittent delays in Kubernetes",
   "url": "https://medium.com/techmindtickle/intermittent-delays-in-kubernetes-e9de8239e2fa",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Intermittent delays in Kubernetes",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "resource-exhaustion"
   ],
   "summary": "Cloudflare outage caused by bad software deploy (updated)",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 335,
   "title": "Postmortem on the read-only outage of Basecamp on November 9th, 2018",
   "url": "https://m.signalvnoise.com/postmortem-on-the-read-only-outage-of-basecamp-on-november-9th-2018",
   "provider": "M",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "Postmortem on the read-only outage of Basecamp on November 9th, 2018",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 336,
   "title": "Sun Screen",
   "url": "https://forbes.com/forbes/2000/1113/6613068a.html",
   "provider": "Forbes",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure"
   ],
   "summary": "Sun Screen",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 337,
   "title": "Intermittent failures - incident.io Status",
   "url": "https://status.incident.io/incidents/01JRDFKAGE07YYDY0KZR137BX3/write-up",
   "provider": "Incident.io",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Intermittent failures - incident.io Status",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Cloudflare incident on January 24, 2023",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "crates.io Postmortem: Broken Crate Downloads | Inside Rust Blog",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Elastic Cloud Incident Report: February 4, 2019",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 342,
   "title": "Making sure you're not a bot!",
   "url": "https://lkml.org/lkml/2012/7/1/203",
   "provider": "Lkml",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Making sure you're not a bot!",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 343,
   "title": "Observability: cloud monitoring and logging",
   "url": "https://cloud.google.com/products/observability",
   "provider": "Google Cloud",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Observability: cloud monitoring and logging",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 344,
   "title": "Today we mitigated 1.1.1.1",
   "url": "https://blog.cloudflare.com/today-we-mitigated-1-1-1-1",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "Today we mitigated 1.1.1.1",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "upstream-failure"
   ],
   "summary": "Summary of the AWS Service Event in the Sydney Region",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 346,
   "title": "October 21 post-incident analysis",
   "url": "https://github.blog/news-insights/company-news/oct21-post-incident-analysis",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "October 21 post-incident analysis",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 347,
   "title": "Quantifying the Impact of \"Cloudbleed\"",
   "url": "https://blog.cloudflare.com/quantifying-the-impact-of-cloudbleed",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Quantifying the Impact of \"Cloudbleed\"",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 348,
   "title": "GitHub Availability Report: July 2023",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-july-2023/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: July 2023",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 349,
   "title": "GitHub Availability Report: April 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-april-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: April 2024",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 350,
   "title": "GitHub Availability Report: May 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: May 2021",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "DNS Outage on 2023-01-25 | Inside Rust Blog",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "How and why the leap second affected Cloudflare DNS",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 353,
   "title": "GitHub Availability Report: October 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "GitHub Availability Report: October 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 354,
   "title": "GitHub Availability Report: September 2020",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2020/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: September 2020",
   "rootCause": "",
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
   "triggers": [
    "Maintainance",
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Incorrect proxying of 24 hostnames on January 24, 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 356,
   "title": "Steam Outage: How to Monitor Data Center Connectivity",
   "url": "https://blog.thousandeyes.com/steam-outage-monitor-data-center-connectivity",
   "provider": "Thousandeyes",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "network-fault"
   ],
   "summary": "Steam Outage: How to Monitor Data Center Connectivity",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 357,
   "title": "GitHub Availability Report: November 2021",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2021/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance",
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: November 2021",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 358,
   "title": "GitHub availability report: August 2026",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2026/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion",
    "software-defect"
   ],
   "summary": "GitHub availability report: August 2026",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "software-defect"
   ],
   "summary": "Outage post-mortem - Moonlight updates",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 360,
   "title": "Posts tagged \"Post Mortem\"",
   "url": "https://blog.cloudflare.com/tag/post-mortem/",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Posts tagged \"Post Mortem\"",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 361,
   "title": "Dropbox Tech Blog",
   "url": "https://dropbox.tech/",
   "provider": "Dropbox",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Other"
   ],
   "triggerNote": "単一の障害報告ではない",
   "rootCauses": [
    "not-a-report"
   ],
   "summary": "Dropbox Tech Blog",
   "rootCause": "",
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
   "triggers": [
    "Infrastructure failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "operational-error"
   ],
   "summary": "December 4 - NRE Labs Outage Post-Mortem",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 363,
   "title": "Apollo 11 and Other Screw-Ups",
   "url": "https://www.doneyles.com/LM/Tales.html",
   "provider": "Doneyles",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "Apollo 11 and Other Screw-Ups",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 364,
   "title": "How A Cryptocurrency Miner Made Its Way onto Our Internal Kubernetes Clusters",
   "url": "https://medium.com/jw-player-engineering/how-a-cryptocurrency-miner-made-its-way-onto-our-internal-kubernetes-clusters-9b09c4704205",
   "provider": "Medium",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "How A Cryptocurrency Miner Made Its Way onto Our Internal Kubernetes Clusters",
   "rootCause": "",
   "extraUrl": "",
   "archived": true
  },
  {
   "id": 365,
   "title": "スーパーコンピュータシステムのファイル消失のお詫び | 京都大学情報環境機構",
   "url": "https://www.iimc.kyoto-u.ac.jp/ja/news/information/211228056999",
   "provider": "Iimc",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "スーパーコンピュータシステムのファイル消失のお詫び | 京都大学情報環境機構",
   "rootCause": "",
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
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "network-fault"
   ],
   "summary": "Incident details | Google Cloud Service Health",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 367,
   "title": "One, Two, Skip a Few... | Blog | incident.io",
   "url": "https://incident.io/blog/one-two-skip-a-few",
   "provider": "Incident.io",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Maintainance"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "One, Two, Skip a Few... | Blog | incident.io",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 368,
   "title": "Addressing GitHub’s recent availability issues",
   "url": "https://github.blog/news-insights/company-news/addressing-githubs-recent-availability-issues/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Addressing GitHub’s recent availability issues",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure",
    "network-fault"
   ],
   "summary": "The deep-dive into how Verizon and a BGP Optimizer Knocked Large Parts of the Internet Offline Monday",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 370,
   "title": "Postmortem: Trading and hanging orders on 12th April 2018",
   "url": "https://zerodha.com/marketintel/bulletin/105569/postmortem-trading-and-hanging-orders-on-12th-april-2018",
   "provider": "Zerodha",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Postmortem: Trading and hanging orders on 12th April 2018",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 371,
   "title": "Major data center power failure (again): Cloudflare Code Orange tested",
   "url": "https://blog.cloudflare.com/major-data-center-power-failure-again-cloudflare-code-orange-tested",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Hardware fault"
   ],
   "triggerNote": "",
   "rootCauses": [
    "hardware-failure",
    "upstream-failure"
   ],
   "summary": "Major data center power failure (again): Cloudflare Code Orange tested",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 372,
   "title": "Our October 20 Service Disruption: What Happened, What We Learned and How We’re Improving | LaunchDarkly",
   "url": "https://launchdarkly.com/blog/what-happened-what-we-learned-and-how-were-improving",
   "provider": "LaunchDarkly",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "Our October 20 Service Disruption: What Happened, What We Learned and How We’re Improving | LaunchDarkly",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 373,
   "title": "Update on Azure Storage Service Interruption | Microsoft Azure Blog",
   "url": "https://azure.microsoft.com/en-us/blog/update-on-azure-storage-service-interruption",
   "provider": "Azure",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error"
   ],
   "summary": "Update on Azure Storage Service Interruption | Microsoft Azure Blog",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 374,
   "title": "An update on recent service disruptions",
   "url": "https://github.blog/news-insights/company-news/an-update-on-recent-service-disruptions/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Application bugs",
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion"
   ],
   "summary": "An update on recent service disruptions",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 375,
   "title": "GitHub Availability Report: November 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-november-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Job Failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "credential-expiry"
   ],
   "summary": "GitHub Availability Report: November 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 376,
   "title": "GitHub Availability Report: August 2022",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-august-2022/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "GitHub Availability Report: August 2022",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 377,
   "title": "GitHub Availability Report: May 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-may-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect"
   ],
   "summary": "GitHub Availability Report: May 2025",
   "rootCause": "",
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
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "The mechanics of a sophisticated phishing scam and how we stopped it",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 379,
   "title": "GitHub Availability Report: September 2024",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-september-2024/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "config-error",
    "resource-exhaustion"
   ],
   "summary": "GitHub Availability Report: September 2024",
   "rootCause": "",
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
   "triggers": [
    "Misconfiguration"
   ],
   "triggerNote": "",
   "rootCauses": [
    "undetermined"
   ],
   "summary": "Bungie.net",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 381,
   "title": "GitHub Availability Report: October 2025",
   "url": "https://github.blog/news-insights/company-news/github-availability-report-october-2025/",
   "provider": "GitHub",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "upstream-failure"
   ],
   "summary": "GitHub Availability Report: October 2025",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 382,
   "title": "オーストラリアで起きた全国的な通信障害についてまとめてみた - piyolog",
   "url": "https://piyolog.hatenadiary.jp/entry/2026/08/22/033313",
   "provider": "Piyolog",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
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
   "rootCause": "",
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
   "triggers": [
    "Request increase"
   ],
   "triggerNote": "",
   "rootCauses": [
    "resource-exhaustion",
    "config-error"
   ],
   "summary": "Incident details | Google Workspace Status Dashboard",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  },
  {
   "id": 384,
   "title": "Post Mortem: Today's Attack; Apparent Google Apps/Gmail Vulnerability; and How to Protect Yourself",
   "url": "https://blog.cloudflare.com/post-mortem-todays-attack-apparent-google-app",
   "provider": "Cloudflare",
   "date": null,
   "year": null,
   "datetimeBegin": "",
   "datetimeEnd": "",
   "tz": "UTC",
   "duration": "",
   "triggers": [
    "External failure"
   ],
   "triggerNote": "",
   "rootCauses": [
    "attack"
   ],
   "summary": "Post Mortem: Today's Attack; Apparent Google Apps/Gmail Vulnerability; and How to Protect Yourself",
   "rootCause": "",
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
   "triggers": [
    "Application bugs"
   ],
   "triggerNote": "",
   "rootCauses": [
    "software-defect",
    "upstream-failure"
   ],
   "summary": "Incident 2023-12-04: Data leak and loss in some free tier databases",
   "rootCause": "",
   "extraUrl": "",
   "archived": false
  }
 ]
};
