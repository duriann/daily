const webpackBase = require("./webpack.base");
const merge = require("webpack-merge");
const webpack = require("webpack");
// const Testplugin = require("../loaders/testloader");

module.exports = merge(webpackBase, {
  mode: "development",
  devServer: {
    port: 9999,
    open: true,
    hot: true,
  },
  resolveLoader: {
    modules: ['node_modules','./loaders/']
  },//去哪些目录下寻找 Loader，有先后顺序之分
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'testloader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.CURRENT_ENV": JSON.stringify("development"),
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  devtool: "cheap-module-eval-source-map",
});
