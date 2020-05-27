/**
 *  高级算法：快速排序
 * 核心思想：
 * 1、从数组中任意取一个值
 * 2、比这个值大的放在一个数组rightArray的右边
 * 3、比这个数组小的放在数组leftArray 左边
 * 4、再将leftArray 、当前值、rightArray 连接在一起
 * 5、用递归将上面的程序再执行一遍
 * 注意：
 * 1、一定要考虑到递归的结束条件，否则会导致栈溢出
 * 2、每次取出当前值一定要将这个值从数组中排除掉，否则会造成重复
 */

const arr = [1, 33, 22, 13, 45, 9, 5, 11, 6]
let k = 0  //记录执行了多少次，跟算法无关
function fast(arr){
    if(arr.length<2) return arr;
    const leftArray = [];
    const rightArray = []
    const basicVal = arr.splice(0,1)
    // const basicVal = arr[0]
    const len = arr.length
      for(let i=0;i<len;i++){
        k++
              if(arr[i]<basicVal){
                   leftArray.push(arr[i])
              }else{
                   rightArray.push(arr[i])
              }
      } 
     
      
       return fast(leftArray).concat(basicVal,fast(rightArray))     
}
console.log(fast(arr),k)