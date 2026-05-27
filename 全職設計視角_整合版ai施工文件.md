# 全職設計視角｜整合版 AI 施工文件

## 0. 文件目的

本文件整合前面 Phase 1 ~ Phase 4 的施工規格，改成一份可直接交給 AI 施工的完整文件。

本專案名稱固定為：

```text
全職設計視角
```

本文件的重點：

1. 不再分散成多份 Phase 文件。
2. 不再另開一個外層資料夾。
3. 所有檔案直接建立在目前專案根目錄下。
4. 每套樣板都是完整 12 頁網站。
5. 每套樣板要有自己的 `prompt.md`、`tags.json`、`template.json`、`README.md`、`preview.jpg`。
6. 主展示站要能瀏覽、篩選、預覽、查看 Prompt、顯示 ZIP 按鈕。
7. ZIP 先不打包，只保留按鈕與未來路徑。
8. 最後要產出根目錄 `README.md`，並標註本批由哪個模型產生。
9. 最後截圖必須使用 Microsoft Edge，截圖前等待 1 秒。
10. 全站選單文字必須使用中文。
11. 選單文字顏色不可與背景相同或過低對比，這是高優先級驗收項目。

---

## 1. 專案定位

本專案是給設計師、業務、網站製作人員使用的完整網站樣板庫。

不是單頁模板。
不是首頁截圖集。
不是只有 Hero 的設計稿。
不是單純換色換圖的公版集合。

核心定位：

```text
全職設計視角是一套完整網站樣板展示系統，讓設計師可以用專業設計視角快速挑選、預覽、複製、改造中小企業網站。
```

核心賣點：

```text
每一套樣板都是完整 12 頁網站，不只是首頁。
```

第二賣點：

```text
每一套樣板都附上自己的生成式 AI Prompt，可用於未來再生成類似風格網站。
```

第三賣點：

```text
設計師可以從產業、色系、功能、版型、圖片豐富度等多個角度篩選樣板。
```

---

## 2. 重要資料夾規則

本次施工 **不要再建立外層專案資料夾**。

錯誤：

```text
fullsite-template-gallery/
  index.html
  templates/
  assets/
```

正確：

```text
index.html
template-detail.html
README.md

assets/
  css/
    gallery.css
  js/
    gallery.js
    data.js
  img/
    previews/
      template-001.jpg
      template-002.jpg

data/
  templates.json
  layout-assignment.json
  quality-report.md

templates/
  template-001-beauty-studio/
  template-002-modern-restaurant/
  template-003-fashion-boutique/

downloads/
  .gitkeep
```

注意：

- `index.html` 直接放在專案根目錄。
- `template-detail.html` 直接放在專案根目錄。
- `README.md` 直接放在專案根目錄。
- `assets/` 直接放在專案根目錄。
- `data/` 直接放在專案根目錄。
- `templates/` 直接放在專案根目錄。
- `downloads/` 可以建立，但不要真的放 ZIP。

---

## 3. 技術限制

使用純前端靜態網站。

允許：

- HTML5
- CSS3
- JavaScript
- Bootstrap 5 CDN
- Bootstrap Icons CDN 或 Font Awesome CDN
- Google Fonts CDN
- 本地圖片
- 已確認可顯示的圖庫圖片 URL

禁止：

- React
- Vue
- Angular
- npm
- Vite
- Webpack
- 後端資料庫
- 登入系統
- 購物車
- 會員系統
- 需要 build 的流程

原因：

設計師下載或複製樣板後，應該可以直接修改 HTML / CSS / JS，不需要安裝開發環境。

---

## 4. 主展示站檔案結構

請在專案根目錄建立：

```text
index.html
```

用途：樣板展示首頁。

```text
template-detail.html
```

用途：樣板詳情頁，可透過 query string 讀取樣板資料。

```text
README.md
```

用途：專案總說明，最後必須產出。

```text
assets/css/gallery.css
```

用途：主展示站樣式。

```text
assets/js/gallery.js
```

