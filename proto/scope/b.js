/**
 研究函数内部变量声明 已经 提升
 */

//eg1:
function testOrder(arg) {
    console.log(arg); // arg是形参，不会被重新定义
    console.log(a); // 因为函数声明比变量声明优先级高，所以这里a是函数
    var arg = 'hello'; // var arg;变量声明被忽略， arg = 'hello'被执行
    var a = 10; // var a;被忽视; a = 10被执行，a变成number
    function a() {  //只是声明了a 是 函数类型
        console.log('fun');
    } // 被提升到作用域顶部
    console.log(a); // 输出10
    console.log(arg); // 输出hello
}; 
console.log('下面是eg1：')
testOrder('hi');

//eg2: 形参问题
 function test1(e){
    console.log(e); // 999  
    var e = 1000;
    console.log(e) // 1000
}
console.log('下面是eg2：')
test2(999)
/**
 解释：
 形参不会被重新定义，只可以被重新赋值
 */


//eg3:变量声明优先级问题

function test2(){
    console.log(a)
    var a = 11
    function a(){  //只是声明了a 是函数类型
           console.log('我是函数a')
    }
}
console.log('下面是eg3：')
test2()
/**
解释：
1、函数声明的优先级比变量声明的优先级要高
2、function a(){} 只是声明了a 是函数类型
 */

 //eg4:对 函数式声明的深入理解

 function test3(){
        console.log(b)
        var b = 100;  //var b;被忽视; b= 100被执行，a变成number
        function b(){
            //  console.log('222')
            return '1222'
        }
        console.log(b)
 }
 console.log('下面是eg4：')
test3()

/**
 解释：
 1、var 不仅声明了b 这个变量，还给她设置了一个值100；
 2、function b(){} 优先级比较高+声明可以提升，所以第一个打印是 Function
 3、第二个打印时，b 不仅被声明了，还被赋值了，所以输出100
 */