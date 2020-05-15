//**研究js 作用域、变量提升
//eg1:
console.log(a); // undefined
var a = 1;

/**
解释：
1、这里 var 关键字 会 声明提升，注意是：*声明提升，但是：*值不会提升，如果var改成const 那么会直接报错

2、变量声明，不管在哪里发生（声明），都会在任意代码执行前处理。
 */

//eg2:
b = 2
console.log(b) //2
function test(){
      var  c = 100
       return c
}
console.log('执行函数返回没有使用关键字声明的c',test()) //100
// console.log('函数外层去获取c',c) //ReferenceError: c is not defined

/**
 1、赋值给没有使用var 、let、const 关键字声明的变量时，这个变量会自动被创建成全局变量
 * 
 */
//eg3:
 function test1(){
//       "use strict"
        d = 99   
        return d 
 }
 console.log('严格模式没有声明的变量',test1()) //报错：d is not defined

 /**
  1、es5 严格模式下 没有经过声明的变量 会报错
  拓展：
  格模式修复了一些导致 JavaScript引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。
  */

 /**
  eg4:变量提升
  */

 function foo(a) {
       //   inner scope 'foo'
       // defined argument a, and look-up b upwards
       console.log( a + foob );
   }
   console.log('eg4:')
   foo(10) //NAN 此时b还没有被赋值，只是声明了
   var foob = 2;
 
   foo( 98 ); // 4
