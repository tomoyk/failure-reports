# Incidents Database 使用ガイド

## 概要

このデータベース（`incidents.sqlite`）には、Web系システムの障害レポートデータがスクレイピングされて保存されています。

## データソース

- **元データ**: [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1kt1Rz-DtPSf0faz_EICI50sYWglEy1-LGBRq57X58J0/edit?gid=0#gid=0)
- **総データ行数**: 59件
- **`Source (original)` URL保有行数**: 55件
- **Source欠損行数**: 4件

スクレイピングの成功・失敗件数は接続先の状態により変動します。

## データベーススキーマ

### テーブル: `incidents`

| カラム名 | 型 | 説明 |
|---------|-----|------|
| `id` | INTEGER | 主キー（自動採番） |
| `sheet_gid` | TEXT | 取得元シートのgid |
| `sheet_row` | INTEGER | 取得元シートの行番号 |
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
| `root_cause_tags` | TEXT | 根本原因の分類（カンマ区切り。公開記事から付与） |
| `scraped_url` | TEXT | スクレイピングしたURL |
| `scraped_final_url` | TEXT | リダイレクト後の最終URL |
| `scraped_title` | TEXT | スクレイピングしたページタイトル |
| `scraped_content` | TEXT | スクレイピングした本文 |
| `scraped_at` | TEXT | スクレイピング実行日時 |
| `scrape_status` | TEXT | スクレイピング状態（success/error/skipped） |
| `scrape_error` | TEXT | エラーメッセージ（エラー時のみ） |
| `http_status` | INTEGER | HTTPステータスコード |

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

スプレッドシートを再取得して一時DBを作成し、成功時に
`incidents.sqlite` を置き換えます。途中で失敗した場合、既存DBは保持されます。

## トラブルシューティング

### エラーレコードの確認

```sql
SELECT provider, source_original, scrape_error 
FROM incidents 
WHERE scrape_status = 'error';
```
