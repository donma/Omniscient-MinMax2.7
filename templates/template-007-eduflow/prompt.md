# EduFlow Template — Design Brief

## 1. Concept & Vision

EduFlow 為線上學習平台、教育科技公司打造的現代化網站。核心理念是「結構清晰、節奏明快」——用 Metro Tiles 風格的方塊佈局與豐富的進度視覺化，讓學習變得更有成就感。適合線上課程平台、职业技能培训、教育科技服務。

## 2. Design Language

### Aesthetic Direction
現代教育科技美學——類似 Duolingo 或 Coursera 的活力感，但更偏向 Windows 8 Metro Tiles 的方塊化佈局。清爽的灰白底、清晰的卡片分組、活躍的彩色標籤。

### Color Palette
- `--bg`: #F8FAFC（冷灰白底）
- `--bg-card`: #FFFFFF（純白卡片）
- `--primary`: #4F46E5（靛藍主色）
- `--primary-light`: #EEF2FF（淡紫）
- `--accent`: #10B981（翡翠綠，代表學習成長）
- `--accent-light`: #ECFDF5（淡綠）
- `--warning`: #F59E0B（警示橙）
- `--text`: #1E293B（深色文字）
- `--text-light`: #64748B（中灰文字）
- `--border`: #E2E8F0（邊框灰）

### Typography
- 標題：Plus Jakarta Sans（Google Fonts），現代幾何感
- 內文：Inter（Google Fonts），極清晰
- 字重：標題 600–700，內文 400–500

### Spatial System
- 基礎單位：8px
- 卡片間距：16px–24px
- 卡片圓角：16px
- 方塊圓角：12px
- 最大內容寬度：1280px
- 頁面內邊距：48px（桌面）、24px（手機）

### Motion Philosophy
- Hover：卡片上浮 + 陰影加深（200ms）
- 方塊點擊：輕微 scale 回饋
- 進度條：平滑過渡動畫
- 進場：fade up，stagger 60ms

### Visual Assets
- 圖示：Phosphor Icons（Regular weight）
- 圖片：Unsplash（商務人士、學習場景、科技）
- 裝飾：漸層背景、幾何線條、圓形裝飾

## 3. Layout & Structure

### 版型特色：Metro Tiles Dashboard
- 首頁：雙色方塊交錯排布（大小塊混合）
- 導航：左側圖標導航（Dashboard 風格）
- 內容區：卡片化，每個區塊有標題+更多按鈕
- 進度視覺化：環形進度、線性進度條、完成徽章

### 頁面結構
- Header：Logo + 用戶資訊 + 搜尋
- 左側導航：圖標 + 文字，功能導航
- 主要內容區：方塊/卡片網格
- 底部：精簡版權

### Responsive Strategy
- 桌面：完整 Metro Tiles + 左側導航
- 平板：精簡方塊，頂部導航
- 手機：全單欄堆疊，底部 Tab 導航

## 4. Features & Interactions

- Metro 方塊：大小塊混合，hover 上浮
- 進度追蹤：圓環進度 + 完成百分比
- 課程卡片：縮圖 + 進度 + 剩餘時間
- 篩選系統：標籤按鈕，點擊篩選卡片
- 收藏/點讚：即時回饋動畫

## 5. Component Inventory

### Metro Tile
- 不同尺寸：1x1（小）、2x1（寬）、1x2（高）、2x2（大）
- Hover：上浮 4px + 陰影加深
- 內容：圖示/數字/標題

### Course Card
- 縮圖（上圓角）
- 標題、講師、進度條
- Hover：整卡上浮

### Progress Ring
- 環形 SVG
- 中心數字百分比
- 顏色依進度變化

### Nav Item
- 圖示 + 文字
- Hover：背景變色
- Active：左側邊框標記

### Button
- Primary：紫色填充
- Secondary：紫色邊框
- Ghost：透明背景

## 6. Technical Approach

- 純 HTML + CSS + Vanilla JS
- CSS Grid 做 Metro 佈局
- CSS Custom Properties 管理顏色
- Intersection Observer 做進場動畫