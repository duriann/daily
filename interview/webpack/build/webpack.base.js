const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";
const EndWebpackPlugin = require('../plugins/EndWebpackPlugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "..", "dist"),
  },
  resolve:{
    alias: {
      '@src': '../src'
    },
    extensions: ['.ts', '.js', '.json']
    },
  module: {
    rules: [
      {
        test: /\.(css|less)/,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "../",
                },
              },
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|eot|woff|ttf|svg|pdf)/,
        use: [
          {
            loader: "url-loader",
            options: {
              // limit表示如果图片大于5KB，就以路径形式展示，小于的话就用base64格式展示
              limit: 5 * 1024,
              // 打包输出目录
              outputPath: "images",
              // 打包输出图片名称
              name: "[name]-[hash:4].[ext]",
            },
          },
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.html",
    }),
    
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "..", "assets"), to: "assets" },
      ],
    }),
    new EndWebpackPlugin((stats)=>{
      console.log('成功啦',stats);
    },err=>{
      console.log('err',err);
    })
  ],
};
