const path = require('path')

module.exports = {
  mode: 'development', // 先设置为development，不压缩代码，方便调试
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'replaceLoader.js'
      },{
        loader: 'replaceLoaderAsync.js',
        options: {
          name: 'echo'
        }
      }]
    }]
  }
}