用途：主展示站互動、篩選、切換、詳情頁資料讀取。

```text
assets/js/data.js
```

用途：內嵌 `TEMPLATES_DATA`，支援 `file://` 直接開啟，不依賴 fetch JSON。

```text
data/templates.json
```

用途：正式樣板資料來源。

```text
assets/img/previews/template-001.jpg
```

用途：主展示站卡片縮圖。

---

## 5. 每套樣板固定資料夾結構

每套樣板都放在：

```text
templates/template-xxx-slug/
```

範例：

```text
templates/template-001-beauty-studio/
  index.html
  about.html
  services.html
  service-detail.html
  portfolio.html
  reviews.html
  faq.html
  booking.html
  process.html
  blog.html
  blog-detail.html
  contact.html

  README.md
  template.json
  tags.json
  prompt.md

  assets/
    css/
      style.css
      responsive.css
    js/
      main.js
      slider.js
    img/
      preview.jpg
      image-sources.md
      hero.jpg
      service-01.jpg
      service-02.jpg
      service-03.jpg
      portfolio-01.jpg
      portfolio-02.jpg
      portfolio-03.jpg
```

每套必備檔案：

| 檔案 | 必須 | 說明 |
|---|---|---|
| index.html | 是 | 首頁 |
| about.html | 是 | 關於我們 |
| services.html | 是 | 服務 / 商品總覽 |
| service-detail.html | 是 | 單一服務 / 商品詳情 |
| portfolio.html | 是 | 作品 / 案例 |
| reviews.html | 是 | 顧客好評 |
| faq.html | 是 | 常見問題 |
| booking.html | 是 | 預約須知 / 詢問須知 |
| process.html | 是 | 流程介紹 |
| blog.html | 是 | 部落格列表 |
| blog-detail.html | 是 | 文章內頁 |
| contact.html | 是 | 聯絡我們 |
| README.md | 是 | 該樣板使用說明 |
| template.json | 是 | 該樣板基本資料 |
| tags.json | 是 | 該樣板標籤 |
| prompt.md | 是 | 該樣板專屬 AI prompt |
| assets/img/preview.jpg | 是 | 該樣板首頁縮圖 |
| assets/img/image-sources.md | 是 | 圖片來源紀錄 |

---

## 6. 每套固定 12 頁規則

每套網站固定 12 頁，不可增減。

```text
index.html
about.html
services.html
service-detail.html
portfolio.html
reviews.html
faq.html
booking.html
process.html
blog.html
blog-detail.html
contact.html
```

不可偷懶只做首頁。
不可讓內頁只有空殼。
不可每頁內容都長一樣。
不可只替換品牌名與顏色。

每一頁至少包含：

1. Header
2. Main
3. 至少 3 個內容 section
4. CTA section
5. Footer

首頁建議 8 到 10 個 section：

1. Hero
2. 品牌主張
3. 服務 / 商品 / 內容總覽
4. 差異化說明
5. 作品 / 案例 / 商品展示
6. 顧客好評
7. FAQ / 預約須知
8. 地點交通 / 聯絡資訊
9. CTA

---

## 7. 12 頁必須對齊同一版型

一套樣板如果採用某個版型，不能只改首頁。

例如：

```text
如果 index.html 是 Magazine 雜誌式首頁，about.html、services.html、portfolio.html、blog.html、contact.html 也要延續雜誌式排版語言。
```

錯誤：

```text
首頁是高級雜誌式，但內頁全部變成普通卡片列表。
```

正確：

```text
首頁、關於、服務、作品、文章、聯絡頁都使用同一套排版節奏、圖片比例、卡片語言與 CTA 方式。
```

每套樣板的 `template.json` 必須包含：

```json
{
  "layoutType": "Magazine 雜誌式首頁",
  "heroPattern": "editorial-cover",
  "navigationPattern": "top-navigation",
  "contentRhythm": "asymmetric-editorial-grid"
}
```

---

## 8. 建議覆蓋版型

整套系統至少要覆蓋以下版型，不要全部變成 Hero + 三卡片 + FAQ + CTA。

