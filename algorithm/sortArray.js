let arr = [109,100,23,2333,33,11,900,2123]

var sortArray = function(arr) {
      for(let i =0 ;i<arr.length;i++){
             let idx = i
            if(idx<arr.length){
                 let temp;
                 if(arr[idx]>arr[idx+1]){
                    temp = arr[idx]
                    arr[idx] = arr[idx+1];
                    arr[idx+1] = temp
                    idx++
                 }
            }
      }
};