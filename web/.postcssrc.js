module.exports = ctx => ({
  plugins: {
    'autoprefixer': {},
    'node-css-mqpacker': {},
    'cssnano' : ctx.env === 'production' ? {} : false
  },
})
