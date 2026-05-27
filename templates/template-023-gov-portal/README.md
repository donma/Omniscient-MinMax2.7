# GovPortal 政府入口網站

## 主題說明
政府機構入口網站，以「雙面板 Portal + 資訊卡片牆」為設計方向。提供市民一個清晰、便利的數位公共服務入口。

## 設計特色
- **色彩**: 公務藍 #1565C0 / 資訊白 #F5F5F5 / 系統灰 #37474F / 警示橙 #FF6D00
- **字體**: Noto Sans TC（中文）+ Source Sans Pro
- **導航**: 雙面板（sidebar + main content），sticky 篩選面板
- **佈局**: Portal grid，資訊卡片牆，數據統計儀表板

## 頁面列表
1. index.html — 入口儀表板
2. announcements.html — 公告列表
3. announcement-detail.html — 公告詳情
4. services.html — 服務項目
5. forms.html — 線上表單
6. news.html — 新聞列表
7. news-detail.html — 新聞詳情
8. about.html — 關於我們
9. portal.html — 市民入口
10. faq.html — 常見問題
11. links.html — 相關連結
12. contact.html — 聯絡我們

## 技術
- Google Fonts（Noto Sans TC + Source Sans Pro）
- FontAwesome 6.5
- 純 HTML/CSS/JS，無需後端
- 圖片：Unsplash（城市/公共服務相關）

## CSS 結構
- `layout-portal` class 結構
- 固定左側 240px sidebar
- `.user-gov` / `.portal-main` 等 class name