# Kinetic Studio Template — Design Brief

## 1. Concept & Vision

Kinetic Studio 為創意工作室、品牌設計公司、廣告代理精心打造的動態視覺網站。核心理念是「動」——以豐富的滾動視差、分層深度、 kinetic typography 讓訪客感受創意的生命力。適合敢於突破、不甘平凡的創意品牌。

## 2. Design Language

### Aesthetic Direction
前衛創意期刊美學——介於 Bepress 與 Apple 官網之間。暖白底、大量留白但資訊密度高的首頁、骨架式載入、視差分層。有活力但不做作，現代但不冰冷。

### Color Palette
- `--bg`: #FFF8F5（暖白底）
- `--bg-alt`: #FFF0E8（微暖灰粉）
- `--primary`: #FF5C00（活力橙）
- `--secondary`: #1A1A1A（近黑）
- `--accent`: #FFB800（亮黃）
- `--text`: #3A3A3A（深灰文字）
- `--text-light`: #888888（淺灰文字）
- `--white`: #FFFFFF

### Typography
- 標題：Syne（Google Fonts），幾何前衛，獨特又有辨識度
- 內文：DM Sans（Google Fonts），現代清晰
- 特色：Kinetictype on scroll，文字分層視差
- 字重：標題 600–800，內文 300–400

### Spatial System
- 基礎單位：8px
- 大量間距：section 間距 120px–200px
- 卡片圓角：16px–24px
- 最大內容寬度：1400px
- 頁面內邊距：60px（桌面）、24px（手機）

### Motion Philosophy
- 滾動視差：背景/前景元素以不同速度移動（0.3x–1.5x）
- 元素進場：fade up + scale，stagger 100ms
- Hover：卡片上浮 + 陰影加深
- 頁面進場：骨架螢幕 → 內容依序顯示

### Visual Assets
- 圖示：Phosphor Icons（Bold weight）
- 圖片：Unsplash（創意相關、高對比）
- 裝飾：漸層圓形、浮動線條、幾何抽象

## 3. Layout & Structure

### 版型特色：Parallax Scrolling + Layered Depth
- 首頁：滿版 Hero + 浮動裝飾元素 + 特色服務卡片（視差分層）
- 作品集：水平滾動畫廊（horizontal scroll section）
- 團隊：時間軸樣式（Timeline cards）
- 客戶標語：Full-width 骨牌式展現

### 頁面結構
- Navigation：固定頂部，全寬纖細，滾動後顯示背景
- Hero：滿版視差，疊加多個深度圖層
- 特色模塊：4 欄創意服務展示
- 作品集預覽：3 欄 Masonry 格
- 客戶/數據：Full-width 數值展示
- Footer：多欄連結 + 社群圖標

### Responsive Strategy
- 桌面：完整視差 + 水平滾動
- 平板：簡化視差，保留動畫
- 手機：關閉昂貴視差，保留 fade 動畫

## 4. Features & Interactions

- 滾動視差：多層次背景移動
- Kinetic Typography：文字在滾動時有層次感
- 水平滾動區：作品集畫廊可水平滑動
- 卡片 Hover：上浮 + 陰影 + 圖標變色
- 載入動畫：Sequence reveal

## 5. Component Inventory

### Navigation
- 背景：透明→白色（滾動後）
- Logo：左側，Syne bold
- 連結：右側，DM Sans，hover 底線動畫

### Parallax Hero
- 多層：背景圖 → 裝飾圓形 → 主標題 → 副標
- 每層不同視差速度

### Service Card
- 背景：白色或微暖灰
- 圖標：橙黃鮮豔色
- Hover：Y軸上移 8px，陰影加深

### Portfolio Item
- 圖片：高對比 Unsplash
- Overlay：hover 顯示類別 + 標題
- 標題：Syne

### Horizontal Scroll Gallery
- 內容可水平滾動
- 進度條指示器

### Footer
- 深灰底，白色文字
- 四欄連結網格

## 6. Technical Approach

- 純 HTML + CSS + Vanilla JS
- Intersection Observer 做滾動觸發
- CSS transform + translate 做視差
- CSS scroll-snap 做水平畫廊
- requestAnimationFrame 優化效能