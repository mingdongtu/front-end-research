
/**
 eg1:this 指向的是谁
 */
function a(){
       console.log( 'a里面的a类型:',typeof a,a)  //   function
       this.age = 29
       b.call(this)  //b继承了 a // 打印：b执行了

       //this当前执行代码的环境对象，在非严格模式下，总是指向一个对象

       //如果a 是在new 关键字后面执行的，那么下面的this就是 a{}
       console.log('a里面的this类型:',typeof this,this)  
       
}
console.log('执行eg1:')
function b(){
       console.log('执行了B',this.age) // 20
       this.name = '明栋'
}
const c = new a();
console.log(typeof c) //Object  实例化的函数是一个对象类型


function a1(){
       console.log('a1里面的this类型:',typeof this,this)    //a 是直接在全局环境下执行的，那么它就是 global  
}
const c1 = a1()


