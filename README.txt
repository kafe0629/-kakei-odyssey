家計・オデッセイ資金管理 v4.0 PWA

GitHub Pages のリポジトリ直下へ以下4ファイルを上書きしてください。
- index.html
- manifest.json
- sw.js
- README.txt

v4.0ではPWAの更新キャッシュ処理を改善しています。
HTMLはネットワーク優先で取得し、新しいService Workerは即時有効化します。

更新後も古い版が出る場合：
1. SafariでGitHub Pages URLを直接開く
2. v4.0表示を確認
3. ホーム画面の旧PWAを削除
4. Safariの共有→ホーム画面に追加


v4.0: 今日の買い物クイック登録（500/1000/3000円）、金額＋メモ登録、今日の利用履歴・削除に対応。登録額は今日利用額とau PAY未確定利用額へ同時反映します。
