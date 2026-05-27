# 全職設計視角 — 24套精品網站樣板展示站

> **Made with MinMax 2.7** — 本專案由 AI 助手 MinMax 2.7 驅動設計與程式碼生成。

24 套完全差異化的網站模板，每套 12 頁，涵蓋 24 個不同產業。繁體中文，高對比選單，無框架依賴。

---

## 展示站

直接開啟 `index.html` 即可瀏覽 24 套模板展示站，支援 24 個產業篩選、預覽、Prompt 按鈕與下載提示。

---

## 模板總覽

| # | 名稱 | 產業 | 版型特色 |
|---|------|------|----------|
| 001 | 沐光美學 | 美容健康 | Split Left-img Right-text 大地色 |
| 002 | 野葉味 | 餐飲 | Magazine Editorial 編輯風格 |
| 003 | 慢島 | 旅遊 | 大圖沉浸式 Dark 深海藍 |
| 004 | 蜂鳥科技 | 科技 | Bento Grid 暗金美學 |
| 005 | Zenith Editorial | 專業服務 | 純文字大標 極致留白 |
| 006 | Kinetic Studio | 創意服務 | Parallax Scrolling 視差滾動 |
| 007 | EduFlow | 線上學習 | Metro Tiles 左側欄儀表板 |
| 008 | Haus Stay | 精品民宿 | Swiss Minimalist 瑞士極簡 |
| 009 | Verde Leaf | 健康蔬食 | Split + 漸層 Blob |
| 010 | Axiom Space | 室內設計 | Split Screen 雙欄雙面 |
| 011 | LUMIÈRE Photo | 婚禮攝影 | Full-screen Gallery + Masonry Grid |
| 012 | Prestige Realty | 豪宅不動產 | 左右雙側欄 + Sticky Filter Panel |
| 013 | Brasserie 1888 | 精釀啤酒 | Horizontal Scroll 全屏橫向滑動 |
| 014 | Blanc Dental | 牙科診所 | 弧形波浪分隔線 + 步驟向導 |
| 015 | Aurum Jewelry | 奢華珠寶 | 無 Nav 巨型Editorial + Drop-cap |
| 016 | Apex Finance | 金融保險 | 左右雙面板 Portal + 數據儀表板 |
| 017 | NOIR Atelier | 時尚服飾 | 無導航全屏首頁 + 編輯式非對稱 Grid |
| 018 | Spark Academy | 教育培訓 | Step Tracker 步驟向導 + 定價卡片 |
| 019 | NovaPharma | 醫療製藥 | 曲線波浪分隔線 + 清新薄荷風格 |
| 020 | VORTEX AUTO | 汽車產業 | 暗色系跑車美學 + 視差疊加 |
| 021 | Terra Agri | 農業科技 | 大地色系 + 農業科技融合 |
| 022 | NEON MATRIX | 遊戲產業 | Cyberpunk 霓虹美學 + 動態網格背景 |
| 023 | GovPortal | 政府機構 | 雙面板 Portal + 資訊卡片牆 |
| 024 | 心跳基金會 | 非營利組織 | 暖心大地色 + 愛心後綴 class 命名 |

---

## 版型結構差異化說明

每套模板都有完全獨立的 CSS 架構與 layout 邏輯，而非通用樣式改名：

- **001** — 經典左右分割（`.split-*` / `.value-card`）
- **002** — 編輯排版格（`.editorial-*`）
- **003** — 沉浸式全屏 Hero + Dark Overlays
- **004** — Bento Grid 方塊瓷磚佈局
- **005** — 極致留白 + 羅馬大標
- **006** — Parallax 多層視差滾動
- **007** — Metro Tiles + 左側固定 Dashboard
- **008** — Swiss Minimalist 網格系統
- **009** — 漸層 Blob 背景 + Split 佈局
- **010** — Split Screen 雙面對照
- **011** — Masonry 瀑布流 + Full-screen Gallery
- **012** — 固定左側 240px Sidebar + Sticky Filter Panel + 不對稱 Property Grid
- **013** — Horizontal Scroll 全屏橫向滑動 + Dot Indicators
- **014** — 弧形 SVG 波浪分隔線 + Step-wizard 步驟向導 + 重疊圓形 Team Cards
- **015** — 無 Nav 超大字首頁 + Editorial Grid 多欄 + Drop-cap + Page-hero
- **016** — 雙面板 Portal（固定 sidebar + main content）+ 金色頂部強調線
- **017** — `home-no-nav` 全屏無導航首頁 + `.editorial-grid` 與 `.col-5` / `.col-7` 非對稱
- **018** — `.step-tracker` 步驟追蹤 + `.course-card` + `.pricing-card`
- **019** — 曲線波浪分隔線（`wave-divider`）+ 清新薄荷綠色系
- **020** — 暗色跑車美學 + Orbitron 科技字體 + 速度線裝飾
- **021** — `terra-*` 前綴 class（`terra-header` / `terra-section` / `terra-solution-card`）
- **022** — Cyberpunk 霓虹發光 + 動態網格背景 + 暗色遊戲卡片
- **023** — `layout-portal` 雙面板 + `.user-gov` + `.portal-main`
- **024** — `-heart` 後綴 class（`header-heart` / `nav-heart` / `donate-form-heart`）

