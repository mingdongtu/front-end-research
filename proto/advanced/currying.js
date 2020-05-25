//函数柯里化
function add(a,b){
       return a + b
}
function currying (fn, ...args1) {
    return function (...args2) {
        return fn(...args1, ...args2)
    }
}
var increment = currying(add, 1)
increment(2) === 3
// true
var addTen = currying(add, 10)
console.log(addTen(2) === 12) // true

