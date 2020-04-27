

//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

const arr = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  
  var findNumberIn2DArray = function(matrix, target) {
    let isHas = false //二维数组中是否存在target值
    let isBreak = false
   for(let i = 0;i<matrix.length;i++){
       
        function fn(arr){ //
            if(arr.length===1) {
                isHas = isBreak = arr[0] === target?true:false;
                return
           } ;
            const middleIndex = Math.floor(arr.length/2) 
            const middle = arr[middleIndex];
                 
            if(target!=middle){
             const array =target<middle? arr.slice(0,middleIndex):arr.slice(middleIndex+1)
             if(array.length===0) return
             fn(array)
             }else{
                isHas = isBreak = true
             }
           }
    if(isBreak)  break
    fn(matrix[i])
     
   }
   return isHas
  
};
const a = findNumberIn2DArray(arr,16)
console.log(a)