---

## 目錄結構

```
全職設計視角/
├── index.html              ← 主展示站（24 個產業篩選）
├── template-detail.html    ← 模板詳情頁
├── README.md               ← 本檔案
│
├── templates/
│   ├── template-001-mukang-aesthetics/   (12 頁)
│   ├── template-002-wild-flavor/         (12 頁)
│   ├── ...
│   └── template-024-heartbeat-ngo/        (12 頁)
│       ├── index.html
│       ├── *.html          (共 12 頁)
│       ├── assets/
│       │   ├── css/style.css
│       │   └── js/main.js
│       ├── prompt.md       ← AI 生成用完整 prompt
│       ├── tags.json       ← 標籤結構（industry / color / layout / mood）
│       ├── template.json   ← 模板元資料
│       ├── README.md       ← 模板說明文件
│       ├── image-sources.md ← 圖片來源與 Unsplash URL
│       └── assets/         ← CSS / JS / 圖片資源
│
└── assets/
    ├── css/site.css        ← 展示站專用樣式（counter 自動編號等）
    ├── js/data.js          ← 展示站用 24 套模板資料
    └── img/                ← 模板截圖 + 展示站截圖
        ├── template-001-mukang-aesthetics-preview.jpg
        ├── ...
        ├── template-024-heartbeat-ngo-preview.jpg
        └── showcase-site-preview.jpg
```

---

## 每套模板包含的檔案

| 檔案 | 用途 |
|------|------|
| `prompt.md` | AI 生成用完整 prompt，說明概念、色彩、字體、版面、12 頁結構 |
| `tags.json` | 機器學習標籤（industry / color / layout / mood / features） |
| `template.json` | 模板元資料（名稱、描述、頁面清單、CSS 行數、色票、字體） |
| `README.md` | 模板專屬說明文件 |
| `image-sources.md` | 所有 Unsplash 圖片 URL 列表與用途說明 |
| `assets/css/style.css` | 完整樣式表（每套結構完全獨特） |
| `assets/js/main.js` | 互動腳本 |
| `*.html` (12 頁) | 繁體中文完整內容 |

---

## 技術規格

| 項目 | 說明 |
|------|------|
| 語言 | 繁體中文（台灣） |
| 圖片 | Unsplash（高解析度，可替換） |
| 配色 | 高對比（AA 等級以上） |
| 響應式 | 桌面優先，適配平板與手機 |
| 框架 | 無外部框架依賴（純 HTML/CSS/JS） |
| 字體 | Google Fonts（Cinzel / Bitter / Orbitron / Nunito Sans 等） |
| 圖示 | FontAwesome 6.x |
| 每套頁數 | 12 個 HTML 檔案 |
| CSS 設計 | 每套完全獨立 class name，不共享通用樣式 |
| 總產出 | 24 套 × 12 頁 = 288 個 HTML 頁面 |

---

## 使用說明

### 瀏覽展示站

```bash
# 直接以瀏覽器開啟
open index.html
# 或使用 local server
npx serve .
```

### 替換圖片

所有圖片均為 Unsplash URL，直接編輯 HTML 中的 `src` 屬性即可換圖。

### 自訂顏色

每套模板的 CSS 變數定義在 `:root` 區塊，修改對應色票值即可調整品牌色彩。

### 部署

```bash
# 直接上傳整個資料夾至任何靜態 hosting
# Netlify / Vercel / GitHub Pages 皆可直接部署
```

---

## 生成工具

本專案由 **MinMax 2.7** 全程設計與程式碼生成，包括：

- 24 套網站的整體架構與版型差異化策略
- 每套 CSS 結構的獨特 class name 命名系統
- 288 個 HTML 頁面的完整內容（繁體中文）
- 每套模板的 `prompt.md`、`tags.json`、`template.json`、`README.md`、`image-sources.md`
- 主展示站 `index.html` 的 24 產業篩選、卡片渲染、截圖展示邏輯
- `data.js` 的 24 套完整模板資料結構

---

## 版權與授權

本專案為展示用模板，圖片版權歸 [Unsplash](https://unsplash.com) 各作者所有。程式碼可自由參考使用於非商業用途。