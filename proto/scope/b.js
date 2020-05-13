/**
 研究函数内部变量声明 已经 提升
 */

//eg1:
function testOrder(arg) {
    console.log(arg); // arg是形参，不会被重新定义
    console.log(a); // 因为函数声明比变量声明优先级高，所以这里a是函数
    var arg = 'hello'; // var arg;变量声明被忽略， arg = 'hello'被执行
    var a = 10; // var a;被忽视; a = 10被执行，a变成number
    function a() {
        console.log('fun');
    } // 被提升到作用域顶部
    console.log(a); // 输出10
    console.log(arg); // 输出hello
}; 
console.log('下面是eg1：')
testOrder('hi');

//eg2: 变量覆盖问题


 function test2(e){
    console.log(e); // 999
    var e = 1000;
    console.log(e) // 1000
}
console.log('下面是eg2：')
test2(999)

//eg3:

var f = 10;
console.log('下面是eg3：')
console.log(f)

var f = 12;
console.log(f)