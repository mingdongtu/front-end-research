/**
 * 利用递归计算从1+2+3+4+5+6+......+n
 */

function sum(start,cur,n){ //
      cur = cur +start
     if(start==n) {
          return cur
     } 
     start = start + 1 ;
    return sum(start,cur,n)
}
const a = sum(1,0,100)
console.log(a)