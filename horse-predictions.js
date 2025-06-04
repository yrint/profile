// 競馬予想データファイル - 予想記事の管理用
const horsePredictionsData = [
  {
    id: 1,
    date: "2025年6月8日",
    raceInfo: "東京11R G1 安田記念",
    entrants: [
      { number: 1, horse: "ドウデュース", jockey: "福永祐一", weight: "58kg", odds: "3.2" },
      { number: 2, horse: "イクイノックス", jockey: "ルメール", weight: "58kg", odds: "2.1" },
      { number: 3, horse: "ジャックドール", jockey: "戸崎圭太", weight: "58kg", odds: "8.5" },
      { number: 4, horse: "グランアレグリア", jockey: "川田将雅", weight: "55kg", odds: "4.8" },
      { number: 5, horse: "アルムデスティヌ", jockey: "武豊", weight: "58kg", odds: "12.3" }
    ],
    prediction: "今回の安田記念は、昨年の有馬記念勝ちのイクイノックスが中心となりそうです。ただし、春のG1戦線で好調なドウデュースも侮れません。マイル戦での実績を重視すると、グランアレグリアにも十分チャンスがあります。",
    betting: {
      main: "2番 イクイノックス単勝",
      sub: "2-1, 2-4 馬連",
      wide: "1-2-4 三連複"
    }
  },
  {
    id: 2,
    date: "2025年6月15日",
    raceInfo: "阪神12R G1 宝塚記念",
    entrants: [
      { number: 1, horse: "タイトルホルダー", jockey: "横山武史", weight: "58kg", odds: "4.2" },
      { number: 2, horse: "パンサラッサ", jockey: "吉田隼人", weight: "58kg", odds: "6.8" },
      { number: 3, horse: "ベラジオオペラ", jockey: "坂井瑠星", weight: "55kg", odds: "15.2" },
      { number: 4, horse: "リバティアイランド", jockey: "田辺裕信", weight: "55kg", odds: "9.3" },
      { number: 5, horse: "アリーヴォ", jockey: "藤岡佑介", weight: "58kg", odds: "18.5" }
    ],
    prediction: "宝塚記念は中長距離の王者決定戦。タイトルホルダーの安定感が光りますが、海外遠征で力をつけたパンサラッサも注目。牝馬のリバティアイランドは斤量の恩恵もあり、穴馬として面白い存在です。",
    betting: {
      main: "1番 タイトルホルダー単勝",
      sub: "1-2, 1-4 馬連",
      wide: "1-2-4 三連複"
    }
  },
  {
    id: 3,
    date: "2025年6月22日",
    raceInfo: "東京10R 3歳上2勝クラス",
    entrants: [
      { number: 1, horse: "サンプルホース", jockey: "サンプル騎手", weight: "57kg", odds: "5.8" },
      { number: 2, horse: "テストランナー", jockey: "テスト騎手", weight: "56kg", odds: "8.2" },
      { number: 3, horse: "モックレーサー", jockey: "モック騎手", weight: "55kg", odds: "12.1" },
      { number: 4, horse: "ダミーフライヤー", jockey: "ダミー騎手", weight: "57kg", odds: "3.9" },
      { number: 5, horse: "エグザンプル", jockey: "エグザンプル騎手", weight: "56kg", odds: "15.7" }
    ],
    prediction: "中級戦での予想です。ダミーフライヤーが前走好内容で上がってきており、今回も期待できそうです。サンプルホースは安定感があり、堅実に来る可能性が高いです。",
    betting: {
      main: "4番 ダミーフライヤー単勝",
      sub: "1-4, 2-4 馬連",
      wide: "1-2-4 三連複"
    }
  }
];

/*
新しい予想記事を追加するには、以下の形式で配列に追加してください：

{
  id: 4, // 次の番号
  date: "2025年7月1日",
  raceInfo: "競馬場名+R数 クラス名 レース名",
  entrants: [
    { number: 馬番, horse: "馬名", jockey: "騎手名", weight: "斤量", odds: "オッズ" },
    // 他の出走馬...
  ],
  prediction: "予想の詳細分析...",
  betting: {
    main: "本命の買い目",
    sub: "対抗の買い目",
    wide: "穴狙いの買い目"
  }
}
*/
