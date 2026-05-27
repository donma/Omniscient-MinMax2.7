# AI Prompt: NOIR Atelier 當代時尚服飾網站生成

## 網站概述
這是一個當代時尚服飾品牌網站，以「無導航全屏首頁 + 編輯式橫排圖文」為設計方向。網站採用極致黑背景，襯托米白與金色文字與影像，創造高端時尚雜誌的質感。

## 設計方向
- **風格**: Editorial Fashion、極簡主義、黑白美學、高對比
- **色彩**: 極致黑 #0D0D0D、灰黑 #1A1A1A、暖白 #F5F0EB、金色 #C9A96E
- **字體**: Cinzel（標題，優雅羅馬大寫）+ Montserrat（內文）
- **佈局**: 首頁無傳統導航列（home-no-nav），內容板塊以 horizontal scroll 與 editorial grid 交錯呈現

## 目標受眾
- 25-45 歲都會時尚女性
- 追求品味與個性的消費者
- 高端時尚愛好者

## 功能需求

### 頁面結構
1. **首頁** - 無導航全屏 Hero，豎向滾動切換編輯式板塊（品牌哲學、精選系列、代言人、活動資訊）
2. **關於我們** - 品牌故事、里程碑時間軸、核心價值
3. **系列總覽** - 橫排影像牆，依類別篩選（女裝、男裝、配飾）
4. **系列詳情** - 單品展示、大圖細節、尺寸與材質說明
5. **Campaign** - 品牌形象廣告展示、幕後花絮
6. **Collections** - 年度膠囊系列總覽
7. **Collection Detail** - 系列內單品列表
8. **線上誌** - 風格指南、保養知識、時尚趨勢文章列表
9. **線上誌詳情** - 文章內容、相關文章推薦
10. **銷售點** - 門市據點、地圖、聯絡資訊
11. **人才招募** - 品牌福利、職缺說明、投遞方式
12. **聯絡我們** - 表單、隱私權聲明

## 技術要求
- 使用 Google Fonts（Cinzel + Montserrat）
- FontAwesome 圖示庫
- 回應式設計（支援桌面與平板）
- 純 HTML/CSS/JavaScript
- 無需後端

## 圖片需求
使用 Unsplash 高品質時尚相關圖片：
- 服裝模型棚拍
- 配件細節特寫
- 品牌形象廣告
- 幕後花絮

## 輸出格式
- 12 個完整 HTML 頁面（index, about, collections, collection-detail, campaign, journal, journal-detail, stockists, careers, contact, faq, press）
- 統一的 CSS 樣式表（style.css）
- JavaScript 交互（過渡動畫、篩選）
- 所有中文字串完整

## 設計細節
- Hero 區塊：100vh 全屏
- Editorial Grid：col-5 / col-7 非對稱欄位
- Cinzel 標題：letter-spacing: 0.2em
- 過渡動畫：0.4s cubic-bezier(0.4, 0, 0.2, 1)