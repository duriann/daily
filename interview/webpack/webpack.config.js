const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer:{
    port: 9999,
    open: true,
    hot: true
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.html'
    })
  ]
}