var path = require('path')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "/dist")
  }

}
