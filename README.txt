家計・オデッセイ資金管理 v5.4
0円表示・根本修正版

【根本原因】
v5.0で3カード対応を追加した際、支払計算 paymentSummary() のapollostation集計が
存在しない変数 cardTx を参照していました。
そのため paymentSummary() が途中で停止し、今日のお金ナビ・3カード支払ナビなどが
HTML初期値の0円のまま表示されていました。

【v5.4修正】
・未定義 cardTx を廃止し、実際の保存明細 auTransactions に統一
・v5.4初回に重要項目を0円から再復旧
・保存済みau PAY明細から未確定利用額を再構築
・au PAYの日次予算/未確定額はau PAY明細だけを使用
・イオン/apollostation明細をau PAY集計に混ぜない
・明細の重複判定にカード種別を追加
・apollostation: ガソリン/値引き/その他利用を分類
・明細登録時の未定義 amount / 分類引数の不具合も修正
・JavaScript構文チェック実施
・主要計算の実行テスト実施

【内部テスト結果】
{"bank82":93870,"jibun":866,"apollo":20197,"apolloNext":2769,"mobile":56997,"auBudget":90000,"free82":16676,"today":4500}

GitHub Pages更新:
index.html / manifest.json / sw.js を上書きしてください。
