/**
 * 冒泡排序——一般排序算法
 * 输出从小到大的新数组
 */

 const curArray = [1,33,22,13,45,9,5,11,6]
 function bubble(arr){
     k = 0
     let curValue ;
     for(let i=0;i<arr.length-1;i++){  //n-1次便可以确定最终顺序
            for(let j=0;j<arr.length-i;j++){ 
                 //每次内层循环只能确定一个较大值的位置
                 k++
                  if(arr[j-1]>arr[j] && j>0){
                      curValue = arr[j-1] 
                      arr[j-1] = arr[j]
                      arr[j] = curValue
                  }  
            }
     }
  
     console.log(k)
     return arr
 }

 console.log(bubble(curArray))

 /**
  * 对上面的解法进行优化
  * 分析：
  * 1、对于第一层循环，内层循环已经确定了最大值的位置，循环就不必再去遍历
  * 2、如：
  */
