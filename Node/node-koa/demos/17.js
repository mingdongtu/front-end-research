const Koa = require('koa')
const app = new Koa()

const handler =async  function(ctx,next){
         try {
            await next() 
         }catch(err){
             ctx.response.status = err.statusCode || err.status || 500
             ctx.response.type = 'html'
             ctx.response.body = '<p>Something wrong,please contact administrator!</p>'
            //  手动释放onerror事件
            ctx.app.emit('error',err,ctx)
         }
}

const main = (ctx,next)=>{
       ctx.throw(500)
}

app.on('error',(err,ctx)=>{
         console.log('logging error',err.message);
         console.log(err)
})

app.use(handler)
app.use(main)

app.listen(3000)