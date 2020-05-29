/**
 * 利用递归计算从1+2+3+4+5+6+......+n
 */

function sum(cur,n){ //
     cur = cur + n
     n --
     if(n==0)  return cur 
    return sum(cur,n)
}
const a = sum(0,100)
console.log(a)