/**
 * 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
 */
// var tmp = 123;

// if (true) {
//     tmp = 'abc'; // ReferenceError
//     console.log(tmp)
//     let tmp;
// }

var a = 100

function test() {
    var a = 99
}
test()
console.log(a)




var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        // console.log('执行')
        var tmp = 'hello world';
    }

}

f();

let m = 100;
var m = 990; //SyntaxError: Identifier 'm' has already been declared
console.log(m)