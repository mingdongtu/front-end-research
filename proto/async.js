
// async function a(){
// // const b = await Promise.resolve(100)
// function b(){
//    return new Promise(resolve=>{
//            resolve(100)
//    })
// }
// const c = await b()
// console.log(c)
// }
// a()



// async function timeout(ms) {
//     await new Promise((resolve) => {
//       setTimeout(resolve, ms);  //延时作用
//     });
//   }
  
//   async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
//   }
  
//   asyncPrint('hello world', 50);


// function* helloWorldGenerator() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
//   }
  
//   var hw = helloWorldGenerator();
//   console.log(hw.next())
//   console.log(hw.next())
//   console.log(hw.next())



//   function* f() {
//     console.log('执行了！')
//   }
  
//   var generator = f();
  
//   setTimeout(function () {
//     generator.next()
//   }, 2000);



function all(){
    async function test(){
        return  99
 }
 return test
//  const test1 = yield test()
//  return test1
// yield 100
}
// all().next().value.then(res=>console.log(res))
all()().then(res=>console.log(res))