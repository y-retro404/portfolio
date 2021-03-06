let path = require('path');

module.exports = {
  entry: {
    'js/main': './src/assets/js/main.js',
    'js/top': './src/assets/js/top.js',
    'js/works': './src/assets/js/works.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src'),
          },
        },
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      // cacheGroups内にバンドルの設定を複数記述できる
      cacheGroups: {
        // 今回はvendorだが、任意の名前で問題ない
        defaultVendors: {
          // node_modules配下のモジュールをバンドル対象とする
          test: /node_modules/,
          name: 'js/vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
};
