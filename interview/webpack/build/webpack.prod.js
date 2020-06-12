const webpackBase = require("./webpack.base");
const merge = require("webpack-merge");
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackBase, {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.CURRENT_ENV": JSON.stringify("production"),
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
  ],
});

