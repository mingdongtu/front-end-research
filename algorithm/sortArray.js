let arr = [109,100,23,2333,33,11,900,2123]

var sortArray = function(arr) { //快速排序：分而治之
        

      function quickSort(arr){
            if(arr.length==0) return []
                let middle = arr[0];
                let [leftArray,rightArray] = [[],[]]
                for(let i=0;i<arr.length;i++){
                    if(arr[i]<middle){
                         leftArray.push(arr[i])
                    }
                    if(arr[i]>middle){
                        rightArray.push(arr[i])      
                    }     
                }
                console.log(leftArray,middle,rightArray)
                return quickSort(leftArray).concat(middle,quickSort(rightArray))
      }
    return quickSort(arr)
   
};
console.log(sortArray(arr))