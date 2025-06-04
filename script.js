// メイン機能のJavaScript
class PortfolioManager {
  constructor() {
    this.currentSection = 'home';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderContent();
    this.setupSmoothScrolling();
  }

  // イベントリスナーの設定
  setupEventListeners() {
    // ナビゲーションクリックイベント
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        e.preventDefault();
        const sectionName = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
        this.showSection(sectionName);
      }
    });

    // フォーム送信イベント
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmission(e);
      });
    }
  }

  // セクション表示の制御
  showSection(sectionName) {
    // 全てのセクションを非表示
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });

    // 選択されたセクションを表示
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    // ナビゲーションのアクティブ状態を更新
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // クリックされたリンクにアクティブクラスを追加
    const activeLink = document.querySelector(`[onclick*="${sectionName}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }

    // ページトップにスムーズスクロール
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    this.currentSection = sectionName;
  }

  // コンテンツの動的レンダリング
  renderContent() {
    this.renderHeader();
    this.renderHero();
    this.renderProfile();
    this.renderPublications();
    this.renderPredictions();
    this.renderContact();
    this.renderFooter();
  }

  // ヘッダーのレンダリング
  renderHeader() {
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.textContent = portfolioData.personal.name;
    }

    // ナビゲーションメニューの生成
    const navList = document.querySelector('nav ul');
    if (navList && portfolioData.navigation) {
      navList.innerHTML = portfolioData.navigation.map((item, index) => `
        <li>
          <a href="#" onclick="showSection('${item.id}')" class="nav-link ${index === 0 ? 'active' : ''}">
            ${item.label}
          </a>
        </li>
      `).join('');
    }
  }

  // ヒーローセクションのレンダリング
  renderHero() {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    
    if (heroTitle) {
      heroTitle.textContent = 'Welcome to My Portfolio';
    }
    
    if (heroText) {
      heroText.textContent = portfolioData.personal.heroMessage;
    }
  }

  // プロフィールセクションのレンダリング
  renderProfile() {
    const profileName = document.querySelector('.profile-info h3');
    const profileImage = document.querySelector('.profile-placeholder');
    
    if (profileName) {
      profileName.textContent = `${portfolioData.personal.name} (${portfolioData.personal.nameEn})`;
    }
    
    if (profileImage) {
      profileImage.textContent = portfolioData.personal.profileImage;
    }

    // プロフィール情報の動的生成
    const profileInfo = document.querySelector('.profile-info');
    if (profileInfo && portfolioData.profile) {
      const profileDetails = `
        <h3>${portfolioData.personal.name} (${portfolioData.personal.nameEn})</h3>
        <p><strong>職業:</strong> ${portfolioData.profile.occupation}</p>
        <p><strong>専門分野:</strong> ${portfolioData.profile.specialties}</p>
        <p><strong>学歴:</strong> ${portfolioData.profile.education}</p>
        <p><strong>経歴:</strong> ${portfolioData.profile.career}</p>
        <p><strong>趣味:</strong> ${portfolioData.profile.hobbies}</p>
        <p><strong>言語:</strong> ${portfolioData.profile.languages}</p>
      `;
      profileInfo.innerHTML = profileDetails;
    }
  }

  // 出版物セクションのレンダリング
  renderPublications() {
    const publicationGrid = document.querySelector('.publication-grid');
    if (publicationGrid && portfolioData.publications) {
      publicationGrid.innerHTML = portfolioData.publications.map(pub => `
        <div class="publication-item">
          <h3>${pub.title}</h3>
          <div class="publication-date">${pub.date}</div>
          <p>${pub.description}</p>
        </div>
      `).join('');
    }
  }

  // 競馬予想セクションのレンダリング
  renderPredictions() {
    const predictionsContainer = document.querySelector('.predictions-container');
    if (predictionsContainer && horsePredictionsData) {
      predictionsContainer.innerHTML = horsePredictionsData.map(prediction => `
        <article class="prediction-article">
          <div class="prediction-header">
            <h3>${prediction.raceInfo}</h3>
            <div class="prediction-date">${prediction.date}</div>
          </div>
          <div class="prediction-content">
            <div class="prediction-section">
              <h4>📊 出馬表</h4>
              <table class="entrants-table">
                <thead>
                  <tr>
                    <th>馬番</th>
                    <th>馬名</th>
                    <th>騎手</th>
                    <th>斤量</th>
                    <th>オッズ</th>
                  </tr>
                </thead>
                <tbody>
                  ${prediction.entrants.map(horse => `
                    <tr>
                      <td><span class="horse-number">${horse.number}</span></td>
                      <td>${horse.horse}</td>
                      <td>${horse.jockey}</td>
                      <td>${horse.weight}</td>
                      <td class="odds">${horse.odds}倍</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            
            <div class="prediction-section">
              <h4>🎯 予想</h4>
              <div class="prediction-text">${prediction.prediction}</div>
            </div>
            
            <div class="prediction-section">
              <h4>💰 買い目</h4>
              <div class="betting-info">
                <div class="betting-item">
                  <span class="betting-label">本命:</span>
                  <span class="betting-value">${prediction.betting.main}</span>
                </div>
                <div class="betting-item">
                  <span class="betting-label">対抗:</span>
                  <span class="betting-value">${prediction.betting.sub}</span>
                </div>
                <div class="betting-item">
                  <span class="betting-label">穴狙い:</span>
                  <span class="betting-value">${prediction.betting.wide}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  // 連絡先セクションのレンダリング
  renderContact() {
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo && portfolioData.contact) {
      const contactDetails = `
        <h3>連絡先情報</h3>
        <p><strong>Email:</strong> ${portfolioData.contact.email}</p>
        <p><strong>Phone:</strong> ${portfolioData.contact.phone}</p>
        <p><strong>LinkedIn:</strong> ${portfolioData.contact.linkedin}</p>
        <p><strong>GitHub:</strong> ${portfolioData.contact.github}</p>
        <p><strong>所在地:</strong> ${portfolioData.contact.location}</p>
        
        <h3 style="margin-top: 2rem">営業時間</h3>
        <p>${portfolioData.contact.businessHours.weekdays}</p>
        <p>${portfolioData.contact.businessHours.saturday}</p>
        <p>${portfolioData.contact.businessHours.sunday}</p>
      `;
      contactInfo.innerHTML = contactDetails;
    }
  }

  // フッターのレンダリング
  renderFooter() {
    const footer = document.querySelector('footer');
    if (footer && portfolioData.contact) {
      footer.innerHTML = `
        <p>&copy; 2024 ${portfolioData.personal.name} (${portfolioData.personal.nameEn}) | ${portfolioData.contact.address}</p>
        <p>Email: ${portfolioData.contact.email} | Tel: ${portfolioData.contact.phone}</p>
      `;
    }
  }

  // フォーム送信の処理
  handleFormSubmission(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // ここで実際のフォーム送信処理を行う
    console.log('フォームデータ:', data);
    
    alert('お問い合わせありがとうございます。後日ご連絡させていただきます。');
    e.target.reset();
  }

  // スムーズスクロールの設定
  setupSmoothScrolling() {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    });
  }
}

// グローバル関数（後方互換性のため）
function showSection(sectionName) {
  if (window.portfolioManager) {
    window.portfolioManager.showSection(sectionName);
  }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioManager = new PortfolioManager();
});
