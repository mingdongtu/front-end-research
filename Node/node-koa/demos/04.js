const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const main = (ctx)=>{
      //首先给返回数据设置类型
      ctx.response.type = 'html';
      ctx.response.body =  fs.createReadStream('./../file/template.html')
}
app.use(main)
app.listen(3000)