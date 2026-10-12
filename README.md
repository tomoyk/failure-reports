# Failure Reports Database

Web系システムの障害レポートを収集・分析するためのプロジェクトです。

## 概要

このプロジェクトは、様々なWeb系サービス（AWS、GitHub、Cloudflare、Discord等）で発生した障害レポートを収集し、SQLiteデータベースに保存します。

## ファイル構成

- `scrape_incidents.py` - 障害レポートをスクレイピングするPythonスクリプト
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
pip install requests beautifulsoup4

# スクレイピングを実行
python3 scrape_incidents.py
```

### データベースの確認

```bash
# レコード総数
sqlite3 incidents.sqlite "SELECT COUNT(*) FROM incidents;"

# 最初の5件を表示
sqlite3 incidents.sqlite "SELECT id, provider, articles FROM incidents LIMIT 5;"
```

## 収集データ

- **総レコード数**: 25件
- **スクレイピング成功**: 23件
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