| 版型 | 用途 |
|---|---|
| 大圖沉浸式 Hero | 旅宿、酒吧、精品、攝影、戶外 |
| 左右分割 Split Layout | 顧問、醫療、教育、專業服務 |
| Magazine 雜誌式首頁 | 書店、選物、地方品牌、生活風格 |
| Masonry 作品牆 | 攝影、花藝、陶藝、插畫、作品集 |
| 商品型 Grid Catalog | 商品、食品、茶、香氛、家具、文具 |
| Storytelling 長卷軸 | 地方品牌、農場、職人、募資、老店 |
| Bento Grid 現代資訊版 | AI、SaaS、App、科技、B2B |
| Editorial / Text-first 文字導向 | 法律、會計、顧問、作者、研究中心 |
| Dashboard / Data 信任型 | B2B、物流、資安、金融、保全、管理顧問 |
| Event / Campaign 活動型 | 研討會、展覽、募資、活動、招募 |
| Left Rail Navigation 左側導覽型 | 高端專業服務、藝廊、研究型網站 |
| Map / Location-first 地圖場域型 | 旅遊、地方美食、房產、場地租借 |
| Pricing-first 方案導向型 | SaaS、醫療方案、清潔、寵物服務 |
| Knowledge Hub 知識中心型 | 醫療衛教、設計知識、研究中心 |
| Minimal 極簡多頁型 | 高端品牌、建築、室內、藝術 |

每套至少要在 4 個地方跟其他樣板不同：

1. Hero / 首屏結構
2. Navigation / 選單結構
3. Section 排列節奏
4. 圖片比例
5. 卡片設計
6. CTA 呈現方式
7. Portfolio / Services / Blog 內頁 layout
8. Footer 結構

---

## 9. 主展示站 UI 規格

`index.html` 是主展示站。

主展示站必須包含：

1. Header
2. Hero / 專案介紹
3. 左側篩選區
4. 右側樣板卡片列表
5. Grid / List 切換
6. 樣板統計數字
7. Footer

### 9.1 左側篩選

選單文字一律使用中文。

篩選區至少包含：

#### 產業分類

- 全部
- 餐飲甜點
- 美容健康
- 美妝美業
- 零售商品
- 專業服務
- 教育課程
- 創意設計
- 空間生活
- 旅遊休閒
- 科技商務
- 地方品牌
- 個人品牌
- 活動組織
- 寵物服務

#### 背景模式

- 全部
- 深色底
- 淺色底

#### 色系分類

- 全部
- 淺色系
- 深色系
- 奶茶色
- 黑金色
- 白灰極簡
- 粉色柔和
- 綠色自然
- 藍白信任
- 暖棕生活
- 高對比現代
- 科技漸層
- 大地色

#### 功能標籤

- Slider Banner
- 服務列表
- 商品分類
- 商品詳情
- 作品集
- 顧客好評
- FAQ
- 預約須知
- 地圖區塊
- Line 預約
- Instagram 連結
- 部落格
- 強 SEO
- LocalBusiness Schema
- Organization Schema
- 圖片豐富

#### 版型類型

- 大圖沉浸式 Hero
- 左右分割 Split Layout
- Magazine 雜誌式首頁
- Masonry 作品牆
- 商品型 Grid Catalog
- Storytelling 長卷軸
- Bento Grid 現代資訊版
- Editorial / Text-first 文字導向
- Dashboard / Data 信任型
- Event / Campaign 活動型
- Left Rail Navigation 左側導覽型
- Map / Location-first 地圖場域型
- Pricing-first 方案導向型
- Knowledge Hub 知識中心型
- Minimal 極簡多頁型

---

## 10. 選單文字與顏色規則

這是高優先級規則。

全站所有選單都要使用中文。

例如：

錯誤：

```text
Home / About / Services / Portfolio / Contact
```

正確：

```text
首頁 / 關於我們 / 服務項目 / 作品案例 / 聯絡我們
```

