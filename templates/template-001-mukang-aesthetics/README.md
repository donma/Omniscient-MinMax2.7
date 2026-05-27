# 沐光美學｜使用說明

## 樣板介紹
這是一套專為美容美學工作室設計的網站樣板，採用「左右分割 Split Layout」版型，傳遞專業且溫暖的品牌形象。適合強調服務品質與專業技術的美容 SPA、個人工作室或肌膚管理中心。

## 適合產業
美容美學、SPA 工作坊、臉部保養、敏感肌護理、孕婦美容、醫美諮詢

## 版型說明
- **主版型**：左右分割 Split Layout（Hero 為左右對半結構）
- **導覽列**：頂部固定，滑動時有陰影效果
- **手機選單**：漢堡按鈕靠右，全屏覆蓋式
- **色彩系統**：暖土陶窯色（赤陶橙 `#e07b53` + 森林綠 `#2d5016`）

## 12 頁檔案說明

| 檔案 | 用途 |
|------|------|
| `index.html` | 首頁（完整品牌展示） |
| `about.html` | 關於我們（品牌故事、團隊） |
| `services.html` | 服務項目總覽 |
| `service-detail.html` | 單一服務詳情 |
| `portfolio.html` | 作品案例展示 |
| `reviews.html` | 顧客好評 |
| `faq.html` | 常見問題 |
| `booking.html` | 預約表單與須知 |
| `process.html` | 服務流程介紹 |
| `blog.html` | 美學日誌列表 |
| `blog-detail.html` | 文章內頁 |
| `contact.html` | 聯絡我們＋地圖 |

## 如何修改品牌名稱
1. 開啟 `assets/css/style.css`，找到 `:root` 變數，修改 `--primary`、 `--accent` 為你的品牌色
2. 在所有 HTML 檔案中搜尋替換「沐光」與「mukang」
3. 修改 `index.html` 的 `<title>` 與 meta description

## 如何替換圖片
所有圖片均使用 Unsplash URL。正式上線前建議：
1. 將圖片下載後放置於 `assets/img/` 目錄
2. 在 HTML 中將 `src="https://images.unsplash.com/..."` 替換為 `src="assets/img/your-image.jpg"`
3. 建議尺寸：Hero 1200×800、服務圖 400×400、Blog 800×450

## 圖片來源注意事項
本樣板所有圖片來自 Unsplash（CC0 授權，可商用）。但建議：
- 正式交付客戶前，替換為客戶自有圖片或已購買授權的圖庫圖片
- 人物圖片建議取得モデル released 證明
- 確認圖片比例符合版型設計（建議 4:3 或 16:9）

## 如何修改 Line / IG / 電話
在所有 HTML 檔案中搜尋 `02-2771-5522`（電話）、`@mukang`（LINE），替換為實際聯絡方式。

## 如何修改 Google Map
開啟 `contact.html`，找到 `<iframe src="https://www.google.com/maps/embed?...">` 區段：
1. 前往 Google Maps 搜尋正確地址
2. 點擊「分享」→「嵌入地圖」
3. 複製新的 iframe 程式碼並替換

## 如何修改 SEO title / description
每個 HTML 檔案都包含以下 SEO 標籤，請替換為正確內容：
```html
<title>頁面標題 | 網站名</title>
<meta name="description" content="頁面描述，150 字以內">
```

## 如何修改 CTA
在 HTML 中搜尋 `立即預約`，可修改按鈕文字與連結。確認 `booking.html` 的路徑正確。

## 如何修改服務項目與價格
開啟 `services.html` 或 `index.html`，找到對應的服務卡片。修改標題、描述與價格。如需增減服務，需同步修改 `services.html` 的網格結構。

## ZIP 狀態
本樣板目前尚未打包 ZIP。目前僅保留 ZIP 按鈕與未來路徑，待全部樣板穩定後，再由批次程式統一打包。

## 生成資訊
- Model: minimaxai/minimax-m2.7
- Date: 2026-05-26
- Operator: AI-assisted static template generation