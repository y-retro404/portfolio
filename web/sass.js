const fs = require('fs');
const path = require('path');
const makeDir = require('make-dir');
const glob = require('glob');
const sass = require('sass');
const globImporter = require('node-sass-glob-importer');
const Fiber = require('fibers');

const srcDir = `${process.cwd()}/src/assets/scss`;
const distDir = `${process.cwd()}/dist/assets/css`;

glob(
  `**/*.scss`,
  {
    cwd: srcDir,
    ignore: `**/_*.scss`,
  },
  (er, files) => {
    if (er) {
      console.log(er);
      return;
    }

    for (let fileName of files) {
      sassRender(fileName, srcDir, distDir);
    }
  }
);

const sassRender = (fileName, srcDir, distDir) => {
  sass.render(
    {
      file: path.resolve(srcDir, fileName),
      indentType: 'space',
      outputStyle: 'expanded',
      lineFeed: 'lf',
      importer: globImporter(),
      fiber: Fiber,
    },
    function (err, result) {
      if (err) {
        console.log(err);
        return;
      }

      const distPath = path.resolve(distDir, fileName);
      makeDir(path.dirname(distPath)).then(() => {
        const cssPath = path.format({
          dir: path.dirname(distPath),
          name: path.basename(distPath, '.scss'),
          ext: '.css',
        });
        // console.log(htmlPath);
        fs.writeFile(cssPath, result.css, () => {});
      });
    }
  );
};
