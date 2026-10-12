#!/usr/bin/env python3
"""
障害レポートをスクレイピングしてSQLiteに保存するスクリプト
"""

import sqlite3
import requests
from bs4 import BeautifulSoup
import time
import json
from datetime import datetime
from typing import Optional, Dict, Any
import sys

# Google Driveから読み取ったスプレッドシートデータ
INCIDENTS_DATA = [
    {
        "tz": "UTC",
        "datetime_begin": "2010-12-06T00:00:00Z",
        "datetime_end": "2010-12-07T00:00:00Z",
        "duration": "24 hours",
        "provider": "Tumblr",
        "source_original": "",
        "source2_original": "",
        "articles": "Database cluster crashed during maintenance",
        "root_cause_analysis": "MySQL のバグにより、ORDER BY が適用されず、レプリカ間で結果が不一致となった",
        "trigger": "Application bugs"
    },
    {
        "tz": "PDT",
        "datetime_begin": "2016/09/08 7:25:00",
        "datetime_end": "2016-09-08 8:48",
        "duration": "約83分",
        "provider": "Asana",
        "source_original": "https://asana.com/inside-asana/yesterdays-outage",
        "source2_original": "なし（記事自身）",
        "articles": "Asana公式「Yesterday's outage」記事（2016年9月9日掲載）",
        "root_cause_analysis": "前夜にデプロイされた新しいコードのバグにより、過剰なログ記録が発生しウェブサーバのCPUが逼迫し、応答遅延とDB接続の飽和を引き起こした",
        "trigger": "Application bugs"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2023-07-25T13:40:00Z",
        "datetime_end": "2023-07-25T14:48:00Z",
        "duration": "68 min",
        "provider": "Honeycomb",
        "source_original": "https://www.honeycomb.io/blog/incident-review-what-comes-up-must-first-go-down",
        "source2_original": "",
        "articles": "Retriever cluster misbehavior leading to full service outage",
        "root_cause_analysis": "フィーチャーフラグのバグにより Retriever ノードがキャッシュ更新を停止し、MySQL が過負荷となってクラッシュした",
        "trigger": "Application bugs"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2016/06/20 12:10:00",
        "datetime_end": "2016-06-20 ≈その後（Packet loss 解消後）",
        "duration": "約数十分以内（詳細なDuration不明）",
        "provider": "Cloudflare",
        "source_original": "https://blog.cloudflare.com/a-post-mortem-on-this-mornings-incident/",
        "source2_original": "",
        "articles": "Cloudflare公式「A Post Mortem on this Morning's Incident」（2016年6月21日公開）",
        "root_cause_analysis": "主要トランジットプロバイダー（Telia Carrier）のバックボーン回線で大規模なパケットロスが発生したことが根本原因。TCP再送では対処できず、エッジとオリジン間通信に影響し、522エラーが多発",
        "trigger": "External failure"
    },
    {
        "tz": "BST",
        "datetime_begin": "2017-10-10 午後（おそらく 15:09）",
        "datetime_end": "2017/10/10 16:59:00",
        "duration": "約1時間50分",
        "provider": "なし（記事単独）",
        "source_original": "https://gocardless.com/blog/incident-review-api-and-dashboard-outage-on-10th-october/",
        "source2_original": "",
        "articles": "GoCardless公式「Incident review: API and Dashboard outage on 10 October 2017」記事（最終更新：2024年6月）",
        "root_cause_analysis": "プライマリDBノードのハードウェア故障により自動フェイルオーバーが機能せず、同期レプリカへの昇格ができずにフェイルオーバー遅延。結果として1～2分で済むはずの障害が約1時間50分に拡大。",
        "trigger": "Hardware fault"
    },
    {
        "tz": "JST",
        "datetime_begin": "2019/08/23 12:36:00",
        "datetime_end": "2019-08-23 15:21（冷却回復）、18:30（ほとんど復旧）／16:05（APIリストア）",
        "duration": "約2時間45分（インスタンス停止・EBS劣化）／約5時間54分（API完全復旧含む）",
        "provider": "なし（記事単独）",
        "source_original": "https://aws.amazon.com/jp/message/56489/",
        "source2_original": "",
        "articles": "AWS公式「Summary of the Amazon EC2 and Amazon EBS Service Event in the Tokyo (AP-NORTHEAST-1) Region」記事（2019年8月25日初版、8月28...",
        "root_cause_analysis": "制御ホストのフェイルオーバー中に発生した制御システムのバグが、冷却システムの正常動作を阻害したことが直接のトリガ。データセンター制御システムのサードパーティ製制御コードにバグがあり、AZ内の冷却システムが安全モードに移行せず過熱 → 一",
        "trigger": "Hardware fault"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2023/11/02 11:43:00",
        "datetime_end": "2023/11/04 4:25:00",
        "duration": "40:42:00",
        "provider": "Cloudflare",
        "source_original": "https://blog.cloudflare.com/post-mortem-on-cloudflare-control-plane-and-analytics-outage/",
        "source2_original": "",
        "articles": "",
        "root_cause_analysis": "DCの電力供給に原因で障害が発生した．一部のシステムのフェイルオーバに不足があった．",
        "trigger": "Hardware fault"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2011-08-07T21:00:00Z",
        "datetime_end": "2011-08-08T06:00:00Z",
        "duration": "9h",
        "provider": "AWS",
        "source_original": "https://aws.amazon.com/message/67457/",
        "source2_original": "",
        "articles": "EU-West power failure affected RDS and EC2",
        "root_cause_analysis": "データセンタの変圧器の故障とバックアップ電源の切替失敗により、RDS インスタンスが停止した",
        "trigger": "Hardware fault"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2016-05-10T05:00:00Z",
        "datetime_end": "2016-05-10T18:00:00Z",
        "duration": "13 hours",
        "provider": "Salesforce's",
        "source_original": "https://www.datacenterdynamics.com/en/opinions/salesforce-database-outage-why-it-happened-and-how-prevent-another-one/",
        "source2_original": "",
        "articles": "Power failure and storage bug caused data loss",
        "root_cause_analysis": "ハードウェアの異常により、PostgreSQL プロセスがセグフォールトでクラッシュした",
        "trigger": "Hardware fault"
    },
    {
        "tz": "PDT",
        "datetime_begin": "2012/10/22 10:00:00",
        "datetime_end": "2012-10-22 16:15（EBS復旧）／21:50（ELB関連全復旧）",
        "duration": "約6時間（EBS復旧）／約12時間（全復旧）",
        "provider": "https://availabilitydigest.com/public_articles/0711/amazon_memory_leak.pdf",
        "source_original": "https://aws.amazon.com/message/680342/",
        "source2_original": "",
        "articles": "2012年当時のAWS公式調査報告記事およびAvailability Digestによる技術解説",
        "root_cause_analysis": "内部DNS伝播失敗によりEBSサーバが故障サーバへ接続し続け、メモリリークが発生してI/Oが停止",
        "trigger": "Infrastructure failure"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2019-07-26T00:50:00Z",
        "datetime_end": "2019-07-26T01:10:00Z",
        "duration": "20 min",
        "provider": "Honey Comb",
        "source_original": "https://www.honeycomb.io/blog/rds-performance-degradation-postmortem",
        "source2_original": "",
        "articles": "RDS Performance Degradation – Postmortem",
        "root_cause_analysis": "AWS RDS の基盤で性能劣化が発生し、アプリケーションからの新規接続が殺到して RDS が過負荷に陥った",
        "trigger": "Infrastructure failure"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2017/03/20 11:38:00",
        "datetime_end": "2017/03/20 16:54:00",
        "duration": "5:16:00",
        "provider": "Discord",
        "source_original": "https://discordstatus.com/incidents/dj3l6lw926kl",
        "source2_original": "",
        "articles": "",
        "root_cause_analysis": "ネットワーク切断にともなうフェイルオーバーでメモリ不足が発生し，応答しなくなる．",
        "trigger": "Infrastructure failure"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2017/10/13 14:18:00",
        "datetime_end": "2017/10/13 14:57:00",
        "duration": "0:39:00",
        "provider": "Discord",
        "source_original": "https://discordstatus.com/incidents/qk9cdgnqnhcn",
        "source2_original": "",
        "articles": "",
        "root_cause_analysis": "HA構成のRedisクラスタがGCPによって自動移行(再起動)された．",
        "trigger": "Infrastructure failure"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2019/02/04 5:35:00",
        "datetime_end": "2019/02/05 22:09:00",
        "duration": "40:34:00",
        "provider": "Mailchimp",
        "source_original": "https://mailchimp.com/what-we-learned-from-the-recent-mandrill-outage/",
        "source2_original": "",
        "articles": "",
        "root_cause_analysis": "auto vaccumが失敗しPostgreSQLでXIDが枯渇",
        "trigger": "Job Failure"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2024/11/15 5:55:00",
        "datetime_end": "2024/11/15 15:22:00",
        "duration": "9:27:00",
        "provider": "https://help.salesforce.com/s/articleView?id=002830176&type=1&language=en_US",
        "source_original": "https://status.salesforce.com/incidents/13457",
        "source2_original": "",
        "articles": "国内の複数組織に影響が及んだSalesforceのシステム障害についてまとめてみた - piyolog",
        "root_cause_analysis": "key management systemのkey retentionで出来ていなかった．",
        "trigger": "Job Failure"
    },
    {
        "tz": "UTC（推定）",
        "datetime_begin": "2015-07-20（詳細時刻不明）",
        "datetime_end": "2015-07-20（autovacuum終了・復旧）",
        "duration": "数時間〜US営業時間中（詳細Duration不明）",
        "provider": "なし（記事単独）",
        "source_original": "https://blog.sentry.io/transaction-id-wraparound-in-postgres/",
        "source2_original": "",
        "articles": "Sentry公式「Transaction ID Wraparound in Postgres」（2015年7月23日掲載）",
        "root_cause_analysis": "PgのXIDカウンタが32bitで有限、autovacuumの遅延や設定不足によりXIDが枯渇寸前になり、wraparound防止機構が働いてDBが書き込み停止。autovacuum完了まで待機しつつ、VACUUM_SINGLE_USE",
        "trigger": "Job Failure"
    },
    {
        "tz": "EST (推定)",
        "datetime_begin": "2021/09/30 10:15:00",
        "datetime_end": "2021-09-30 ～数十分以内（該当接続の切断自動で発生）",
        "duration": "約数十分",
        "provider": "なし（記事単独）",
        "source_original": "https://shopify.engineering/that-old-certificate-expired-and-started-an-outage-this-is-what-happened-next",
        "source2_original": "",
        "articles": "Shopify公式「That Old Certificate Expired and Started an Outage. This is What Happened Next」（2022年1月12日公開）",
        "root_cause_analysis": "Let's Encrypt の旧ルート証明書の有効期限切れにより、Shopify の内部サービス間通信で使用されているRuby用 `httpclient` ライブラリが組み込む、6年以上更新されていないルート証明書バンドルが信頼されずT",
        "trigger": "Job Failure"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2018/10/21 22:52:00",
        "datetime_end": "2018-10-22 ≈翌日同時刻まで（約24時間11分）",
        "duration": "約24時間11分",
        "provider": "https://github.blog/news-insights/company-news/october21-incident-report/",
        "source_original": "https://github.blog/news-insights/company-news/oct21-post-incident-analysis/",
        "source2_original": "",
        "articles": "GitHub公式「October 21 post-incident analysis」記事（公開日：2018年10月30日、更新：2021年12月19日）",
        "root_cause_analysis": "US東海岸ネットワークハブとデータセンター間の接続が断たれたことで同期レプリカ間に差分が生まれ、MySQLクラスタのフェイルオーバーができず、24時間以上のサービス劣化が発生",
        "trigger": "Hardware fault"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2018-10-21T22:52:00Z",
        "datetime_end": "2018-10-23T23:03:00Z",
        "duration": "24h 11min",
        "provider": "GitHub",
        "source_original": "https://github.blog/news-insights/company-news/oct21-post-incident-analysis/",
        "source2_original": "",
        "articles": "GitHub service disruption due to MySQL failover issue",
        "root_cause_analysis": "ネットワークの分断で Orchestrator が誤ってフェイルオーバーし、レプリケーションラグによってデータ不整合が発生した",
        "trigger": "Maintainance"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2024/12/11 7:16:00",
        "datetime_end": "2024/12/11 11:38:00",
        "duration": "4:22:00",
        "provider": "OpenAI",
        "source_original": "https://status.openai.com/incidents/ctrsv3lwd797",
        "source2_original": "",
        "articles": "https://www.junctionlabs.io/blog/dns-and-the-december-2024-openai-outage",
        "root_cause_analysis": "Kubernetes コントロール プレーンが意図せず過負荷になり，重要なシステム全体に連鎖的な障害が発生した．Kubernetes コントロール プレーンの詳細なメトリックを収集するための新しいテレメトリ サービスを導入した．その結果",
        "trigger": "Maintainance, Request increase"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2019/07/02 13:42:00",
        "datetime_end": "2019-07-02 14:09（CPU回復）／14:52（WAF復旧）",
        "duration": "約27分（大規模影響）／約70分（WAF機能完全復旧）",
        "provider": "なし（記事のみ）",
        "source_original": "https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/",
        "source2_original": "",
        "articles": "Cloudflare公式「Details of the Cloudflare outage on July 2, 2019」記事（公開日：2019年7月12日）",
        "root_cause_analysis": "WAFにデプロイされた単一の不正な正規表現ルールがHTTP/HTTPSを扱う全CPUコアを100%使用に追い込んだことで、CDN／プロキシ／WAF機能全体がダウン。テストスイートでCPU使用率異常を検知せず、グローバル展開されてしまった",
        "trigger": "Misconfiguration"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2023-06-08T00:00:00Z",
        "datetime_end": "2023-06-08T00:30:00Z",
        "duration": "30 min",
        "provider": "Heroku",
        "source_original": "https://status.heroku.com/incidents/2453",
        "source2_original": "",
        "articles": "Auth service failed due to FK integer overflow",
        "root_cause_analysis": "外部キーの型が主キーより小さく、上限を超えて挿入エラーが発生した",
        "trigger": "Misconfiguration"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2025/02/06 8:14:00",
        "datetime_end": "2025-02-06 09:13（主要障害復旧）／09:36（Durable Objects エラー収束）",
        "duration": "約59分（R2完全障害）／約82分（エラー収束含む）",
        "provider": "なし（記事自身のみ）",
        "source_original": "https://blog.cloudflare.com/cloudflare-incident-on-february-6-2025/",
        "source2_original": "",
        "articles": "Cloudflare公式「Cloudflare incident on February 6, 2025」（2025年2月7日掲載）",
        "root_cause_analysis": "ルーチンのフィッシング報告対応中に、人為的ミスとバリデーション不足により、誤って本番用R2 Gatewayサービスが無効化され、R2および依存サービスが全停止。ただしデータの喪失・破損はなし。",
        "trigger": "Misconfiguration"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2019/07/10 16:36:00",
        "datetime_end": "2019-07-10 17:02／2019-07-10 21:14–22:47",
        "duration": "約26分（第1回）／約1時間33分（第2回）",
        "provider": "なし（記事のみ）",
        "source_original": "https://stripe.com/en-jp/rcas/2019-07-10",
        "source2_original": "",
        "articles": "Stripe公式「Root cause analysis: significantly elevated error rates on 2019-07-10」記事（公開日：2019年7月12日頃）",
        "root_cause_analysis": "first degradation: データベースクラスタのプライマリ選出ができず、シャードの停止によるサービス劣化に起因。second degradation: ロールバック後のデータベースの選挙プロトコルの不具合とプロダクション設",
        "trigger": "primary election failure（データベースノード停止）および設定変更とバグの相互作用による再発"
    },
    {
        "tz": "UTC",
        "datetime_begin": "2015/03/26 0:00:00",
        "datetime_end": "2015/03/27 0:00:00",
        "duration": "-",
        "provider": "Parsely",
        "source_original": "https://www.parse.ly/kafkapocalypse/",
        "source2_original": "",
        "articles": "",
        "root_cause_analysis": "EC2で動いているkafkaが，ENIのサポートしている帯域を上回った．previewシステムを動かしていたため，通常時よりもトラフィックが増加していた．",
        "trigger": "Request increase"
    }
]


