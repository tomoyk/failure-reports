# Incidents Database 使用ガイド

## 概要

このデータベース（`incidents.sqlite`）には、Web系システムの障害レポートデータがスクレイピングされて保存されています。

## データソース

- **元データ**: [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1kt1Rz-DtPSf0faz_EICI50sYWglEy1-LGBRq57X58J0/edit?gid=0#gid=0)
- **総レコード数**: 25件
- **スクレイピング成功**: 23件
- **スクレイピングエラー**: 1件
- **スキップ**: 1件（空URL）

## データベーススキーマ

### テーブル: `incidents`

| カラム名 | 型 | 説明 |
|---------|-----|------|
| `id` | INTEGER | 主キー（自動採番） |
| `tz` | TEXT | タイムゾーン |
| `datetime_begin` | TEXT | 障害開始日時 |
| `datetime_end` | TEXT | 障害終了日時 |
| `duration` | TEXT | 障害継続時間 |
| `provider` | TEXT | サービスプロバイダー名 |
| `source_original` | TEXT | オリジナルレポートURL |
| `source2_original` | TEXT | 第2のソースURL |
| `articles` | TEXT | 記事タイトル |
| `root_cause_analysis` | TEXT | 根本原因分析 |
| `trigger` | TEXT | トリガー（障害種類） |
| `scraped_url` | TEXT | スクレイピングしたURL |
| `scraped_title` | TEXT | スクレイピングしたページタイトル |
| `scraped_content` | TEXT | スクレイピングした本文 |
| `scraped_at` | TEXT | スクレイピング実行日時 |
| `scrape_status` | TEXT | スクレイピング状態（success/error/skipped） |
| `scrape_error` | TEXT | エラーメッセージ（エラー時のみ） |
| `created_at` | TEXT | レコード作成日時 |

## SQLクエリ例

### 1. 全レコード数を取得

```sql
SELECT COUNT(*) FROM incidents;
```

### 2. スクレイピング状態別の集計

```sql
SELECT scrape_status, COUNT(*) as count 
FROM incidents 
GROUP BY scrape_status;
```

### 3. プロバイダー別の障害件数

```sql
SELECT provider, COUNT(*) as incident_count 
FROM incidents 
WHERE provider != '' 
GROUP BY provider 
ORDER BY incident_count DESC;
```

### 4. トリガー（障害種類）別の集計

```sql
SELECT trigger, COUNT(*) as count 
FROM incidents 
WHERE trigger != '' 
GROUP BY trigger 
ORDER BY count DESC;
```

### 5. 特定のプロバイダーの詳細情報を取得

```sql
SELECT 
    provider,
    datetime_begin,
    duration,
    root_cause_analysis,
    source_original
FROM incidents 
WHERE provider = 'AWS';
```

### 6. スクレイピングしたコンテンツの長さ順

```sql
SELECT 
    id,
    provider,
    LENGTH(scraped_content) as content_length,
    scrape_status
FROM incidents 
WHERE scrape_status = 'success'
ORDER BY content_length DESC 
LIMIT 10;
```

### 7. 特定のキーワードを含む障害を検索

```sql
SELECT 
    provider,
    articles,
    root_cause_analysis
FROM incidents 
WHERE root_cause_analysis LIKE '%MySQL%' 
   OR scraped_content LIKE '%MySQL%';
```

### 8. エラーが発生したスクレイピングを確認

```sql
SELECT 
    provider,
    source_original,
    scrape_error
FROM incidents 
WHERE scrape_status = 'error';
```

## データベースの使い方

### コマンドラインから

```bash
# SQLiteコマンドで開く
sqlite3 incidents.sqlite

# クエリ実行
sqlite3 incidents.sqlite "SELECT * FROM incidents LIMIT 5;"
```

### Pythonから

```python
import sqlite3

# データベースに接続
conn = sqlite3.connect('incidents.sqlite')
cursor = conn.cursor()

# クエリ実行
cursor.execute('SELECT * FROM incidents WHERE provider = ?', ('AWS',))
results = cursor.fetchall()

for row in results:
    print(row)

conn.close()
```

## スクレイピングの再実行

もう一度スクレイピングを実行する場合：

```bash
python3 scrape_incidents.py
```

**注意**: データベースは上書きされず、レコードが追加されます。新規にスクレイピングする場合は、まずデータベースを削除してください。

```bash
rm incidents.sqlite
python3 scrape_incidents.py
```

## トラブルシューティング

### エラーレコードの確認

1件のエラーが発生しています（datacenterdynamics.com が403 Forbiddenを返しました）。

```sql
SELECT provider, source_original, scrape_error 
FROM incidents 
WHERE scrape_status = 'error';
```

結果:
- Provider: Salesforce's
- URL: https://www.datacenterdynamics.com/en/opinions/salesforce-database-outage-why-it-happened-and-how-prevent-another-one/
- Error: 403 Client Error: Forbidden

このサイトはスクレイピングをブロックしている可能性があります。
