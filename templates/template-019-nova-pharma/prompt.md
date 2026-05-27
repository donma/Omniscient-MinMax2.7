# NovaPharma 網站模板生成提示

## 主題風格
- 產業：醫療製藥 / 醫藥產業
- 名稱：NovaPharma 新星製藥
- 設計風格：清新薄荷 + 曲線分隔線
- 色彩配置：
  - Mint White #E8F8F5
  - Teal #00897B
  - Deep Teal #004D40
  - White #FFFFFF

## 字體選擇
- 標題字體：Nunito Sans (粗體、無襯線)
- 內文字體：Source Sans Pro (易讀性高的無襯線字體)

## CSS類別命名規範
所有CSS類別必須使用 novaxxx 前綴，完全避免使用任何已在其他模板中使用的通用類別名稱（如 .nav, .hero, .section, .btn, .card, .grid-2 等）。

### 強制使用的獨特類別名稱
- .nova-header - 固定頂部導航列
- .nova-logo - Logo區域
- .nova-nav-link - 導航連結
- .nova-hero - 全幅英雄區塊
- .nova-wave-divider - 曲線分隔線SVG
- .nova-product-card - 產品卡片
- .nova-stat-ring - 圓形統計環
- .nova-team-card - 團隊成員卡片
- .nova-publication-card - 發表論文卡片
- .nova-faq-item - FAQ項目
- .nova-btn-teal - 主按鈕樣式
- .nova-footer - 頁尾區塊

## 設計元素

### 曲線分隔線 (Wave Divider)
使用SVG曲線作為區塊之間的分隔，顏色從 Teal 漸變到 White。範例：
```svg
<svg viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path fill="#FFFFFF" d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"/>
</svg>
```

### 圓形統計環
使用SVG circle元素，stroke-dasharray 技術實現動態進度效果。

### 重疊式團隊頭像
使用絕對定位讓三個圓形頭像稍微重疊，營造團隊聚集效果。

## 內容策略
### 中文內容
- 所有內容使用繁體中文
- 使用真實的醫藥產品名稱（如心舒寧膠囊、糖倍康錠等）
- 真實的科學術語和數據
- 專業的公司介紹和團隊成員描述

### 圖片使用
- 從 Unsplash 取得授權圖片
- 製藥/實驗室相關主題
- 人物頭像（團隊成員）
- 醫療場景
- 規格：Hero 圖片使用 ?w=1200&q=85，內容圖片使用 ?w=800&q=85

## 技術要求
- 每個HTML頁面需有完整 DOCTYPE
- FontAwesome CDN 引入
- Google Fonts 引入 Nunito Sans + Source Sans Pro
- RWD 響應式設計（桌面、平板、手機）
- 表單提交時有模擬處理回饋
- FAQ 有 Accordion 展開/收合效果
- 統計環在滾動到可視範圍時觸發動畫

## 頁面清單 (12頁)
1. index.html - 首頁
2. about.html - 關於我們
3. products.html - 產品專區
4. product-detail.html - 產品詳情
5. research.html - 研發創新
6. team.html - 團隊成員
7. publications.html - 研究成果
8. publication-detail.html - 論文詳情
9. faq.html - 常見問題
10. contact.html - 聯絡我們
11. careers.html - 人才招募
12. news.html - 最新消息