如果該產業需要特殊命名，也要用中文：

```text
菜單 / 空間環境 / 訂位須知
```

```text
商品系列 / 選物故事 / 詢問方式
```

```text
解決方案 / 成功案例 / 預約 Demo
```

### 10.1 選單文字顏色不可與背景相同

這是常犯錯誤，必須嚴格檢查。

不可出現：

- 白底白字
- 黑底黑字
- 深色背景配深灰文字
- 淺色背景配淺灰文字
- hover 後文字消失
- mobile menu 展開後文字跟背景混在一起
- active 狀態看不出來

最低要求：

```text
一般選單文字與背景對比必須足夠清楚。
hover、active、focus、mobile menu 狀態都要檢查。
```

每套樣板都要檢查：

- Desktop header menu
- Mobile hamburger menu
- Sidebar filter menu
- Template detail page links
- Footer links
- Button text

---

## 11. 樣板卡片 UI 規格

每張樣板卡片要顯示：

- 首頁縮圖
- 樣板名稱
- 產業分類
- 色系
- 背景模式：深色底 / 淺色底
- 主要版型
- 主要 tags
- 12 Pages 標記
- Prompt 標記
- 圖片豐富標記
- ZIP 待打包標記
- 預覽網站按鈕
- 查看詳情按鈕
- 查看 Prompt 按鈕
- ZIP 按鈕

ZIP 按鈕規則：

```text
只顯示按鈕，不打包 ZIP。
```

如果 `hasZip=false`：

```text
按鈕文字：ZIP 待打包
按鈕狀態：disabled 或不可點擊
```

不可連到不存在的 ZIP。

---

## 12. template-detail.html 規格

`template-detail.html` 透過 query string 讀取資料。

範例：

```text
template-detail.html?id=template-001
```

詳情頁需要顯示：

1. 大尺寸首頁縮圖
2. 樣板名稱
3. 樣板描述
4. 產業分類
5. 色系分類
6. 背景模式
7. 版型類型
8. 功能 tags
9. 12 頁頁面清單
10. 適用產業
11. SEO 結構說明
12. 圖片來源注意事項
13. 預覽網站按鈕
14. 查看 Prompt 按鈕
15. ZIP 待打包按鈕

---

## 13. 圖片規格

圖片要有代入感，不要整站只有 icon、gradient、placeholder。

### 13.1 圖片來源

優先使用：

- 本地圖片
- Unsplash
- Pexels
- Pixabay
- 明確可公開顯示的圖庫圖片
- 可替換示意圖

禁止使用：

- Google 圖片搜尋結果直接複製
- 競爭對手網站圖片
- 有浮水印圖片
- 需要登入才能看見的圖片
- 會 403 / 404 的圖片
- 防盜連圖片
- 來源不明商業攝影圖
- 明顯是別人品牌專屬商品照的圖片

### 13.2 圖片檢查

每張外部圖片放入 HTML 前要盡量確認：

- URL 可直接開啟
- 圖片能在瀏覽器顯示
- 不回傳 403
- 不回傳 404
- 沒有浮水印
- 沒有競爭對手 Logo
- 圖片主題符合該產業
- 圖片比例適合版型

### 13.3 每套圖片數量

每套至少約 25 ~ 30 張圖片或視覺素材。

| 類型 | 最少數量 |
|---|---:|
| Hero / 首屏圖片 | 1 |
| 服務 / 商品 / 方案圖片 | 6 |
| 作品 / 案例 / 情境圖片 | 8 |
| Blog 圖片 | 4 |
| Contact / 場域圖片 | 2 |
| 品牌細節圖 | 2 |
| 預覽截圖 | 1 |

### 13.4 image-sources.md

每套都必須建立：

```text
assets/img/image-sources.md
```

格式：

```md
# 圖片來源紀錄

## 使用規則
本樣板圖片僅作為設計示意。正式交付客戶前，請替換為客戶自有圖片或已授權圖片。

## 圖片清單
| 檔名 / URL | 用途 | 來源 | 檢查狀態 | 備註 |
|---|---|---|---|---|
| hero.jpg | 首頁 Hero | Unsplash / Pexels / Placeholder | 可顯示 | 示意圖，正式交付前建議替換 |
```

