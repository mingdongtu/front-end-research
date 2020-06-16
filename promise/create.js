

function resolve(val){
    return {
           then:function(fn1){
              try{//处理fn
                  fn1(val)
              }catch(err){
                      return {
                             catch:function(err){
                                      
                             }
                      }
              } 
           }
    }
}
function fn(resolve,reject){
     return setTimeout(()=>{
         resolve(1) //保证resolve里面的参数被then接收到
     },3000) 
}

function Promise(fn){
        //接收fn参数，并且执行
     fn() //1s钟后返回1，这个1 我要传递到then里面去，所以这里面应该返回一个含then属性的对象
    
    
}

// Promise.prototype.then = function(fn1){ //fn1 是函数
//        //捕获错误，返回一个含有catch 属性的对象
//        try{//处理fn
//            fn1()
//        }catch(err){
//                return {
//                       catch:function(err){
                               
//                       }
//                }
//        }

// }
const p1 = new Promise(fn)

p1.then(function(res){
    console.log('延迟2s执行')
})