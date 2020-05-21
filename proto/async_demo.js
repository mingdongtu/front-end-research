async function a(){
    //    return new Promise(resolve=>{
    //           resolve(100)
    //           console.log(99)
    //    })
    return 100
}
const b =  async function(){
     const c = await a()
     return c
}

a().then(res=>console.log(res))