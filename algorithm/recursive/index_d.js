/**
 * 用递归实现
 * n*(n-1)*(n-2)*(n-3)....*1
 */


function factorial(n) {

    function child(n, cur) {
        cur = cur * n;
        if (n == 1) return cur
        n--
        return child(n, cur)
    }
    return child(n, 1)
}

console.log(factorial(6))