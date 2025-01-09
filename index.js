'use strict';

const fs = require('hexo-fs');
const path = require('path');

// CSS资源位置
const CSS_PATH = path.resolve(path.resolve(__dirname, "./source/css"), 'album-card.css');

// 资源生成器
hexo.extend.generator.register('album_asset', () => [{
  path: 'css/album-card.css',
  data: function () {
    return fs.createReadStream(CSS_PATH);
  }
}]);

// 注入CSS引用
hexo.extend.filter.register('after_post_render', function (data) {
  if (data.content.includes('album-card')) {
    let link_css = `<link rel="stylesheet" href="${hexo.config.root}css/album-card.css" type="text/css">`;
    data.content = link_css + data.content;
  }
  return data;
});

const albumTag = (args, content) => {
  const [title, number, date, event, note, description, imageUrl, downloadUrl] = args;

  const DOWNLOAD_ICONS = {
    'NO': '',
    'undefined': `<div class="album-download"><i class="fa-solid fa-xmark"></i></div>`,
    'dlsite': `<i class="fa-solid fa-cart-shopping"></i>`,
    'download': `<i class="fa-solid fa-cloud-arrow-down"></i>`,
    'default': `<i class="fa-solid fa-file-circle-question"></i>`
  };

  const getIconType = (url) => {
    if (!url) return 'undefined';
    if (url === 'NO') return 'NO';
    if (url.includes('dlsite')) return 'dlsite';
    if (['archive', 'khinside', 'doujinstyle'].some(site => url.includes(site))) return 'download';
    return 'default';
  };

  let downloadIcon = '';
  const iconType = getIconType(downloadUrl);
  if (iconType !== 'NO' && iconType !== 'undefined') {
    downloadIcon = `<a href="${downloadUrl}" target="_blank" class="album-download">${DOWNLOAD_ICONS[iconType]}</a>`;
  } else {
    downloadIcon = DOWNLOAD_ICONS[iconType];
  }

  const template = `
    <div class="album-card">
      <div class="album-main">
       ${downloadIcon}
        <div class="album-cover">
          <img src="${imageUrl}">
        </div>
        <div class="album-info">
          <p class="album-title">${title}</p>
          <div class="album-meta">
            <div class="meta-left">
              <div>編號：<span>${number}</span></div>
              <div>時間：<span>${date}</span></div>
            </div>
            <div class="meta-right">
              <div>展會：<span>${event}</span></div>
              <div>備注：<span>${note}</span></div>
            </div>
          </div>
          <div class="album-desc">
            ${description}
          </div>
        </div>
      </div>
      <div>
      ${content.replace(/(<li[^>]*>)(.*?)【RED】([\s\S]*?)(<\/li>)/g, (match, p1, p2, p3, p4) => {
        return `${p1}<span class="red-mark">${p2}${p3}</span>${p4}`;
      })}
      </div>
    </div>
  `;

  return template;
};

hexo.extend.tag.register('album', albumTag, { ends: true });