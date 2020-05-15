
for(let i=0;i<5;i++){
       setTimeout(()=>{
             console.log(i)
       },1000)
}

// console.log(i)
var a = []
for(var j = 0;j<10;j++){
   a[j] = function(){
         console.log(j)   //函数执行的时候，才去取j的值，当函数只是声明的时候，是不会去取j的值的
   }
}
a[1]()