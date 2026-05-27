const TEMPLATES = [
  {
    id: "template-001",
    slug: "mukang-aesthetics",
    name: "沐光美學",
    description: "適合美容美學工作室的高信任感網站。以溫暖的大地色系與 Split Layout 營造專業且親切的品牌形象。",
    industry: "美容健康",
    industryCategory: "美容健康",
    colorTheme: "暖土陶窯",
    colorHex: "#fef7f0 / #e07b53 / #2d5016",
    backgroundMode: "light",
    layoutType: "左右分割 Split Layout",
    previewImage: "assets/img/template-001-mukang-aesthetics-preview.jpg",
    zipFile: "downloads/template-001-mukang-aesthetics.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: true,
    promptFile: "templates/template-001-mukang-aesthetics/prompt.md",
    tags: ["美容健康", "暖色系", "Split Layout", "大地色", "高信任感"]
  },
  {
    id: "template-002",
    slug: "wild-flavor",
    name: "野葉味",
    description: "餐飲甜點品牌的 Magazine Editorial 風格。Playfair Display 襯線字體搭配大地色系，呈現精緻的視覺體驗。",
    industry: "餐飲",
    industryCategory: "餐飲",
    colorTheme: "大地色",
    colorHex: "#f5f0eb / #8b4513 / #4a7c59",
    backgroundMode: "light",
    layoutType: "Magazine Editorial",
    previewImage: "assets/img/template-002-wild-flavor-preview.jpg",
    zipFile: "downloads/template-002-wild-flavor.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-002-wild-flavor/prompt.md",
    tags: ["餐飲", "Magazine", "編輯風格", "襯線字體", "大地色"]
  },
  {
    id: "template-003",
    slug: "slow-island",
    name: "慢島",
    description: "旅遊休閒網站的大圖沉浸式 Dark 設計。深海藍調與 Plus Jakarta Sans 現代字體，創造身歷其境的視覺效果。",
    industry: "旅遊",
    industryCategory: "旅遊",
    colorTheme: "深海藍調",
    colorHex: "#0f1923 / #38bdf8 / #1a3a4a",
    backgroundMode: "dark",
    layoutType: "大圖沉浸式 Immersive Dark",
    previewImage: "assets/img/template-003-slow-island-preview.jpg",
    zipFile: "downloads/template-003-slow-island.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-003-slow-island/prompt.md",
    tags: ["旅遊", "Dark Mode", "沉浸式", "大圖", "深海藍"]
  },
  {
    id: "template-004",
    slug: "humming-tech",
    name: "蜂鳥科技",
    description: "科技商務網站的 Bento Grid 暗金美學。DM Sans 搭配暗金配色，融合簡約現代感與高級質感。",
    industry: "科技",
    industryCategory: "科技",
    colorTheme: "暗金",
    colorHex: "#0c0c0c / #d4a843 / #1a1a1a",
    backgroundMode: "dark",
    layoutType: "Bento Grid 暗金美學",
    previewImage: "assets/img/template-004-humming-tech-preview.jpg",
    zipFile: "downloads/template-004-humming-tech.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-004-humming-tech/prompt.md",
    tags: ["科技", "Bento Grid", "暗金", "DM Sans", "卡片式"]
  },
  {
    id: "template-005",
    slug: "zenith-editorial",
    name: "Zenith Editorial",
    description: "專業服務文字導向編輯風格，黑白金配色，極致留白，襯線字體建立權威形象。適合律師事務所、財務顧問、高階人資。",
    industry: "專業服務",
    industryCategory: "專業服務",
    colorTheme: "極致純黑",
    colorHex: "#000000 / #fafafa / #c9a84c",
    backgroundMode: "dark",
    layoutType: "Editorial 文字導向",
    previewImage: "assets/img/template-005-zenith-editorial-preview.jpg",
    zipFile: "downloads/template-005-zenith-editorial.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: true,
    promptFile: "templates/template-005-zenith-editorial/prompt.md",
    tags: ["專業服務", "文字導向", "編輯風格", "黑白金", "襯線字體"]
  },
  {
    id: "template-006",
    slug: "kinetic-studio",
    name: "Kinetic Studio",
    description: "創意工作室的 Parallax Scrolling 視差滾動設計。Syne 字體搭配活力橙，動感十足，適合強調創意與能量的品牌。",
    industry: "創意服務",
    industryCategory: "創意服務",
    colorTheme: "活力橙",
    colorHex: "#FF5C00 / #1a1a1a / #fafafa",
    backgroundMode: "dark",
    layoutType: "Parallax Scrolling 視差滾動",
    previewImage: "assets/img/template-006-kinetic-studio-preview.jpg",
    zipFile: "downloads/template-006-kinetic-studio.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-006-kinetic-studio/prompt.md",
    tags: ["創意服務", "視差滾動", "Parallax", "活力橙", "Syne"]
  },
  {
    id: "template-007",
    slug: "eduflow",
    name: "EduFlow",
    description: "線上學習平台的 Metro Tiles 儀表板設計。靛藍翠綠配色搭配 Plus Jakarta Sans，清晰資訊架構，適合教育科技產業。",
    industry: "線上學習",
    industryCategory: "線上學習",
    colorTheme: "靛藍翠綠",
    colorHex: "#4F46E5 / #10B981 / #f0fdf4",
    backgroundMode: "light",
    layoutType: "Metro Tiles 儀表板",
    previewImage: "assets/img/template-007-eduflow-preview.jpg",
    zipFile: "downloads/template-007-eduflow.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-007-eduflow/prompt.md",
    tags: ["線上學習", "Metro Tiles", "儀表板", "教育科技", "資訊架構"]
  },
  {
    id: "template-008",
    slug: "haus-stay",
    name: "Haus Stay",
    description: "精品民宿的 Swiss Minimalist 瑞士極簡風格。Instrument Serif 襯線字體搭配暖白琥珀，優雅而溫暖，適合精品住宿品牌。",
    industry: "精品民宿",
    industryCategory: "精品民宿",
    colorTheme: "暖白琥珀",
    colorHex: "#FAFAF9 / #D97706 / #1C1917",
    backgroundMode: "light",
    layoutType: "Swiss Minimalist 瑞士極簡",
    previewImage: "assets/img/template-008-haus-stay-preview.jpg",
    zipFile: "downloads/template-008-haus-stay.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-008-haus-stay/prompt.md",
    tags: ["精品民宿", "Swiss", "極簡", "襯線字體", "暖白"]
  },
  {
    id: "template-009",
    slug: "verde-leaf",
    name: "Verde Leaf",
    description: "健康蔬食與植物性餐廳的有機曲線設計。Fraunces 字體搭配薄荷綠與森林綠，自然流動的視覺語言。",
    industry: "健康蔬食",
    industryCategory: "健康蔬食",
    colorTheme: "薄荷綠",
    colorHex: "#F0FDF4 / #15803D / #F97316",
    backgroundMode: "light",
    layoutType: "Fluid Organic 自然流動",
    previewImage: "assets/img/template-009-verde-leaf-preview.jpg",
    zipFile: "downloads/template-009-verde-leaf.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-009-verde-leaf/prompt.md",
    tags: ["健康蔬食", "植物性", "有機", "波浪曲線", "薄荷綠"]
  },
  {
    id: "template-010",
    slug: "axiom-space",
    name: "Axiom Space",
    description: "室內設計與建築空間網站，Split Screen 雙欄雙面設計。深灰黑銀配色，動與靜、圖與文的對話，適合室內設計、建築與空間品牌。",
    industry: "室內設計",
    industryCategory: "室內設計",
    colorTheme: "深灰黑銀",
    colorHex: "#18181B / #27272A / #71717A / #F4F4F5",
    backgroundMode: "dark",
    layoutType: "Split Screen 雙欄雙面",
    previewImage: "assets/img/template-010-axiom-space-preview.jpg",
    zipFile: "downloads/template-010-axiom-space.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-010-axiom-space/prompt.md",
    tags: ["室內設計", "Split Screen", "雙欄", "銀灰", "建築空間"]
  },
  {
    id: "template-011",
    slug: "lumiere-photo",
    name: "LUMIÈRE Photo",
    description: "婚禮攝影與精品相簿網站，Full-screen Gallery 與 Masonry Grid 呈現。奶油白底配啞光金，優雅的婚禮美學。",
    industry: "婚禮攝影",
    industryCategory: "婚禮攝影",
    colorTheme: "奶油白",
    colorHex: "#FAF8F5 / #C9A84C / #2A2A2A",
    backgroundMode: "light",
    layoutType: "Full-screen Gallery + Masonry Grid",
    previewImage: "assets/img/template-011-lumiere-photo-preview.jpg",
    zipFile: "downloads/template-011-lumiere-photo.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-011-lumiere-photo/prompt.md",
    tags: ["婚禮攝影", "婚紗", "Masonry Grid", "奶油白", "啞光金"]
  },
  {
    id: "template-012",
    slug: "prestige-realty",
    name: "Prestige Realty",
    description: "高端豪宅不動產網站，Editorial 雜誌風格。象牙白底配啞光金，頂級豪宅的尊貴呈現。",
    industry: "豪宅不動產",
    industryCategory: "豪宅不動產",
    colorTheme: "象牙白",
    colorHex: "#FFFFF0 / #B8860B / #333333",
    backgroundMode: "light",
    layoutType: "左右雙側欄 + Sticky Filter Panel",
    previewImage: "assets/img/template-012-prestige-realty-preview.jpg",
    zipFile: "downloads/template-012-prestige-realty.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-012-prestige-realty/prompt.md",
    tags: ["豪宅", "不動產", "Editorial", "啞光金", "房地產"]
  },
  {
    id: "template-013",
    slug: "brasserie-1888",
    name: "Brasserie 1888",
    description: "精釀啤酒與手工餐酒網站，Horizontal Scroll 全屏橫向滑動架構。深琥珀底配銅色，左側固定導航與滑動面板，營造精釀啤酒廠的沉浸質感。",
    industry: "精釀啤酒",
    industryCategory: "餐酒",
    colorTheme: "深琥珀",
    colorHex: "#2C1810 / #B87333 / #F5FDE8",
    backgroundMode: "dark",
    layoutType: "Horizontal Scroll 全屏橫向滑動",
    previewImage: "assets/img/template-013-brasserie-1888-preview.jpg",
    zipFile: "downloads/template-013-brasserie-1888.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-013-brasserie-1888/prompt.md",
    tags: ["精釀啤酒", "餐酒", "深琥珀", "Split Image", "啤酒廠"]
  },
  {
    id: "template-014",
    slug: "blanc-dental",
    name: "Blanc Dental",
    description: "現代牙科診所網站，弧形波浪分隔線與步驟向導設計。薄荷綠與純白，重疊圓形圖片，極度專業、清新且值得信賴。",
    industry: "牙科診所",
    industryCategory: "醫療健康",
    colorTheme: "薄荷綠",
    colorHex: "#FFFFFF / #E8F5F0 / #0D9488",
    backgroundMode: "light",
    layoutType: "弧形波浪分隔線 + 步驟向導",
    previewImage: "assets/img/template-014-blanc-dental-preview.jpg",
    zipFile: "downloads/template-014-blanc-dental.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-014-blanc-dental/prompt.md",
    tags: ["牙科", "醫療", "Clean Minimal", "薄荷綠", "專業信任"]
  },
  {
    id: "template-015",
    slug: "aurum-jewelry",
    name: "Aurum Jewelry",
    description: "奢華珠寶網站，無 Nav 超大字首頁與編輯雜誌排版。極致黑底配啞光金，Drop-cap 首字、多欄編輯式內容，創造高貴珠寶雜誌質感。",
    industry: "奢華珠寶",
    industryCategory: "珠寶精品",
    colorTheme: "極致黑",
    colorHex: "#0A0A0A / #B76E79 / #FAF9F6",
    backgroundMode: "dark",
    layoutType: "無 Nav 巨型Editorial + Drop-cap",
    previewImage: "assets/img/template-015-aurum-jewelry-preview.jpg",
    zipFile: "downloads/template-015-aurum-jewelry.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-015-aurum-jewelry/prompt.md",
    tags: ["珠寶", "奢華", "玫瑰金", "極致黑", "Editorial"]
  },
  {
    id: "template-016",
    slug: "apex-finance",
    name: "Apex Finance",
    description: "金融保險網站，雙面板 Portal 架構配即時數據儀表板。深海軍藍配啞光金，專業與現代感兼備。",
    industry: "金融保險",
    industryCategory: "金融保險",
    colorTheme: "深海軍藍",
    colorHex: "#0B1D3A / #D4A843 / #F0F4FA",
    backgroundMode: "dark",
    layoutType: "雙面板 Portal + 數據儀表板",
    previewImage: "assets/img/template-016-apex-finance-preview.jpg",
    zipFile: "downloads/template-016-apex-finance.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-016-apex-finance/prompt.md",
    tags: ["金融", "保險", "數據儀表板", "深海軍藍", "雙面板"]
  },
  {
    id: "template-017",
    slug: "noir-atelier",
    name: "NOIR Atelier",
    description: "時尚服飾網站，無 Nav 超大字首頁與不對稱編排。純黑底配白字與紅色強調，大膽前衛的時尚雜誌美學。",
    industry: "時尚服飾",
    industryCategory: "時尚服飾",
    colorTheme: "極致純黑",
    colorHex: "#000000 / #FFFFFF / #E63946",
    backgroundMode: "dark",
    layoutType: "無 Nav 超大字 + 不對稱編排",
    previewImage: "assets/img/template-017-noir-atelier-preview.jpg",
    zipFile: "downloads/template-017-noir-atelier.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-017-noir-atelier/prompt.md",
    tags: ["時尚", "服飾", "無 Nav", "不對稱", "編輯風格"]
  },
  {
    id: "template-018",
    slug: "spark-academy",
    name: "Spark Academy",
    description: "教育培訓網站，卡片方格佈局配進度追蹤系統。亮黃與深藍搭配，活潑而井然有序的學習體驗。",
    industry: "教育培訓",
    industryCategory: "教育培訓",
    colorTheme: "亮黃深藍",
    colorHex: "#F7C948 / #1E3A5F / #FFFFFF",
    backgroundMode: "light",
    layoutType: "卡片方格 + 進度追蹤系統",
    previewImage: "assets/img/template-018-spark-academy-preview.jpg",
    zipFile: "downloads/template-018-spark-academy.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-018-spark-academy/prompt.md",
    tags: ["教育", "培訓", "卡片方格", "亮黃", "進度追蹤"]
  },
  {
    id: "template-019",
    slug: "nova-pharma",
    name: "NovaPharma",
    description: "醫療製藥網站，清新薄荷色調配柔和曲線分隔線。專業、清新、值得信賴的製藥品牌形象。",
    industry: "醫療製藥",
    industryCategory: "醫療製藥",
    colorTheme: "清新薄荷",
    colorHex: "#E8F8F5 / #00897B / #004D40",
    backgroundMode: "light",
    layoutType: "清新薄荷 + 曲線分隔線",
    previewImage: "assets/img/template-019-nova-pharma-preview.jpg",
    zipFile: "downloads/template-019-nova-pharma.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-019-nova-pharma/prompt.md",
    tags: ["醫療", "製藥", "薄荷綠", "曲線", "專業信任"]
  },
  {
    id: "template-020",
    slug: "vortex-auto",
    name: "Vortex Auto",
    description: "汽車產業網站，全螢幕電影感 Hero 配滑動細節展示。啞光黑配熒光綠，跑車工藝的極致張力。",
    industry: "汽車產業",
    industryCategory: "汽車產業",
    colorTheme: "啞光黑",
    colorHex: "#111111 / #00E5A0 / #FFFFFF",
    backgroundMode: "dark",
    layoutType: "全螢幕電影感 Hero + 滑動細節",
    previewImage: "assets/img/template-020-vortex-auto-preview.jpg",
    zipFile: "downloads/template-020-vortex-auto.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-020-vortex-auto/prompt.md",
    tags: ["汽車", "跑車", "電影感", "啞光黑", "滑動展示"]
  },
  {
    id: "template-021",
    slug: "terra-agri",
    name: "Terra Agri",
    description: "農業科技網站，泥土大地色調配有機曲線與葉脈紋理。還原土地觸感的永續農業美學。",
    industry: "農業科技",
    industryCategory: "農業科技",
    colorTheme: "泥土大地",
    colorHex: "#3E2723 / #8D6E63 / #F5F0E8",
    backgroundMode: "light",
    layoutType: "泥土大地色 + 有機曲線",
    previewImage: "assets/img/template-021-terra-agri-preview.jpg",
    zipFile: "downloads/template-021-terra-agri.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-021-terra-agri/prompt.md",
    tags: ["農業", "科技", "泥土色", "有機曲線", "永續"]
  },
  {
    id: "template-022",
    slug: "neon-matrix",
    name: "Neon Matrix",
    description: "遊戲產業網站，霓虹暗色配動態格柵與滑動疊加效果。cyber-punk 風格的前衛遊戲美學。",
    industry: "遊戲產業",
    industryCategory: "遊戲產業",
    colorTheme: "霓虹暗色",
    colorHex: "#0D0D0D / #00FF9F / #FF0080",
    backgroundMode: "dark",
    layoutType: "霓虹暗色 + 動態格柵",
    previewImage: "assets/img/template-022-neon-matrix-preview.jpg",
    zipFile: "downloads/template-022-neon-matrix.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-022-neon-matrix/prompt.md",
    tags: ["遊戲", "霓虹", "Cyberpunk", "動態格柵", "暗色"]
  },
  {
    id: "template-023",
    slug: "gov-portal",
    name: "GovPortal",
    description: "政府機構網站，正式清晰字體配網格導航系統。官方深藍配簡約白，資訊一目了然的公共服務美學。",
    industry: "政府機構",
    industryCategory: "政府機構",
    colorTheme: "官方深藍",
    colorHex: "#1A3A6B / #2B5BAE / #F5F7FA",
    backgroundMode: "light",
    layoutType: "正式清晰 + 網格導航",
    previewImage: "assets/img/template-023-gov-portal-preview.jpg",
    zipFile: "downloads/template-023-gov-portal.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-023-gov-portal/prompt.md",
    tags: ["政府", "機構", "正式", "網格導航", "官方"]
  },
  {
    id: "template-024",
    slug: "heartbeat-ngo",
    name: "Heartbeat NGO",
    description: "非營利組織網站，暖色影響配故事牆與志工號召區塊。溫暖、親切、有影響力的社會公益品牌形象。",
    industry: "非營利組織",
    industryCategory: "非營利組織",
    colorTheme: "暖心橙",
    colorHex: "#E8572A / #FFF3E0 / #2D2D2D",
    backgroundMode: "light",
    layoutType: "暖色影響 + 故事牆",
    previewImage: "assets/img/template-024-heartbeat-ngo-preview.jpg",
    zipFile: "downloads/template-024-heartbeat-ngo.zip",
    hasZip: false,
    pageCount: 12,
    status: "complete",
    isFeatured: false,
    promptFile: "templates/template-024-heartbeat-ngo/prompt.md",
    tags: ["非營利", "公益", "暖色", "故事牆", "社會影響"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFilters();
  renderTemplates(TEMPLATES);
});

function initHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const filtered = filter === 'all'
        ? TEMPLATES
        : TEMPLATES.filter(t => t.industryCategory === filter);
      renderTemplates(filtered);
    });
  });
}

