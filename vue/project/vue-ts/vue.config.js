module.exports = {
  publicPath: '/my-app/',
  outputDir: 'dist',
  assetsDir: 'asset',
  indexPath: 'app.html',
  configureWebpack: {},
  css: {
    requireModuleExtension: false, //去掉文件名中的.module
    
    loaderOptions: {
      less: {
        rules: [{
          test: /\.less$/,
          loader: 'less-loader'
        }]
      },
      // postcss: {
      //   rules: [
      //     {
      //       test: /\.css$/,
      //       use: [
      //         'style-loader',
      //         { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
      //         { loader: 'postcss-loader', options: { plugins: [] } }
      //       ]
      //     }
      //   ]
      // }
      css: {}

    }
  }
}