---

## 14. SEO 規格

每個 HTML 頁面都必須包含：

- `title`
- `meta description`
- canonical placeholder
- Open Graph title
- Open Graph description
- Open Graph image
- 語意化 HTML5：`header`、`main`、`section`、`article`、`footer`
- 首頁只能有一個 `h1`
- 每個 section 要有 `h2` 或合理標題
- 圖片必須有 `alt`
- CTA 文字要清楚

實體店家類型首頁加入 LocalBusiness Schema placeholder。

公司 / 組織 / 科技 / 顧問類型加入 Organization Schema placeholder。

文章頁 `blog-detail.html` 加入 Article Schema placeholder。

---

## 15. RWD 規格

所有樣板都要支援：

- 桌機
- 平板
- 手機

RWD 要求：

- 桌機可雙欄、三欄、四欄。
- 平板最多雙欄。
- 手機全部改成單欄。
- Header 手機版要有漢堡選單。
- 漢堡選單展開後文字必須清楚可讀。
- 按鈕在手機上要容易點擊。
- 圖片不可破版。
- 卡片不可擠壓到無法閱讀。
- 字級不可過小。

---

## 16. JavaScript 功能要求

每套樣板可以有簡單 JS。

必要功能：

- 手機選單開關
- FAQ accordion
- Slider Banner，若該樣板有標記 Slider Banner
- 平滑滾動，若有錨點
- 表單假送出
- 回到頂部按鈕，可選

禁止：

- 需要後端 API 才能運作
- 表單真的送出資料
- 無法在 file:// 環境下瀏覽
- 單筆資料錯誤拖垮整個 gallery

### 16.1 tags 容錯

`gallery.js` 必須保留 tags 容錯。

```js
function getTemplateTags(template) {
  if (Array.isArray(template.tags)) {
    return template.tags;
  }

  if (template.tags && typeof template.tags === 'object') {
    return Object.values(template.tags).flat().filter(Boolean);
  }

  return [];
}
```

所有地方都使用：

```js
getTemplateTags(template)
```

不可直接寫：

```js
template.tags.slice(0, 3)
```

---

## 17. data/templates.json 規格

`data/templates.json` 是正式資料來源。

同時因為 `file://` 可能無法 fetch JSON，所以需要同步產生：

```text
assets/js/data.js
```

`data.js` 內容格式：

```js
const TEMPLATES_DATA = [
  ...templates
];
```

規則：

- `templates.json` 與 `data.js` 筆數必須一致。
- 不可手動維護兩份造成不同步。
- 修改 `templates.json` 後必須重新產生 `data.js`。
- `gallery.js fallback` 只保留 3 筆示範資料，不可放完整資料。

每筆資料範例：

```json
{
  "id": "template-001",
  "slug": "beauty-studio",
  "name": "Beauty Studio",
  "description": "適合美容美學工作室的高信任感網站。",
  "industry": "美容美學",
  "industryCategory": "美容健康",
  "colorTheme": "奶茶色",
  "backgroundMode": "light",
  "layoutType": "左右分割 Split Layout",
  "heroPattern": "split-trust-hero",
  "navigationPattern": "top-navigation-mobile-drawer",
  "contentRhythm": "service-trust-case-faq",
  "previewImage": "assets/img/previews/template-001.jpg",
  "demoUrl": "templates/template-001-beauty-studio/index.html",
  "zipUrl": "downloads/template-001-beauty-studio.zip",
  "hasZip": false,
  "promptUrl": "templates/template-001-beauty-studio/prompt.md",
  "pageCount": 12,
  "imageRich": true,
  "status": "candidate",
  "isFeatured": false,
  "isHidden": false,
  "tags": ["美容健康", "美容美學", "淺色系", "服務列表", "作品集", "FAQ", "Line 預約", "強 SEO"]
}
```

