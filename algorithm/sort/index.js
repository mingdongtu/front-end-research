
function reduce(arr){
    let sum = 0;
    function req(sum,arr){
        
           if(arr.length===0) return sum;
           console.log(sum,arr[0])
           sum = sum + arr[0];
           arr = arr.slice(1)
           return req(sum.arr)
    }
   req(sum,arr)
   return sum
 
}

const a = reduce([1,2,3,4,5])

console.log(a)