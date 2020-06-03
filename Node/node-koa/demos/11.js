const Koa = require('koa');
const app = new Koa()

const one = (ctx, next) => {
    console.log('>>one')
    next()
    console.log('<<one')
}
const two = (ctx, next) => {
    console.log('>>two')
    next()
    console.log('<<two')
}

const three = (ctx, next) => {
        console.log('>>three')
        next()
        console.log('<<three')
    }
    /**
     1、>>one
     2、>>two
     3、>>three
     4、<<three
     5、<<two
     6、<<one
     */
app.use(one)
app.use(two)
app.use(three)
app.listen(3000)