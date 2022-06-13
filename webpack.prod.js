const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: '',
  output: {
    filename: '',
    path: path.resolve()
  },
  devtool: 'none',
  module: {
    rules: [{
      test: /\$/,
      use: '',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}