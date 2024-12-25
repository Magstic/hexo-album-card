# hexo-album-card

一個在 Hexo 部落格中添加 CD 卡片的插件。
<br>
**該插件為自我使用，暫不考慮進一步適配和美化。**

## 安装

```bash
npm i hexo-album-card
```

## 使用方法

```markdown
{% album "CD名" "CD編號" "發行時間" "發行展會" "版本備注" "簡要描述" "夾克URL" %}{% endalbum %}
```

### 参数说明

| 参数 | 必填 | 说明 | 示例 |
|------|------|------|------|
| CD名 | 是 | CD標題 | "annihilate" |
| CD編號 | 是 | CD編號 | "ADSH-013" |
| 發行時間 | 是 | 發行時間 | "2004-10-09" |
| 發行展會 | 是 | 發行展會 | "秋M3" |
| 版本備注 | 否 | 版本備注 | "CD-R版" |
| 簡要描述 | 是 | 簡要描述 | "RPG 全滅鋼琴曲集。" |
| 夾克URL | 是 | 封面連結 | "/images/jacket.jpg" |

### 示例

```markdown
{% album "annihilate" "ADSH-013" "2004-10-09" "秋M3" "CD-R版" "RPG 全滅鋼琴曲集。" "/images/jacket.jpg" %}
{% endalbum %}
```

```markdown
{% album "annihilate" "ADSH-013" "2004-10-09" "秋M3" "CD-R版" "RPG 全滅鋼琴曲集。" "/images/jacket.jpg" %}
{% hideToggle Track,#303030,white %}
01. Romancing SaGa2
02. Final Fantasy
03. Chrono Trigger
04. Romancing SaGa3
05. 聖剣伝説2
06. イースⅡ
07. Final FantasyⅢ
08. 新約聖剣伝説
{% endhideToggle %}
{% endalbum %}
```

## 许可证

MIT License © 2024 [Magstic](https://github.com/magstic)
```