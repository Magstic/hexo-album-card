'use strict';

const fs = require('fs');
const path = require('path');

hexo.extend.filter.register('after_post_render', function(data) {
  if (data.content.includes('album-card')) {
    data.content = `<link rel="stylesheet" href="/css/album-card.css">\n${data.content}`;
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