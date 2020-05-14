
/**
 eg1:this 指向的是谁
 */
function a(){
       console.log(this)  //this 指向当前全局关键
       b.call(this)  //a 继承了 b // 打印：b执行了
       console.log(this.name) //this 指定的是全局环境
}
console.log('执行eg1')
a()
function b(){
       this.name = '明栋'
       console.log('b执行了')
}
// const c = new a();
// const d = new b()
// console.log(c.name,d.name)


/**
 bind
 */

 function c(){
        return this.arg 
 }
 function d(){
        this.arg = 100
 }
 const f = c.bind(d)
 console.log(f())