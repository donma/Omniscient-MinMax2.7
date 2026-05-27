# Zenith Editorial Template — Design Brief

## 1. Concept & Vision

Zenith Editorial 為專業服務產業（律師事務所、財務顧問、高階人資）打造的文字導向型版型。核心理念是「少即是多」——以精煉文字、嚴謹排版、與極致留白建立信任感。不同於視覺密集的傳統網站，Zenith 以閱讀體驗為中心，讓內容本身說話。適合追求高端、嚴肅、專業形象的品牌。

## 2. Design Language

### Aesthetic Direction
高端法律/顧問期刊美學——類似 Monocle 雜誌或頂級律師事務所形象網站。黑白為主，金色點綴，大量襯線字體豎向排布，形成權威感與精緻感。

### Color Palette
- `--black`: #000000（主背景）
- `--white`: #fafafa（文字/前景）
- `--gray-dark`: #1a1a1a（卡片/區塊）
- `--gray-mid`: #888888（次要文字）
- `--gray-light`: #e5e5e5（分隔線）
- `--accent`: #c9a84c（啞光金，重點使用）
- `--accent-dim`: #8b7235（次要金色）

### Typography
- 標題：Cormorant Garamond（Google Fonts），襯線優雅，權威感
- 內文：DM Sans（Google Fonts），無襯線現代
- 英文大小寫混用：章節標題用大寫 letter-spacing
- 字重：標題 300–600，內文 300–400

### Spatial System
- 基礎單位：8px
- 大量留白：區塊間距 120px–200px
- 文字行距：1.8（內文）、1.2（標題）
- 最大內容寬度：1200px
- 頁面內邊距：80px（桌面）、24px（手機）

### Motion Philosophy
- 滾動觸發淡入：opacity 0→1，translateY 30px→0，duration 600ms，ease-out
- 標題打字機效果：characters 依序顯現（可選）
- Hover：底線由左向右展長（200ms）
- 頁面切換：fade 300ms

### Visual Assets
- 圖示：Phosphor Icons（Light weight）
- 圖片：Unsplash（黑白處理後呈現，grayscale + contrast）
- 裝飾：極少，主要依靠排版層次

## 3. Layout & Structure

### 版型特色：Asymmetric Editorial Grid
- 非對稱網格：內容區塊以 7:5 或 8:4 比例分割
- 大量垂直 Rhythm：每個區塊有強烈的上下節奏
- 側邊標記：年份、分類標籤以旋轉文字放在側邊
- 分頁樣式：雜誌式的數字分頁（01 / 12）

### 頁面結構
- Navigation：置頂纖細線條導覽，滾動後加深背景
- Hero：滿版大字标语 + 旋轉裝飾文字
- Content Area：編輯式雙欄/三欄混合
- Footer：極簡，版權 + 社群連結

### Responsive Strategy
- 桌面：編輯式非對稱多欄
- 平板：雙欄簡化為單欄，保留間距
- 手機：全單欄，大量留白，字體縮放

## 4. Features & Interactions

- 滾動視差：背景文字/數字輕微視差滑動
- 滑過卡片的金色邊框：卡片左側出現 2px 金線
- 選單 hover：下方線條由左向右展開
- 篩選區塊：淡入淡出切換（opacity + max-height）
- 按鈕：方形或極簡線條，hover 填滿黑色

## 5. Component Inventory

### Navigation
- 背景：透明→黑色（滾動後）
- Logo：左側，全大寫襯線字
- 連結：右側，DM Sans，letter-spacing 0.1em
- Hover：底部金色底線展長

### Hero Section
- 背景：純黑
- 大標題：Cormorant Garamond，72–120px，white
- 副標：DM Sans，18px，gray-mid
- 裝飾：旋轉垂直文字「EST. 2015」在右側

### Section Header
- 編號：01, 02... 金色，DM Sans
- 標題：全大寫，letter-spacing 0.2em
- 分隔線：1px gray-light

### Card
- 背景：#1a1a1a 或 transparent
- 左側：2px 金線（hover 時顯現）
- 標題：Cormorant Garamond
- 內文：DM Sans，gray-mid

### Button
- 預設：透明背景，白色邊框
- Hover：白色填充，黑色文字
- Active：金色邊框

### Footer
- 背景：#0a0a0a
- 文字：gray-mid，small
- 連結：gold hover

## 6. Technical Approach

- 純 HTML + CSS + Vanilla JS
- 無框架依賴
- CSS Grid + Flexbox 混合
- CSS Variables 管理顏色/字體
- Intersection Observer API 做滾動動畫
- Unsplash 圖片（grayscale 濾鏡處理）