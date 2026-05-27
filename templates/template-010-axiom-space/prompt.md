# Axiom Space Template — Design Brief

## 1. Concept & Vision

Axiom Space 為室內設計、建筑与空间品牌打造的 Split Screen 雙欄雙面網站。核心理念是「對話」——動與靜、圖與文、宏觀與微觀在同一畫面中並置，創造張力與深度。適合室內設計工作室、建筑師事務所、傢俱品牌。

## 2. Design Language

### Aesthetic Direction
銀河金屬美學——深邃而精準，帶有未來感的極簡主義。像是走進一間頂級建築事務所的展覽空間。

### Color Palette
- `--bg`: #18181B（深石墨黑）
- `--surface`: #27272A（炭灰）
- `--border`: #3f3f46（鋅灰線條）
- `--muted`: #71717A（銀灰文字）
- `--light`: #a1a1aa（淺銀灰）
- `--white`: #F4F4F5（骨白）
- `--accent`: #d4d4d8（鉑金高光）
- `--warm`: #a8a29e（暖銀）

### Typography
- 標題：Syne（幾何無襯線，建築感強烈）
- 內文：Space Grotesk（現代幾何，清晰精準）
- 字重：標題 600–700，內文 300–400

### Spatial System
- 基礎單位：8px
- 區塊間距：120px–200px
- 卡片圓角：4px（精準、銳利）
- 最大內容寬度：1400px
- 頁面內邊距：64px（桌面）、24px（手機）

### Motion Philosophy
- 精準直線運動，無多餘裝飾
- 雙欄視差滑動
- 數據計數動畫（滚动触发）
- 過渡：cubic-bezier(0.16, 1, 0.3, 1)

### Visual Assets
- 圖示：Lucide Icons（精準線條）
- 圖片：Unsplash（室內設計、建筑）
- 裝飾：極細線條、精準網格結構

## 3. Layout & Structure

### 版型特色：Split Screen Dual Pane
- 左側：固定欄（專案縮圖，視差滾動）
- 右側：滑動內容欄（文字、數據、細節）
- 滑動比率：左40% / 右60%
- 雙欄間有精準的 1px 分隔線

### 頁面結構
- Header：極簡純文字導航
- Hero：Split 雙面展示，建築圖片 + 大標題
- 內容區：雙欄交替呈現
- 數據區：計數器動畫

### Responsive Strategy
- 桌面：完整 Split Screen 效果
- 平板：簡化為堆疊或單欄
- 手機：全單欄，圖片置頂

## 4. Features & Interactions

- 雙欄 Split 佈局
- 視差滾動（左側圖片相對靜止）
- 滾動觸發計數動畫
- 專案卡片 hover 效果
- 極簡聯絡表單

## 5. Component Inventory

### Navigation
- 背景：透明
- Logo：Syne 粗體，骨白
- 連結：Space Grotesk，銀灰，hover 變白

### Split Hero
- 左欄：建築/室內大圖（視差）
- 右欄：年份數字、分類、標題

### Stat Counter
- 大數字（Syne 700）
- 銀灰標籤

### Project Card
- 圖片 + 精準疊加標題
- hover：圖片放大 + 標題滑入

### Footer
- 極簡，銀灰配色
- 版權 + 社群連結

## 6. Technical Approach

- 純 HTML + CSS + Vanilla JS
- CSS custom properties 管理色彩
- Intersection Observer 做動畫觸發
- 滾動事件驅動視差效果