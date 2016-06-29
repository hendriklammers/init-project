var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  }
}