注意：

```text
tags 必須是陣列，不可寫成物件。
```

---

## 18. template.json 規格

每套樣板內部的 `template.json` 必須包含：

```json
{
  "id": "template-001",
  "slug": "beauty-studio",
  "name": "Beauty Studio",
  "description": "適合美容美學工作室的高信任感網站。",
  "industry": "美容美學",
  "industryCategory": "美容健康",
  "colorTheme": "奶茶色",
  "backgroundMode": "light",
  "layoutType": "左右分割 Split Layout",
  "heroPattern": "split-trust-hero",
  "navigationPattern": "top-navigation-mobile-drawer",
  "contentRhythm": "service-trust-case-faq",
  "previewImage": "assets/img/preview.jpg",
  "zipFile": "../../downloads/template-001-beauty-studio.zip",
  "hasZip": false,
  "promptFile": "prompt.md",
  "pageCount": 12,
  "imageRich": true,
  "status": "candidate",
  "isFeatured": false,
  "isHidden": false,
  "generatedBy": "請填入實際使用模型名稱",
  "imagePolicy": "圖片僅作為設計示意，正式交付前請替換為客戶自有或授權圖片。",
  "pages": [
    "index.html",
    "about.html",
    "services.html",
    "service-detail.html",
    "portfolio.html",
    "reviews.html",
    "faq.html",
    "booking.html",
    "process.html",
    "blog.html",
    "blog-detail.html",
    "contact.html"
  ]
}
```

---

## 19. tags.json 規格

每套 `tags.json` 必須包含：

```json
{
  "id": "template-001",
  "name": "Beauty Studio",
  "industryCategory": "美容健康",
  "industry": ["美容美學", "個人工作室", "服務型網站"],
  "colors": ["奶茶色", "淺色系", "粉棕色"],
  "backgroundMode": "light",
  "features": [
    "服務列表",
    "作品集",
    "顧客好評",
    "FAQ",
    "預約須知",
    "Line 預約",
    "Instagram 連結",
    "地圖區塊",
    "強 SEO",
    "LocalBusiness Schema",
    "圖片豐富"
  ],
  "layout": ["左右分割 Split Layout", "服務型網站", "專業信任導向"],
  "pages": 12,
  "hasZip": false,
  "hasPrompt": true,
  "hasPreview": true,
  "imageRich": true,
  "status": "candidate"
}
```

---

## 20. prompt.md 規格

每套都必須有自己的 `prompt.md`。

`prompt.md` 必須能當成賣點，而不是只有幾句話。

必備章節：

1. 樣板一句話定位
2. 適合產業
3. 不適合產業
4. 視覺方向
5. 色彩策略
6. 版型策略
7. Hero Pattern
8. Navigation Pattern
9. Content Rhythm
10. 圖片風格要求
11. 圖片數量要求
12. 12 頁內容定位
13. SEO 關鍵字策略
14. CTA 策略
15. RWD 規則
16. 可替換內容
17. 禁止事項
18. 與相似樣板的差異說明

必須明確寫：

```text
本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
```

---

## 21. 每套 README.md 規格

每套樣板自己的 README.md 必須包含：

1. 樣板介紹
2. 適合產業
3. 版型說明
4. 12 頁檔案說明
5. 如何修改品牌名稱
6. 如何替換圖片
7. 圖片來源注意事項
8. 如何修改 Line / IG / 電話
9. 如何修改 Google Map
10. 如何修改 SEO title / description
11. 如何修改 CTA
12. ZIP 尚未打包說明
13. 生成模型資訊

ZIP 尚未打包說明：

```md
## ZIP 狀態
本樣板目前尚未打包 ZIP。
目前僅保留 ZIP 按鈕與未來路徑，待全部樣板穩定後，再由批次程式統一打包。
```

生成模型資訊：

```md
## 生成資訊
本樣板由以下模型輔助產生：
- Model: 請填入實際模型名稱
- Date: 請填入產生日期
- Operator: AI-assisted static template generation
```

