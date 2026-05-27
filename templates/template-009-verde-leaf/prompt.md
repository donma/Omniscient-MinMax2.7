# Verde Leaf Template — Design Brief

## 1. Concept & Vision

Verde Leaf 為健康蔬食、植物性餐廳打造的有機風格網站。核心理念是「自然流動」——用有機曲線、柔和漸層、與大地色系營造一種回到自然懷抱的感覺。適合倡導健康生活、永續理念的餐飲品牌。

## 2. Design Language

### Aesthetic Direction
自然有機美學——介於清新田園與現代極簡之間。柔和的薄荷綠底、葉脈圖案裝飾、流動的曲線分割，給人一種「這是為您好」的純淨感。

### Color Palette
- `--bg`: #F0FDF4（薄荷奶綠）
- `--bg-warm`: #FEFCE8（淡蛋黃）
- `--bg-coral`: #FFF1F0（淡珊瑚）
- `--primary`: #15803D（森林綠）
- `--primary-dark`: #166534
- `--accent`: #F97316（活力橙）
- `--accent-soft`: #FDBA74
- `--text`: #1C1917（暖黑）
- `--text-light`: #78716C（淺棕灰）
- `--white`: #FFFFFF

### Typography
- 標題：Fraunces（Google Fonts），有機襯線感，柔和
- 內文：Work Sans（Google Fonts），清晰現代
- 字重：標題 400–600，內文 300–400

### Spatial System
- 基礎單位：8px
- 區塊間距：100px–160px
- 卡片圓角：20px–32px（較大圓角）
- 最大內容寬度：1200px
- 頁面內邊距：60px（桌面）、24px（手機）

### Motion Philosophy
- 有機曲線動畫：波浪狀過渡
- 漸層飄動：背景裝飾緩慢漂浮
- Hover：柔和上浮 + 陰影暈開
- 頁面進場：stagger fade-in

### Visual Assets
- 圖示：Phosphor Icons（Light weight）
- 圖片：Unsplash（新鮮食材、植物、自然）
- 裝飾：SVG 有機形狀、波浪分隔線、葉脈圖案

## 3. Layout & Structure

### 版型特色：Organic Flow
- 波浪分頁符：每個區塊以曲線過渡
- 卡片：圓角大，柔和陰影
- 背景裝飾：浮動的有機形狀
- 不對稱但平衡的排版

### 頁面結構
- Header：圓潤 Logo，綠色透明背景
- Hero：滿版背景圖 + 波浪底部
- 內容區：卡片流、網格
- 波浪分隔線：區塊之間

### Responsive Strategy
- 桌面：完整波浪效果 + 浮動裝飾
- 平板：簡化裝飾，保留曲線
- 手機：全單欄，圓角保留

## 4. Features & Interactions

- 波浪分隔線：每個 section 以 SVG 波浪結束
- 浮動裝飾：背景有緩慢飄動的有機形狀
- 卡片 Hover：柔和上浮
- 漸層按鈕：漸層背景 + 柔和動畫
- 菜單展示：配方卡片（食材圖示）

## 5. Component Inventory

### Navigation
- 背景：綠色半透明（滾動後加深）
- Logo：圓潤字體，綠色
- 連結：Work Sans，hover 底線

### Wave Divider
- SVG 波浪曲線
- 可選顏色變化（綠/橙/白）

### Menu Card
- 大圓角
- 食材圖示標籤
- 價格標籤

### Feature Card
- 柔和陰影
- 圖標居中
- Hover 上浮

### Button
- 大圓角（pill shape）
- 漸層背景或邊框
- Hover：輕微放大

## 6. Technical Approach

- 純 HTML + CSS + Vanilla JS
- SVG 波浪分隔線
- CSS animation 做漂浮裝飾
- CSS variables 管理顏色
- Intersection Observer 做進場動畫