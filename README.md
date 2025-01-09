# hexo-album-card

一個專門用於在 Hexo 部落格中展示同人音樂專輯資訊的標籤插件。
<br>
本插件提供簡潔的專輯卡片展示功能，支援專輯基本資訊、曲目列表及製作人員資訊的展示。
<br><br>
我沒想到這個自用的 Hexo 插件會有數百次 Down，但是我并不打算進一步適配。
<br>
若您在使用中遇見問題和錯誤，可使用電郵聯絡我：`magsticwind@gmail.com`。
<br>
您可以隨意下載原始碼進行二次開發，但我不接受任何的功能擴展委托。
<br><br>
GitHub Copilot 幫助我完成了README.me，我也不想深度檢查了，就這樣吧XD

## 功能特點

- 支援專輯基本資訊展示
- 支援自定義專輯封面
- 內建多種下載資源圖示
- 支援摺疊式曲目列表
- 響應式設計，完美適配移動裝置

## 環境要求

- Node.js >= 12.0.0
- Hexo >= 5.0.0
- 主題需要集成 Font Awesome 圖示庫

## 安裝方式

```bash
npm i hexo-album-card
```

## 使用方法

```markdown
{% album "CD名" "CD編號" "發行時間" "發行展會" "版本備注" "簡要描述" "夾克URL" "下載URL" %}{% endalbum %}
```

### 參數說明

| 參數 | 必填 | 說明 | 示例 |
|------|------|------|------|
| CD名稱 | 是 | 專輯完整名稱 | "annihilate" |
| CD編號 | 是 | 專輯識別碼 | "ADSH-013" |
| 發行時間 | 是 | 發行日期（YYYY-MM-DD） | "2004-10-09" |
| 發行展會 | 是 | 首發展會名稱 | "秋M3" |
| 版本備註 | 否 | 特殊版本說明 | "CD-R版" |
| 簡要描述 | 是 | 專輯簡介 | "RPG 全滅鋼琴曲集。" |
| 封面URL | 是 | 專輯封面圖片連結 | "/images/jacket.jpg" |
| 下載URL | 否 | 資源連結 | "https://example.com" |

### 下載圖示說明

下載URL 的顯示規則如下：
- `NO`：不顯示任何圖示
- 空值：顯示無資源圖示 <i class="fa-solid fa-xmark"></i>
- 包含 `dlsite`：顯示購買圖示 <i class="fa-solid fa-cart-shopping"></i>
- 包含 `archive`/`khinside`/`doujinstyle`：顯示下載圖示 <i class="fa-solid fa-cloud-arrow-down"></i>
- 其他情況：顯示未知來源圖示 <i class="fa-solid fa-file-circle-question"></i>

### 進階用法

支援結合 Hexo 的摺疊標籤使用，可完整展示曲目列表和製作人員資訊：

```markdown
{% album "專輯名稱" "編號" "日期" "展會" "版本" "描述" "封面URL" "下載URL" %}
{% hideToggle 曲目列表,#303030,white %}
1. 第一曲
2. 第二曲【RED】
3. 第三曲
{% endhideToggle %}

{% hideToggle 製作人員,#303030,white %}
- 編曲：XXX
- 插畫：YYY
- 製作：ZZZ
{% endhideToggle %}
{% endalbum %}
```

特殊標記：
- 使用【RED】可為曲目添加特殊樣式
- 製作人員資訊使用無序列表
- 曲目列表使用有序列表

## 注意事項

1. 圖片路徑支援相對路徑和絕對路徑
2. 建議封面圖片寬高比為 1:1
3. 摺疊標籤需要主題支援 hideToggle 功能

## 渲染示例
![Render01.webp](https://s2.loli.net/2024/12/28/QiCckxEOILmVhwz.webp)

![Render03.webp](https://s2.loli.net/2024/12/28/AgFrtIjuqSDfLwY.webp)

![Render02.webp](https://s2.loli.net/2024/12/28/bF3YMisj7ymutrU.webp)


## 開源許可

MIT License © 2024 [Magstic](https://github.com/magstic)