# Failure Reports Database

Web系システムの障害レポートを収集・分析するためのプロジェクトです。

## 概要

このプロジェクトは、様々なWeb系サービス（AWS、GitHub、Cloudflare、Discord等）で発生した障害レポートを収集し、SQLiteデータベースに保存します。

## ファイル構成

- `incident_scraper.py` - スプレッドシート全行を取得するスクレイピング実装
- `scrape_incidents.py` - 互換用エントリーポイント
- `export_site_data.py` - SQLiteから公開サイト用データ(`docs/data/incidents.js`)を書き出す
- `docs/` - 公開用の静的サイト(HTML / CSS / JavaScript。ビルド不要)
- `incidents.sqlite` - 障害データを保存したSQLiteデータベース
- `DATABASE_USAGE.md` - データベースの使用方法ガイド

## データソース

元データは以下のGoogle Spreadsheetから取得しています：
https://docs.google.com/spreadsheets/d/1kt1Rz-DtPSf0faz_EICI50sYWglEy1-LGBRq57X58J0/edit?gid=0#gid=0

## クイックスタート

### 必要な環境

- Python 3.x
- pip

### セットアップ

```bash
# 必要なパッケージをインストール
pip install requests beautifulsoup4 pypdf

# スプレッドシートを再取得し、DBを置き換える
python3 scrape_incidents.py
```

スクレイピングは次の方針で `scraped_title` を必ず埋めます。

- `Source (original)` → `Source 2 (original)` → `Articles` / `Provider` 列内のURLの順に候補を試し、タイトルが取れた最初のURLを `scraped_url` に記録
- タイトルは `og:title` → `twitter:title` → `<title>` → `<h1>` の順、PDFはメタデータまたは先頭の見出し
- 403/404などで直接取得できない場合は Wayback Machine から取得し、その旨を `scrape_error` に記録(`scrape_status` は `success`)
- スプレッドシートにURLが無い行は `incident_scraper.py` の `SUPPLEMENTAL_SOURCES` で補う
- タイトルが空の行が1件でも残る場合はエラー終了し、DBは更新しない

### Webページの公開

`docs/` に静的サイトがあります。データの更新後は次のコマンドでサイト用データを作り直します。

```bash
python3 scrape_incidents.py     # DBを再生成
python3 export_site_data.py     # docs/data/incidents.js を更新
```

ローカルで確認する場合は `python3 -m http.server -d docs` を実行し、`http://localhost:8000/` を開きます(`docs/index.html` を直接開いても動作します)。

GitHub Pages で公開する場合は、リポジトリの Settings → Pages で Source を「Deploy from a branch」、Branch を `main` / `/docs` に設定します。

サイトの機能: キーワード検索、サービス・発生年・引き金での絞り込み(グラフのクリックでも可)、並べ替え、詳細表示、ライト/ダークテーマ。絞り込み条件はURLに保存されるため、そのまま共有できます。

### データベースの確認

```bash
# レコード総数
sqlite3 incidents.sqlite "SELECT COUNT(*) FROM incidents;"

# 最初の5件を表示
sqlite3 incidents.sqlite "SELECT id, provider, articles FROM incidents LIMIT 5;"
```

## 収集データ

- `gid=0` の見出し後にある非空データ行: 59件
- `Source (original)` にHTTP(S) URLがある行: 55件
- Sourceが欠損している行も、空セルを保持したままDBへ保存
- **主要プロバイダー**: AWS, Cloudflare, GitHub, Discord, Honeycomb, Asana等

各障害レポートには以下の情報が含まれます：
- 障害発生日時・終了日時
- 障害継続時間
- サービスプロバイダー名
- 根本原因分析
- 障害のトリガー（種類）
- オリジナルレポートURL
- スクレイピングした記事本文

## 使用方法

詳細な使用方法については、[DATABASE_USAGE.md](DATABASE_USAGE.md)を参照してください。

## ライセンス

このプロジェクトはデータ収集・分析を目的としています。収集したデータの著作権は各オリジナルソースに帰属します。
