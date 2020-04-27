let arr = [109,100,23,2333,23,33,11,900,2123]

var sortArray = function(arr) { //快速排序：分而治之
        

      function quickSort(arr){
            if(arr.length==0) return []
                let middle = arr[0];
                let [leftArray,rightArray,middleArray] = [[],[],[middle]]
                arr = arr.slice(1)
                for(let i=0;i<arr.length;i++){
                    if(arr[i]<middle){
                         leftArray.push(arr[i])
                    }
                    if(arr[i]>middle){
                        rightArray.push(arr[i])      
                    }     
                  //   考虑到相等的情况
                  if(arr[i]==middle){
                        middleArray.push(arr[i])
                  }
                }
                console.log(leftArray,middle,rightArray)
                return quickSort(leftArray).concat(middleArray,quickSort(rightArray))
      }
    return quickSort(arr)
   
};

function chooseSort(arr){
      let circleNum = arr.length ; 
     for(let i=0;i<circleNum;i++){
           console.log(circleNum)
       // 每找到一个相对大数的位置，该位置就不用再次遍历，下面就可以少遍历一个元素
          for(let j=0;j<circleNum;j++){
                if(arr[j]>arr[j+1] && j<circleNum-1){
                     let tmp;
                     tmp = arr[j]  
                     arr[j] = arr[j+1];
                     arr[j+1] = tmp;  
                }    
          }
          console.log('看下内层',circleNum)
          circleNum --
     } 
     return arr      
}
console.log(chooseSort(arr))