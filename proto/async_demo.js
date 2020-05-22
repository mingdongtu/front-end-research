 function a(){
       return new Promise(resolve=>{
              resolve(100)     
       })
}
async function b(){
    return 100
}
const c =  async function(){
     const c = await a()
     return c
}

