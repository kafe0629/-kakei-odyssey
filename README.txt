家計・オデッセイ資金管理 v6.1
車ローン 自動おすすめ判定追加版

【新機能】
車計画のローンシミュレーターに
「家計から自動おすすめ判定」を追加しました。

比較対象:
・月35,000円
・月40,000円
・月45,000円

判定ルール:
1. 購入後の既知支出後に月100,000円以上残る
2. 現在予定の頭金から追加100,000円以内を優先
3. 返済期間9年以内を優先
4. 上の条件を満たす中で最も月返済が低い案をおすすめ
5. 条件を満たす案がなければ、月額削減・追加頭金・返済期間のバランス点で選択

おすすめ欄では:
・おすすめ月額 / 返済期間
・現在から月いくら軽くなるか
・必要頭金
・購入後の家計余力
・生活防衛資金
・3.5万 / 4万 / 4.5万の比較理由
を表示します。

「おすすめプランを採用」を押した時だけ設定へ反映します。

【現在設定での判定テスト】
{
  "recommendedTarget": 40000,
  "recommendedYears": 9,
  "requiredDown": 1968633,
  "monthly": 40000,
  "monthlySaving": 9698,
  "remain": 117446,
  "candidates": [
    {
      "target": 35000,
      "years": 10,
      "requiredDown": 2122839,
      "extraDown": 122839,
      "monthlySaving": 14698,
      "remain": 122446,
      "preferred": false
    },
    {
      "target": 40000,
      "years": 9,
      "requiredDown": 1968633,
      "extraDown": 0,
      "monthlySaving": 9698,
      "remain": 117446,
      "preferred": true
    },
    {
      "target": 45000,
      "years": 8,
      "requiredDown": 1918617,
      "extraDown": 0,
      "monthlySaving": 4698,
      "remain": 112446,
      "preferred": true
    }
  ]
}

このテスト条件では:
おすすめ = 月40,000円 / 9年
必要頭金 ≒ 1,968,633円
現在予定の頭金2,000,000円以内
現在7年プランより月約9,700円軽減

【維持】
v6.0.1までの全機能を維持しています。
・車ローン7〜10年シミュレーター
・利用月 / 請求月
・apollostation請求調整の利用月除外
・3カード自動集計
・光熱費50%夫婦精算
・産休中家賃50,000円
・自由資金計算
・バックアップ
・5ページ分離

【検証】
JavaScript構文: OK
ページ構造: ['home', 'monthly', 'car', 'schedule', 'settings']

【GitHub Pages】
index.html / manifest.json / sw.js を3つとも上書きしてください。
