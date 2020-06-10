const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9999,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)/,
        loader: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit表示如果图片大于5KB，就以路径形式展示，小于的话就用base64格式展示
              limit: 5 * 1024,
              // 打包输出目录
              outputPath: 'images',
              // 打包输出图片名称
              name: '[name]-[hash:4].[ext]'
          }
          }
        ]
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname,'assets'), to: 'assets' },
      ],
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};
