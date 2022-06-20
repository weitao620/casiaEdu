
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  outputDir: 'web',
  assetsDir: 'static',
  publicPath: '/yataischool/', // 北师大版本
  devServer: {
    // 设置主机地址
    host: '0.0.0.0',
    // 设置默认端口
    port: 8088,
    // 设置代理111
    proxy: {
      '/api': {
        // 目标 API 地址
        // target: 'http://10.0.6.28:6120',
        // target: "http://172.18.40.12",
        // target: 'https://ipathy.net',
        target: 'http://119.90.45.121:1120',
        // target: '182.92.212.173:7120',
        // target: 'http://120.25.236.3:8120',
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  },
  productionSourceMap: false,
  // chainWebpack: config => {
  //   config.plugin('provide').use(webpack.ProvidePlugin, [{
  //     $: 'jquery',
  //     jquery: 'jquery',
  //     jQuery: 'jquery',
  //     'window.jQuery': 'jquery'
  //   }])
  // },
  css: {
    // loaderOptions: {
    //   css: {},
    //   postcss: {
    //     plugins: [
    //       require('postcss-px2rem')({
    //         remUnit: 192
    //       })
    //     ]
    //   }
    // }
  },
  configureWebpack: {
    externals: {
      './cptable': 'var cptable'
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip', // 使用gzip压缩
        test: /\.js$|\.html$|\.css$/, // 匹配文件名
        filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
        minRatio: 1, // 压缩率小于1才会压缩
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false // 是否删除未压缩的源文件，谨慎设置，如果希望提供        非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
      })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
}