function renderTemplates(templates) {
  const grid = document.querySelector('.templates-grid');
  if (!grid) return;

  grid.innerHTML = templates.map(t => `
    <div class="template-card" data-id="${t.id}" onclick="goToDetail('${t.id}')">
      <div class="template-preview">
        <img src="${t.previewImage}" alt="${t.name}" onerror="this.style.display='none'">
        <div class="template-preview-overlay">
          <button class="btn btn-sm btn-accent" onclick="event.stopPropagation(); goToDetail('${t.id}')">詳情</button>
        </div>
      </div>
      <div class="template-info">
        <div class="template-category">${t.industry} · ${t.backgroundMode === 'dark' ? '深色' : '淺色'}</div>
        <div class="template-name">${t.name}</div>
        <div class="template-desc">${t.description.substring(0, 80)}...</div>
        <div class="template-tags">
          ${t.tags.slice(0, 3).map(tag => `<span class="template-tag">${tag}</span>`).join('')}
        </div>
        <div class="template-meta">
          <span class="template-pages">${t.pageCount} 頁</span>
          <span class="template-layout">${t.layoutType}</span>
        </div>
        <div class="template-actions">
          <button class="btn btn-sm btn-outline" onclick="event.stopPropagation(); openPrompt('${t.id}')">Prompt</button>
          <button class="btn btn-sm btn-outline" onclick="event.stopPropagation(); downloadZip('${t.id}')" ${!t.hasZip ? 'disabled' : ''}>ZIP</button>
          <button class="btn btn-sm btn-accent" onclick="event.stopPropagation(); previewTemplate('${t.id}')">預覽</button>
        </div>
      </div>
    </div>
  `).join('');
}

