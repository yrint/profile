// データファイル - 更新しやすいように情報を分離
const portfolioData = {
  // 基本情報
  personal: {
    name: "山中凜太郎",
    nameEn: "Rintaro Yamanaka",
    title: "ソフトウェアエンジニア",
    heroMessage: "ソフトウェア開発者として、革新的なソリューションの創造に情熱を注いでいます。技術と創造性を融合させ、ユーザーに価値を提供するプロダクトの開発に取り組んでいます。",
    profileImage: "プロフィール画像" // 実際の画像パスに変更可能
  },

  // プロフィール情報
  profile: {
    occupation: "ソフトウェアエンジニア",
    specialties: "Web開発、機械学習、データサイエンス",
    education: "慶應義塾大学 情報科学科 卒業",
    career: "テクノロジー企業で5年間のソフトウェア開発経験を積み、現在はフリーランスとして活動。React、Python、機械学習を得意とし、スタートアップから大企業まで幅広いクライアントと協働。",
    hobbies: "読書、登山、写真撮影",
    languages: "日本語（ネイティブ）、英語（ビジネスレベル）"
  },

  // 論文・出版物
  publications: [
    {
      title: "機械学習を用いたWebアプリケーション最適化手法",
      date: "2024年3月",
      description: "Webアプリケーションのパフォーマンス向上のために機械学習アルゴリズムを適用した研究。ユーザー行動パターンの分析により、レスポンス時間を30%改善する手法を提案。"
    },
    {
      title: "React Hooksを活用したモダンフロントエンド設計",
      date: "2023年11月",
      description: "React 18の新機能を活用したスケーラブルなフロントエンドアーキテクチャの設計パターンについて。実際のプロジェクトでの実装例と性能評価を含む。"
    },
    {
      title: "データ可視化における UX デザインの重要性",
      date: "2023年8月",
      description: "複雑なデータを直感的に理解できる可視化手法の研究。D3.jsとReactを組み合わせたインタラクティブなダッシュボード開発について。"
    },
    {
      title: "クラウドネイティブアプリケーションの監視とロギング",
      date: "2023年5月",
      description: "Kubernetes環境でのマイクロサービス監視システムの構築。Prometheus、Grafana、ELKスタックを用いた包括的な監視ソリューション。"
    }
  ],

  // 連絡先情報
  contact: {
    email: "contact@yamanaka-rintaro.com",
    phone: "+81-90-1234-5678",
    linkedin: "linkedin.com/in/rintaro-yamanaka",
    github: "github.com/yrint",
    location: "東京都渋谷区",
    address: "〒150-0002 東京都渋谷区渋谷1-2-3 テクノロジービル5F",
    businessHours: {
      weekdays: "月曜日 - 金曜日: 9:00 - 18:00",
      saturday: "土曜日: 10:00 - 16:00",
      sunday: "日曜日: 休業"
    }
  },

  // ナビゲーションメニュー
  navigation: [
    { id: "home", label: "Home" },
    { id: "profile", label: "Profile" },
    { id: "publication", label: "Publication" },
    { id: "contact", label: "Contact" }
  ]
};
