const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  components: 'src/*.vue',
  ribbon: {
    url: 'https://github.com/FEMessage/{{componentName}}'
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'stylus-loader']
        },
        {
          test: /\.styl(us)?$/,
          loader: 'stylus-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  },
  showUsage: true,
  showCode: true,
  styleguideDir: 'docs'
}
