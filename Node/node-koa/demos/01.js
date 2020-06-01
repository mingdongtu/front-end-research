const Koa = require('koa')
const app = new Koa();
app.listen(3000, () => {
    console.log('koa服务启动3000')
})