function goToDetail(id) {
  window.location.href = `template-detail.html?id=${id}`;
}

function openPrompt(id) {
  const t = TEMPLATES.find(t => t.id === id);
  if (t && t.promptFile) {
    window.open(t.promptFile, '_blank');
  }
}

function previewTemplate(id) {
  const t = TEMPLATES.find(t => t.id === id);
  if (t) {
    const dir = TEMPLATE_DIRS_MAP[id];
    if (dir) {
      window.open(`templates/${dir}/index.html`, '_blank');
    }
  }
}

function downloadZip(id) {
  const t = TEMPLATES.find(t => t.id === id);
  if (t && t.hasZip) {
    window.open(t.zipFile, '_blank');
  } else {
    alert('ZIP 檔案將於完稿後提供，感謝您的耐心等待。');
  }
}

const TEMPLATE_DIRS_MAP = {
  'template-001': 'template-001-mukang-aesthetics',
  'template-002': 'template-002-wild-flavor',
  'template-003': 'template-003-slow-island',
  'template-004': 'template-004-humming-tech',
  'template-005': 'template-005-zenith-editorial',
  'template-006': 'template-006-kinetic-studio',
  'template-007': 'template-007-eduflow',
  'template-008': 'template-008-haus-stay',
  'template-009': 'template-009-verde-leaf',
  'template-010': 'template-010-axiom-space',
  'template-011': 'template-011-lumiere-photo',
  'template-012': 'template-012-prestige-realty',
  'template-013': 'template-013-brasserie-1888',
  'template-014': 'template-014-blanc-dental',
  'template-015': 'template-015-aurum-jewelry',
  'template-016': 'template-016-apex-finance',
  'template-017': 'template-017-noir-atelier',
  'template-018': 'template-018-spark-academy',
  'template-019': 'template-019-nova-pharma',
  'template-020': 'template-020-vortex-auto',
  'template-021': 'template-021-terra-agri',
  'template-022': 'template-022-neon-matrix',
  'template-023': 'template-023-gov-portal',
  'template-024': 'template-024-heartbeat-ngo'
};