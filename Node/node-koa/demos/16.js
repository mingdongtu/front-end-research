const koa = require('koa')
const app = new koa()

const main = (ctx,next)=>{
        ctx.throw(500)

}
app.use(main)

app.on('error',(err,ctx)=>{
       console.log('server error',err)
})

app.listen(3000)