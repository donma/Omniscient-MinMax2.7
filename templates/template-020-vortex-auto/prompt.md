# VORTEX AUTO 網站模板生成提示

## 主題風格
- 產業：汽車產業 / 超級跑車
- 名稱：VORTEX AUTO
- 設計風格：全螢幕電影感 Hero + 滑動細節
- 色彩配置：
  - Matte Black #111111
  - Neon Green #00E5A0
  - White #FFFFFF
  - Dark Gray #1A1A1A

## 字體選擇
- 標題字體：Space Grotesk (粗體幾何無襯線)
- 內文字體：Manrope (現代幾何無襯線)

## CSS類別命名規範
所有CSS類別必須使用 vortex 前綴，完全避免使用任何通用類別名稱。

### 強制使用的獨特類別名稱
- .vortex-header - 固定頂部導航
- .vortex-home-no-nav - 首頁全屏無導航
- .vortex-home-brand - 首頁品牌文字
- .vortex-hero - 英雄區塊
- .vortex-hero-bg - 英雄背景
- .vortex-hero-title - 英雄標題(超大)
- .vortex-btn-neon - 霓虹按鈕
- .vortex-btn-dark - 深色按鈕
- .vortex-model-slider - 車型滑塊
- .vortex-model-panel - 車型面板
- .vortex-spec-grid - 規格網格
- .vortex-spec-value - 規格數值
- .vortex-feature-card - 特色卡片
- .vortex-tech-card - 技術卡片
- .vortex-gallery-grid - 畫廊網格
- .vortex-gallery-item - 畫廊項目
- .vortex-news-card - 新聞卡片
- .vortex-contact-form - 聯絡表單
- .vortex-footer - 頁尾

## 設計元素

### 全螢幕英雄
- 100vh 高度充滿視口
- 背景圖片覆蓋 + 暗色疊加層
- 超大品牌文字 "VORTEX"
- 兩個 CTA 按鈕（neon + dark）

### 車型滑動面板
- 水平滾動 / 鼠標滾動切換
- 左右交替佈局（圖片左/右）
- 規格數據動態計數動畫

### 霓虹按鈕效果
- 透明背景 + 霓虹綠邊框
- hover 時填充霓虹綠背景

## 內容策略
- 所有內容使用英文（品牌為國際化）
- 使用真實的汽車術語
- 專業的性能數據展示
- 電影感的排版設計

## 技術要求
- 每個HTML頁面需有完整 DOCTYPE
- FontAwesome CDN 引入
- Google Fonts 引入 Space Grotesk + Manrope
- RWD 響應式設計
- 滾動時表頭變化
- 車型滑塊支援滑鼠滾動切換
- 數字計數動畫

## 頁面清單 (12頁)
1. index.html - 首頁（全屏無導航）
2. models.html - 全部車型
3. model-detail.html - 車型詳情
4. technology.html - 技術介紹
5. experience.html - 體驗活動
6. ownership.html - 車主服務
7. gallery.html - 畫廊
8. news.html - 最新消息
9. news-detail.html - 新聞詳情
10. contact.html - 聯絡我們
11. test-drive.html - 預約試駕
12. careers.html - 人才招募