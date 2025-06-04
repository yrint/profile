# ポートフォリオサイト

山中凜太郎のポートフォリオサイトです。

## ファイル構成

```
├── index.html              # メインのHTMLファイル
├── styles.css              # スタイル定義
├── script.js               # JavaScript機能
├── data.js                 # 基本データ定義（プロフィール、連絡先等）
├── horse-predictions.js    # 競馬予想データ（更新用）
└── README.md               # このファイル
```

## 情報の更新方法

### 1. 基本情報の更新

`data.js`ファイルの`portfolioData`オブジェクトを編集してください：

```javascript
const portfolioData = {
  personal: {
    name: "あなたの名前",
    nameEn: "Your Name in English",
    // ...
  },
  // ...
};
```

### 2. プロフィール情報の更新

`data.js`の`profile`セクションを編集：

```javascript
profile: {
  occupation: "職業",
  specialties: "専門分野",
  education: "学歴",
  // ...
}
```

### 3. 出版物・研究の追加/編集

`data.js`の`publications`配列に新しい項目を追加または既存項目を編集：

```javascript
publications: [
  {
    title: "新しい論文のタイトル",
    date: "2024年6月",
    description: "論文の説明..."
  },
  // ...
]
```

### 4. 競馬予想記事の追加/編集

`data.js`の`horsePredictions`配列に新しい予想記事を追加：

```javascript
horsePredictions: [
  {
    id: 3,
    date: "2025年6月22日",
    raceInfo: "札幌11R G1 札幌記念",
    entrants: [
      { number: 1, horse: "馬名", jockey: "騎手名", weight: "斤量", odds: "オッズ" },
      // ... 他の出走馬
    ],
    prediction: "レース予想の詳細分析...",
    betting: {
      main: "本命の買い目",
      sub: "対抗の買い目", 
      wide: "穴狙いの買い目"
    }
  }
]
```

### 5. 連絡先情報の更新

`data.js`の`contact`セクションを編集：

```javascript
contact: {
  email: "your-email@example.com",
  phone: "あなたの電話番号",
  // ...
}
```

## スタイルのカスタマイズ

`styles.css`ファイルを編集してデザインを変更できます：

- 色の変更: CSS変数や色コードを編集
- レイアウトの調整: グリッドやフレックスボックスの設定を変更
- フォントの変更: font-familyプロパティを編集

## 機能の追加

`script.js`ファイルに新しい機能を追加できます：

- 新しいセクションの追加
- アニメーション効果の追加
- フォーム処理の拡張

## GitHub Pagesでの公開

1. GitHubリポジトリにファイルをコミット・プッシュ
2. リポジトリの設定でGitHub Pagesを有効化
3. `https://yourusername.github.io/repository-name`でアクセス可能

## ローカル開発

簡単なHTTPサーバーを起動してローカルで確認：

```bash
# Python 3を使用
python -m http.server 8000

# Node.jsのhttp-serverを使用
npx http-server

# VS Codeのlive-serverエクステンションを使用
```

## サポートするブラウザ

- Chrome (推奨)
- Firefox
- Safari
- Edge

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
