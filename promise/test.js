function A(){
      setTimeout(()=>{
            return {then:function(){
                console.log('我是then')
          }}
        },2000)
       return 100
}
console.log(typeof A())
// const b = new A()

// b.then()

// function test(a){
//        setTimeout(()=>{
//             a(111)
//        },1000)
// }
// function a(val){
//        console.log(val)
// }
// test(a)