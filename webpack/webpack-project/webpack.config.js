const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')
module.exports = {
  //基于commonjs 语法
  //默认就是production；开发环境下的配置：文件压缩、开发环境时development,开发环境一般时不会压缩的
  mode: 'production',
  //入口文件
  //    entry:'./src/index.js',
  entry: {
    main: './src/index.js', //main 字段是可以修改的
    //    strong:'./src/index.js'
  },
  output: {
    //出口
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'), //两个相对路径拼接成一个绝对路径
  },
  module: {
    // 对相应的模块进行处理
    rules: [
      {
        //1M或者几百K的图片打包成base64 后体积反而增大，小图标适合打包成base64，可以使用url-loader 它不仅具有file-loader的功能，还能打包指定范围大小的图标
        test: /\.(jpg|png|jpeg)$/, //首先检测文件类型
        use: {
          //检测到文件后，用对应的loader进行处理
          loader: 'url-loader', //会将复合大小要求的图标直接打包到index.js 文件中
          options: {
            name: '[name].[hash:5].[ext]', //制定打包后的文件名，只要文件更改了 名字就会更改，一般为了防止缓存
            outputPath: 'assets/',
            limit: 2048,
          },
        },
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:5].[ext]', //ext 是文件的后缀名
            outputPath: 'font/',
          },
        },
      },
      {
        //loader 是从下到上执行
        test: /\.less$/,
        // use: ['style-loader', 'css-loader', 'less-loader'],
        //下面的写法适合添加一些额外配置
        use: [
          {
            loader: 'style-loader', //style-loader 是为了让下面两者在index.html 中生效:通过它将样式以style标签形式打包到index.html 中
          },
          {
            loader: 'css-loader',
            options: {},
          },
          // {
          //   loader: 'postcss-loader', //位置在css-loader 之下，要在css-loader处理前就用postcss-loader进行处理
          //   options: {
          //     plugins: [require('autoprefixer')], //通过插件来处理
          //   }
          // },
          {
            loader: 'less-loader', //less 处理成css，css 再处理成js，所以这里需要css-loader需要
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}

/**
 * file-loader 做了什么
发现图片模块
打包到dist目录下，改一个名字，默认名字是一个hash值，也可以自定义
移动到dist目录后，得到图片的名称
图片名称作为返回值，返回给引入的变量
loader:文件预处理器，常用有less-loader css-loader  file-loader html-loader
特定的文件，需要特定的loader
 */