def create_database():
    """SQLiteデータベースとテーブルを作成"""
    conn = sqlite3.connect('incidents.sqlite')
    cursor = conn.cursor()
    
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS incidents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tz TEXT,
        datetime_begin TEXT,
        datetime_end TEXT,
        duration TEXT,
        provider TEXT,
        source_original TEXT,
        source2_original TEXT,
        articles TEXT,
        root_cause_analysis TEXT,
        trigger TEXT,
        scraped_url TEXT,
        scraped_title TEXT,
        scraped_content TEXT,
        scraped_at TEXT,
        scrape_status TEXT,
        scrape_error TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
    ''')
    
    conn.commit()
    return conn


def scrape_url(url: str) -> Dict[str, Any]:
    """URLをスクレイピング"""
    result = {
        'url': url,
        'title': '',
        'content': '',
        'status': 'success',
        'error': None
    }
    
    if not url or url.strip() == '':
        result['status'] = 'skipped'
        result['error'] = 'Empty URL'
        return result
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        print(f"Scraping: {url}")
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # タイトルを取得
        title_tag = soup.find('title')
        if title_tag:
            result['title'] = title_tag.get_text().strip()
        
        # h1タグがあればそれも含める
        h1_tags = soup.find_all('h1')
        if h1_tags and not result['title']:
            result['title'] = h1_tags[0].get_text().strip()
        
        # メインコンテンツを取得
        # 不要なタグを削除
        for tag in soup(['script', 'style', 'nav', 'footer', 'header']):
            tag.decompose()
        
        # テキストコンテンツを取得
        text_content = soup.get_text(separator='\n', strip=True)
        
        # 空行を削除して整形
        lines = [line.strip() for line in text_content.split('\n') if line.strip()]
        result['content'] = '\n'.join(lines)
        
        print(f"  ✓ Success: {len(result['content'])} characters")
        
    except requests.exceptions.Timeout:
        result['status'] = 'error'
        result['error'] = 'Timeout'
        print(f"  ✗ Timeout error")
    except requests.exceptions.RequestException as e:
        result['status'] = 'error'
        result['error'] = str(e)
        print(f"  ✗ Request error: {e}")
    except Exception as e:
        result['status'] = 'error'
        result['error'] = str(e)
        print(f"  ✗ Unexpected error: {e}")
    
    return result


def insert_incident(conn: sqlite3.Connection, incident: Dict[str, Any], scrape_result: Dict[str, Any]):
    """インシデントデータをデータベースに挿入"""
    cursor = conn.cursor()
    
    cursor.execute('''
    INSERT INTO incidents (
        tz, datetime_begin, datetime_end, duration, provider,
        source_original, source2_original, articles, root_cause_analysis, trigger,
        scraped_url, scraped_title, scraped_content, scraped_at, scrape_status, scrape_error
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (
        incident['tz'],
        incident['datetime_begin'],
        incident['datetime_end'],
        incident['duration'],
        incident['provider'],
        incident['source_original'],
        incident['source2_original'],
        incident['articles'],
        incident['root_cause_analysis'],
        incident['trigger'],
        scrape_result['url'],
        scrape_result['title'],
        scrape_result['content'],
        datetime.now().isoformat(),
        scrape_result['status'],
        scrape_result['error']
    ))
    
    conn.commit()


