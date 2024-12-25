'use strict';

const fs = require('hexo-fs');
const path = require('path');

// CSS资源位置
const CSS_PATH = path.resolve(path.resolve(__dirname, "./source/css"), 'album-card.css');

// 资源生成器
hexo.extend.generator.register('album_asset', () => [{
    path: 'css/album-card.css',
    data: function() {
        return fs.createReadStream(CSS_PATH);
    }
}]);

// 注入CSS引用
hexo.extend.filter.register('after_post_render', function(data) {
    if (data.content.includes('album-card')) {
        let link_css = `<link rel="stylesheet" href="${hexo.config.root}css/album-card.css" type="text/css">`;
        data.content = link_css + data.content;
    }
    return data;
});

const albumTag = (args, content) => {
  const [title, number, date, event, note, description, imageUrl] = args;
  
  const template = `
    <div class="album-card">
      <div class="album-main">
        <div class="album-cover">
          <img src="${imageUrl}">
        </div>
        <div class="album-info">
          <p class="album-title">${title}</p>
          <div class="album-meta">
            <div class="meta-left">
              <div>编号：<span>${number}</span></div>
              <div>时间：<span>${date}</span></div>
            </div>
            <div class="meta-right">
              <div>展会：<span>${event}</span></div>
              <div>备注：<span>${note}</span></div>
            </div>
          </div>
          <div class="album-desc">
            ${description}
          </div>
        </div>
      </div>
    </div>
  `;

  return template;
};

hexo.extend.tag.register('album', albumTag, {ends: true});