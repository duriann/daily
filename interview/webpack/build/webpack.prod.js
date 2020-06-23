const webpackBase = require("./webpack.base");
const merge = require("webpack-merge");
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(webpackBase, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: 'all',// 可选值还有async(只对异步加载的模块拆分) | initial
      minSize: 30000,//模块最少大于30KB才拆开
      maxSize: 0,//模块大小无上限，只要大于30KB都拆分
      minChunks: 1,//最少引用一次才会拆分
      maxAsyncRequests: 5,//
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',//默认连接符
      name: true,//拆分的chunk名 设为true表示根据模块名和cacheGroup的key来自动生成
      cacheGroups: {
        //缓存组配置 上面配置读取完后拆分 如果需要把多个模块拆分到一个文件 就需要缓存
        vendors: { //自定义缓存组名字
          test: /[\\/node_modules[\\/]/,// 检查node_modules目录,只要模块在该目录下就使用上面配置拆分到这个组
          priority: -10,// 权重-10,决定了哪个组优先匹配,例如node_modules下有个模块要拆分,同时满足vendors和default组,此时就会分到vendors组,因为-10 > -20
        },
        default: { // 默认缓存组名
          minChunks: 2, // 最少引用两次才会被拆分
          priority: -20, // 权重-20
          reuseExistingChunk: true // 如果主入口中引入了两个模块,其中一个正好也引用了后一个,就会直接复用,无需引用两次
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.CURRENT_ENV": JSON.stringify("production"),
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
    new CleanWebpackPlugin(),
  ],
});

