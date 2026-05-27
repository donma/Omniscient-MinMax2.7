# Axiom Space — 室內設計網站模板

## 設計風格：Split Screen 雙欄雙面

Axiom Space 為室內設計、建筑与空间品牌打造的 Split Screen 雙欄雙面網站。核心理念是「動與靜的對話」——用精準的設計語言，創造一個有深度的視覺體驗。

## 特色亮點

- **Split Screen 雙欄設計**：左側固定視差圖片，右側滑動內容
- **銀河金屬配色**：#18181B 深灰黑 / #27272A 炭灰 / #71717A 銀灰
- **Syne + Space Grotesk**：幾何粗體，極具建築感
- **精準線條**：1px 分隔線，零容忍的精準設計
- **滾動視差**：左側圖片相對滾動產生深度感

## 頁面清單（12 頁）

| 頁面 | 檔案 | 說明 |
|------|------|------|
| 首頁 | `index.html` | Split Hero、數據統計、專案預覽 |
| 關於我們 | `about.html` | 品牌故事、核心價值 |
| 專案作品 | `projects.html` | 專案卡片網格展示 |
| 專案詳情 | `project-detail.html` | 單一專案詳細展示 |
| 設計流程 | `process.html` | 四步流程說明 |
| 團隊成員 | `studio.html` | 設計師團隊成員 |
| 獲獎肯定 | `awards.html` | 獎項榮譽列表 |
| 媒體報導 | `press.html` | 媒體採訪文章 |
| 服務項目 | `services.html` | 服務與收費方式 |
| 常見問題 | `faq.html` | FAQ 折疊式問答 |
| 聯絡我們 | `contact.html` | 聯絡表單與資訊 |
| 人才招募 | `careers.html` | 職缺列表 |

## 色彩系統

```css
--bg: #18181B      /* 深石墨黑 */
--surface: #27272A /* 炭灰 */
--border: #3f3f46  /* 鋅灰線條 */
--muted: #71717A   /* 銀灰文字 */
--white: #F4F4F5   /* 骨白 */
```

## 字體

- **標題**：Syne（Google Fonts），幾何無襯線建築感
- **內文**：Space Grotesk（Google Fonts），現代精準

## 安裝與使用

1. 複製整個資料夾至您的專案
2. 直接在瀏覽器中開啟 `index.html`
3. 替換圖片與文字內容為您的品牌資訊

## 圖片來源

所有圖片來自 [Unsplash](https://unsplash.com)，詳細清單請參閱 `image-sources.md`。

## 響應式設計

- 桌面：完整 Split Screen 效果
- 平板：簡化為堆疊
- 手機：全單欄，圖片置頂

## JavaScript 功能

- 導航列滾動效果（透明 → 深色）
- FAQ 折疊互動
- 進場淡入動畫（Intersection Observer）
- 手機版導航選單
- 滾動視差效果（純 CSS + JS）

## 免費使用

本模板可自由用於個人或商業專案，請勿移除頁面中的版權聲明。