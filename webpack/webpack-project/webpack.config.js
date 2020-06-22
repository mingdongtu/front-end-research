const path = require('path')

module.exports = {  //基于commonjs 语法
    //默认就是production；开发环境下的配置：文件压缩、开发环境时development,开发环境一般时不会压缩的
       mode:'production',
       //入口文件
    //    entry:'./src/index.js',
       entry:{
           main:'./src/index.js'  //main 字段是可以修改的
        //    strong:'./src/index.js'
       },
       output:{  //出口
        filename:'index.js',
        path:path.resolve(__dirname,'dist') //两个相对路径拼接成一个绝对路径
       },
       module:{ // 对相应的模块进行处理
           rules:[
                {  
                     test:/\.(jpg|png|jpeg)$/,//首先检测文件类型
                     use:{                    //检测到文件后，用对应的loader进行处理
                       loader:'file-loader'
                     }
                },
                {
                      test:/\.ttf$/,
                      use:{
                        loader:'file-loader'
                      }
                },
                {
                    test:/\.less$/,
                    use:[
                        {
                          loader: 'style-loader',
                        },
                        {
                          loader: 'css-loader',
                        },
                        {
                          loader: 'less-loader',
                          options: {
                            lessOptions: {
                              strictMath: true,
                            },
                          },
                        },
                      ]
                }
           ]
       }
}

/**
 * file-loader 做了什么
发现图片模块
打包到dist目录下，改一个名字，默认名字是一个hash值，也可以自定义
移动到dist目录后，得到图片的名称
图片名称作为返回值，返回给引入的变量
 */