def main():
    """メイン処理"""
    print("=" * 80)
    print("障害レポートスクレイピングツール")
    print("=" * 80)
    print()
    
    # データベース作成
    print("データベースを作成中...")
    conn = create_database()
    print("✓ データベース作成完了")
    print()
    
    # 各インシデントを処理
    total = len(INCIDENTS_DATA)
    success_count = 0
    error_count = 0
    skipped_count = 0
    
    print(f"処理対象: {total}件のインシデント")
    print()
    
    for i, incident in enumerate(INCIDENTS_DATA, 1):
        print(f"[{i}/{total}] {incident['provider']}")
        
        # URLをスクレイピング
        url = incident['source_original']
        scrape_result = scrape_url(url)
        
        # データベースに保存
        insert_incident(conn, incident, scrape_result)
        
        if scrape_result['status'] == 'success':
            success_count += 1
        elif scrape_result['status'] == 'error':
            error_count += 1
        else:
            skipped_count += 1
        
        # レート制限を考慮して待機
        if i < total:
            time.sleep(2)
        
        print()
    
    conn.close()
    
    # 結果サマリー
    print("=" * 80)
    print("処理完了")
    print("=" * 80)
    print(f"総数: {total}件")
    print(f"成功: {success_count}件")
    print(f"エラー: {error_count}件")
    print(f"スキップ: {skipped_count}件")
    print()
    print("データベース: incidents.sqlite")
    print("=" * 80)


if __name__ == '__main__':
    main()
