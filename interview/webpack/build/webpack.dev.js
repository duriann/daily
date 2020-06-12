const webpackBase = require("./webpack.base");
const merge = require("webpack-merge");
const webpack = require('webpack')


module.exports = merge(webpackBase, {
  mode: "development",
  devServer: {
    port: 9999,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.CURRENT_ENV": JSON.stringify("development"),
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  devtool: "cheap-module-eval-source-map",
});