---

## 22. 根目錄 README.md 規格

最後必須在專案根目錄建立：

```text
README.md
```

內容必須包含：

1. 專案名稱：全職設計視角
2. 專案用途
3. 技術架構
4. 如何開啟主展示站
5. 資料夾結構
6. 樣板數量
7. 每套固定 12 頁說明
8. ZIP 尚未打包說明
9. 如何未來批次打包 ZIP
10. 如何修改樣板
11. 如何更新 `data/templates.json`
12. 如何同步產生 `assets/js/data.js`
13. 截圖規則
14. 圖片來源注意事項
15. 生成模型標註
16. 驗收清單

生成模型標註範例：

```md
## 生成模型
本專案由以下模型輔助產生：

- Main Generation Model: 請填入實際使用模型名稱
- Review / Planning Model: 請填入規劃模型名稱
- Generated Date: 請填入日期

注意：本專案為 AI-assisted static website template gallery，正式交付客戶前仍需人工檢查圖片授權、文案、連結與 SEO 設定。
```

---

## 23. 截圖規則

最後縮圖與驗收截圖都使用 Microsoft Edge。

### 23.1 截圖工具要求

使用 Edge 或 Playwright / Selenium 控制 Edge。

不可用隨機瀏覽器導致結果不一致。

### 23.2 截圖前等待 1 秒

每次截圖前必須等待：

```text
1000ms
```

原因：

- 等字型載入
- 等圖片載入
- 等 layout 穩定
- 等 lazy load / animation 初始狀態完成

### 23.3 截圖尺寸

桌機截圖建議：

```text
1440 x 2200
```

或依實際首頁高度截取，但不要過長到無法辨識。

手機抽查建議：

```text
390 x 1200
```

### 23.4 預覽圖要求

每套都要產生：

```text
templates/template-xxx-slug/assets/img/preview.jpg
assets/img/previews/template-xxx.jpg
```

縮圖要像真實網站截圖。

不可：

- 只截 Hero
- 做成單張海報
- 使用假 UI mockup
- 截到 loading 狀態
- 截到破圖狀態
- 截到選單文字看不見

---

## 24. 防重複規則

AI 必須避免產出大量相似樣板。

每套樣板建立前，必須先定義：

```json
{
  "id": "template-001",
  "layoutType": "左右分割 Split Layout",
  "heroPattern": "split-trust-hero",
  "navigationPattern": "top-navigation-mobile-drawer",
  "contentRhythm": "service-trust-case-faq",
  "imageStrategy": "people-and-service-context-images",
  "differentFrom": ["template-002", "template-003"],
  "differenceReason": "本樣板以專業信任與預約轉換為核心，不是商品展示或雜誌式內容站。"
}
```

可建立：

```text
data/layout-assignment.json
```

用來記錄每套樣板的版型分配。

不可接受：

- 30 套都同一個 Hero
- 30 套都同一種三卡片 section
- 30 套都同一個 footer
- 只是換色換文案
- 只是換圖片

---

## 25. 施工順序

請依序施工，不要一次亂做。

### Step 1：建立根目錄檔案

建立：

```text
index.html
template-detail.html
README.md
assets/css/gallery.css
assets/js/gallery.js
assets/js/data.js
data/templates.json
```

### Step 2：建立資料結構

建立：

```text
templates/
assets/img/previews/
downloads/
data/layout-assignment.json
```

### Step 3：建立樣板資料夾

每套建立固定 12 頁與必備檔案。

### Step 4：先做代表樣板

先完成少量代表樣板，驗收版型、圖片、RWD、選單顏色與截圖品質。

### Step 5：分批施工

每批最多 10 套。

每批完成後立刻驗收，不要全部做完才看。

### Step 6：更新資料

每批完成後更新：

```text
data/templates.json
assets/js/data.js
assets/img/previews/
```

### Step 7：Edge 截圖

使用 Edge 截圖。

每張截圖前等待 1 秒。

### Step 8：總驗收

檢查：

