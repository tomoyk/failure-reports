# GitHub Actions ワークフロー

## rebuild-docs.yml

SQLiteデータベースが更新されたときに、自動的に`docs/data/incidents.js`を再ビルドしてPRを作成するワークフローです。

### セットアップ

このワークフローを正常に動作させるには、以下のいずれかの設定が必要です：

#### オプション1: GitHub Actionsにワークフロー権限を付与（推奨）

1. GitHubリポジトリの「Settings」→「Actions」→「General」に移動
2. 「Workflow permissions」セクションを見つける
3. 以下のいずれかを選択：
   - **「Read and write permissions」を選択**
   - **「Allow GitHub Actions to create and approve pull requests」にチェック**を入れる
4. 「Save」をクリック

#### オプション2: Personal Access Token (PAT)を使用

GitHub Actionsにワークフロー権限を付与できない場合は、PATを使用してください：

1. GitHubで[Personal Access Token](https://github.com/settings/tokens/new)を作成
   - Token name: `Rebuild Docs Workflow`
   - Expiration: 適切な期限を設定
   - Scopes: `repo` と `workflow` を選択
2. トークンをコピー
3. リポジトリの「Settings」→「Secrets and variables」→「Actions」に移動
4. 「New repository secret」をクリック
5. Name: `PAT_TOKEN`
6. Secret: コピーしたトークンを貼り付け
7. 「Add secret」をクリック

### トリガー条件

- **自動実行**: `main`ブランチにSQLiteファイル（`*.sqlite`, `*.sqlite3`, `*.db`）がプッシュされたとき
- **手動実行**: GitHub ActionsのUIから「Run workflow」ボタンで実行可能

### 動作

1. Python環境をセットアップ
2. 必要な依存パッケージをインストール
3. `python3 export_site_data.py`を実行
4. 変更があれば自動的にPRを作成
5. 変更がなければ何もしない

### トラブルシューティング

#### "GitHub Actions is not permitted to create or approve pull requests" エラー

このエラーが表示される場合は、上記の「セットアップ」セクションのいずれかの方法で権限を設定してください。

#### PRが作成されない

- ワークフローが実行されているか確認（Actions タブ）
- `docs/data/incidents.js`に実際に変更があるか確認
- ワークフローのログを確認してエラーがないかチェック
