/**
 * 关于宏任务和微任务研究
 */
/**
 * 首先下面的基本知识要懂
 */
for (var k = 0; k < 5; k++) {
    setTimeout(() => {
        console.log(k)
    }, 1000)
}
/**
 * 输出
 * 5，5，5，5，5，5
 */

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}
/**
 * 输出
 * 0，1，2，3，4，5
 */

var a = []
for (var j = 0; j < 10; j++) {
    a[j] = function() {
        console.log(j) //函数执行的时候，才去取j的值，当函数只是声明的时候，是不会去取j的值的
    }
}
a[5]() //10

var b = []
for (let j = 0; j < 10; j++) {
    b[j] = function() {
        console.log(j) //函数执行的时候，才去取j的值，当函数只是声明的时候，是不会去取j的值的
    }
}
b[5]() //5

/**
 * 上面的解释：
 * 1、首先var 是全局的i，那么全局只有一个遍历i，每次循环♻️还是原来那个变量；let是块级作用域，每次循环都是一个新的变量；
 * 2、函数里面使用的i，建立了对i的引用，循环完毕，这种引用关系不会消除，知道最后函数执行。
 * 3、执行的时候，函数里面的console.log(i)会去他们的内存里面查找i
 */