- 主展示站可開
- 卡片可顯示
- 篩選可用
- 詳情頁可用
- 每套預覽可開
- 每套 12 頁存在
- 選單文字中文
- 選單文字不與背景同色
- 圖片可顯示
- ZIP 顯示待打包

---

## 26. 驗收清單

### 26.1 主展示站

- [ ] `index.html` 可直接開啟
- [ ] `template-detail.html` 可讀取 query string
- [ ] 樣板卡片可正常顯示
- [ ] 左側篩選可用
- [ ] Grid / List 切換可用
- [ ] 所有選單文字為中文
- [ ] 所有選單文字顏色與背景對比清楚
- [ ] `data/templates.json` 與 `assets/js/data.js` 筆數一致
- [ ] `gallery.js fallback` 只保留 3 筆示範資料
- [ ] ZIP 按鈕顯示待打包
- [ ] Prompt 按鈕可用
- [ ] Preview 按鈕可用

### 26.2 每套樣板

- [ ] 有 12 個 HTML 頁面
- [ ] 12 頁都能開啟
- [ ] 12 頁都對齊同一版型語言
- [ ] 不是只改首頁
- [ ] 有 `template.json`
- [ ] 有 `tags.json`
- [ ] 有 `prompt.md`
- [ ] 有 `README.md`
- [ ] 有 `assets/img/image-sources.md`
- [ ] 有 `assets/img/preview.jpg`
- [ ] 有 `assets/css/style.css`
- [ ] 有 `assets/css/responsive.css`
- [ ] 有 `assets/js/main.js`
- [ ] `hasZip=false`
- [ ] ZIP 按鈕顯示待打包
- [ ] 選單文字為中文
- [ ] 選單文字顏色清楚可見
- [ ] 手機漢堡選單可用
- [ ] FAQ 可操作
- [ ] 表單假送出可用
- [ ] 圖片可顯示
- [ ] 圖片無 403 / 404
- [ ] 圖片無浮水印
- [ ] SEO meta 完整
- [ ] Open Graph 完整
- [ ] Schema placeholder 完整

### 26.3 截圖驗收

- [ ] 使用 Edge 截圖
- [ ] 截圖前等待 1 秒
- [ ] 縮圖不是 loading 狀態
- [ ] 縮圖不是破圖狀態
- [ ] 縮圖能看出版型
- [ ] 縮圖內選單文字可讀
- [ ] `templates/template-xxx/assets/img/preview.jpg` 存在
- [ ] `assets/img/previews/template-xxx.jpg` 存在

---

## 27. 不可接受結果

以下視為不合格：

- 又建立一個外層專案資料夾
- 根目錄沒有 `README.md`
- README.md 沒有標註使用模型
- 只做首頁
- 內頁是空殼
- 12 頁版型不一致
- 樣板高度重複
- 選單不是中文
- 選單文字顏色跟背景一樣或太接近
- 手機選單打開後文字看不見
- 圖片破圖
- 使用 403 / 404 圖片
- 使用浮水印圖片
- 使用來源不明圖片
- `tags` 寫成物件而不是陣列
- `templates.json` 與 `data.js` 不同步
- ZIP 按鈕連到不存在檔案
- 截圖沒有等 1 秒，截到 loading 或破版
- 使用大範圍 regex 改壞 CSS

---

## 28. 最後交付物

施工完成後，專案根目錄應包含：

```text
index.html
template-detail.html
README.md
assets/
data/
templates/
downloads/
```

每套樣板包含完整 12 頁與 metadata。

主展示站可直接用瀏覽器開啟。

ZIP 只顯示按鈕，不產生壓縮檔。

最後必須輸出施工報告，例如：

```text
final.report.md
```

報告內容至少包含：

1. 完成項目總覽
2. 使用模型名稱
3. 樣板數量
4. 頁面總數
5. 產業分布
6. 版型分布
7. 深色 / 淺色分布
8. 圖片檢查結果
9. Edge 截圖結果
10. 選單中文與顏色檢查結果
11. `templates.json` / `data.js