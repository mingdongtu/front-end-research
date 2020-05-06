module.exports = {
  publicPath: './',
  outputDir: 'build',
  assetsDir: 'asset',
  indexPath: 'app.html',
  configureWebpack: {},
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        rules: [
          {
            test: /\.less$/,
            loader: 'less-loader'
          }
        ]
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
      css: {
           
      }

    }
  }
}
