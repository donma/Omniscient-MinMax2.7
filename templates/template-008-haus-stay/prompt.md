# Haus Stay Template — Design Brief

## 1. Concept & Vision

Haus Stay 為精品民宿、設計旅店打造的極致簡約網站。核心理念是「留白即奢」——以大量的留白、精準的字距、與優雅的細節營造高級感。適合追求品味、注重生活質量的旅客。不同於視覺密集的傳統飯店網站，Haus 以編輯式排版與大量留白，讓網站本身就是一種生活態度的表達。

## 2. Design Language

### Aesthetic Direction
瑞士極簡主義 + 精品酒店美學——類似 Ace Hotel 或 Edition Hotels 的網站質感。極度節制的用色、大量留白、精確的排版、與高品質的圖片結合，營造出一種「低調的奢華」。

### Color Palette
- `--bg`: #FAFAF9（暖白底）
- `--bg-warm`: #F5F3F0（米白備選）
- `--text`: #18181B（近黑）
- `--text-light`: #737373（中灰文字）
- `--text-lighter`: #A3A3A3（淺灰）
- `--accent`: #D97706（琥珀/古銅金）
- `--accent-dark`: #B45309（深琥珀）
- `--border`: #E5E5E5（分隔線灰）
- `--white`: #FFFFFF

### Typography
- 標題：Instrument Serif（Google Fonts），优雅義式襯線
- 內文：Inter（Google Fonts），現代清晰
- 特色：全大寫章節標題，大字引言，嚴格行距
- 字重：標題 400，內文 300–400

### Spatial System
- 基礎單位：8px
- 超大間距：section 間距 160px–240px
- 段落間距：48px
- 最大內容寬度：1000px（單欄居中）
- 頁面內邊距：80px（桌面）、32px（手機）

### Motion Philosophy
- 極簡動畫：opacity 變化為主，時間 400–600ms
- 頁面進場：content 依序淡入
- Hover：opacity 變化或細微 scale
- 連結：底線由下往上展長

### Visual Assets
- 圖示：Tabler Icons（Light stroke）
- 圖片：Unsplash（建築空間、自然風景、高對比黑白）
- 裝飾：極少，依靠排版層次與間距

## 3. Layout & Structure

### 版型特色：Single Column Editorial
- 全站單欄居中，最大寬度 1000px
- 區塊之間超大間距，形成強烈的垂直節奏
- 超大標題與引言
- 圖片全寬出血
- 極簡 Header：僅 Logo + 少數連結

### 頁面結構
- Header：極簡，固定頂部，透明背景
- Hero：全高背景圖 + 大標題
- 內容區：單欄居中，大量留白
- 圖片展示：滿寬出血
- Footer：極簡，僅版權與少量連結

### Responsive Strategy
- 桌面：單欄居中，留白充分
- 平板：保持單欄，調整字體大小
- 手機：保持比例，減少間距

## 4. Features & Interactions

- 全屏 Hero 背景圖
- 滾動淡入效果（Intersection Observer）
- 連結底線動畫（由下往上展長）
- 圖片點擊放大（全螢幕 Lightbox 可選）
- 極簡表單

## 5. Component Inventory

### Navigation
- 背景：透明或白底（滾動後）
- Logo：中間或左側，Instrument Serif
- 連結：右側，Inter，hover 底線動畫

### Hero Section
- 全螢幕背景圖
- 大標題：Instrument Serif，80px+
- 副標：Inter，18px，淺灰

### Section Header
- 編號：可選，極小字
- 標題：Instrument Serif，超大
- 分隔線：1px 細線或僅留白

### Room/Feature Card
- 圖片：全寬或部分寬
- 名稱：Instrument Serif，中大
- 描述：Inter，淺灰
- 價格或 CTA：底部

### Footer
- 背景：白底或微微不同
- 三欄：Logo/說明、連結、社交
- 版權

## 6. Technical Approach

- 純 HTML + CSS + Vanilla JS
- CSS Variables 管理顏色與字體
- CSS Grid + Flexbox 混合
- Intersection Observer 做滾動動畫
- 響應式：max-width + 彈性間距