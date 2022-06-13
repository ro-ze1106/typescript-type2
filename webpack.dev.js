const path = require('path');
module.exports = {
  mode: 'development',
  entry: '',
  output: {
    filename: '',
    path: path.resolve(),
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\$/,
      use: '',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}