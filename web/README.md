開発環境構築について
=========================

推奨環境
--------------------
- Mac OS X または Windows
- Visual Studio Code
- Node.js 13 以降

必須VSCodeプラグイン
--------------------
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [puglint](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-puglint)
- [pug (jade) formatter](https://marketplace.visualstudio.com/items?itemName=ducfilan.pug-formatter)

インストール
--------------------
```
npm ci
```
Node.js の依存モジュールをインストールします。
※「npm install または npm i」はpackage-lock.jsonを上書きする為、使用しないで下さい。

開発用サーバー
--------------------
```
npm start
```
dist/に開発用にビルドされたファイルが出力されます。
ソースファイルの監視を開始して、開発用サーバーを起動します。

コンパイル
--------------------
```
npm run compile
```

本番用ビルド
--------------------
```
npm run build
```
dist/に本番用にビルドされたファイルが出力されます。

ディレクトリ構成
--------------------
```
.
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── dist/
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   └── js/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── scss/
│   │   └── js/
│   ├── components/
│   ├── layouts/
│   └── pages/
│        └── index.pug
└── package.json
```

### src/
コンパイルなどの処理をさせるファイルはこのディレクトリに配置します。

### src/config.pug
Pugファイル全体で使用するパラメータが記述されています。

### src/pages/**/*.pug
HTMLにコンパイルされる前のテンプレートファイルをこのディレクトリに配置します。
src/pages/に配置されたファイルは、同じ階層を維持したままプロジェクトのルートディレクトリに対応付けされます。

**出力例1）**
```
src/pages/index.pug → dist/index.html
```
**出力例2）**
```
src/pages/test/index.pug → dist/test/index.html
```

### src/layouts/**/*.pug
全ページに跨がるテンプレートファイルをこのディレクトリに配置します。
必要に応じて作成・編集し、src/pages/**/*.pugにextendsで取り込む形で使用します。
あらかじめ置いてあるファイルの役割は以下の通りです。

**&#95;layout.pug**
&lt;html&gt;部分のテンプレートになります。
ページコンテンツの大枠を管理しています。

**&#95;head.pug**
&lt;head&gt;部分のテンプレートになります。

**&#95;scripts.pug**
&lt;&#047;body&gt;直前の&lt;script&gt;部分のテンプレートになります。

### src/components/**/*.pug
コンポーネントに関する(pug 及び scss)ファイルをこのディレクトリに配置します。
※scssは勝手に取り込まれる仕組みになっているため、取り込むための追記は不要です。
詳しくはcomponentsディレクトリ直下のREADMEを参照して下さい。

### src/assets/scss/
CSSにコンパイルされる前のSassファイルをこのディレクトリに配置します。

### src/assets/js/
コンパイルされる前のJavaScriptファイルをこのディレクトリに配置します。

### dist/
開発・本番用のファイルが出力されます。

### .vscode/settings.json
VSCodeの設定が記述されています。
このファイルを直接編集することは推奨されませんが、自動整形を無効にする際は編集して下さい。
