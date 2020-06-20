
function reduce(arr){
    let sum = 0;
    function req(sum,arr){
           if(arr.length===0) return sum;
           sum = sum + arr[0];
           arr = arr.slice(1)
           return req(sum,arr)
    }
  
   return  req(sum,arr) ;
 
}
const arr = (function(){
       let i = 0,arr = [];
          while(i<100){
                    i++;
             arr.push(i)
          }
          return arr
})()
const a = reduce(arr)

console.log(a)