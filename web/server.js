const browserSync = require('browser-sync');
const fs = require('fs');
const path = require('path');

browserSync.init({
  server: 'dist/',
  startPath: '/',
  files: 'dist/**/*.html, dist/**/*.css, dist/**/*.js',
  // ローカルIPアドレスでサーバーを立ち上げる
  open: 'external',
  rewriteRules: [
    {
      match: /<!--#include virtual="(.+?)" -->/g,
      fn: function (req, res, match, filename) {
        const filePath = path.join('dist/', filename);
        if (!fs.existsSync(filePath)) {
          return `<span style="color: red">${filePath} could not be found</span>`;
        }
        return fs.readFileSync(filePath);
      },
    },
  ],
});
