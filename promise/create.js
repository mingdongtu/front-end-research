let allPramas = {
     resolvePram:null,
     rejectParam:null   
}

const TPromise =function(callback){
       const that = this
    try{
       callback(that.resolve,that.reject)
    }catch(err){
              
    }
}
TPromise.prototype = {
        resolve:function(res){
            allPramas.resolvePram = res;
            allPramas.rejectParam = null  
        },
        reject:function(rej){
              allPramas.rejectParam = rej;
              allPramas.resolvePram = null
        },
        then:function(fn){
              //只有resolve 调用后才调用 
            if(allPramas.resolvePram){
                   try{
                     fn(allPramas.resolvePram)
                   }catch(err){
                      
                   }
            }
        }
}
const p1 = function(){
          return new TPromise((resolve,reject)=>{
              // setTimeout(()=>{
              //        resolve(3000)
              // },3000)
              resolve(3000)
              
     })
}
p1().then(res=>{
       console.log(res)
})