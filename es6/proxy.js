// var obj = new Proxy({}, {
//     get: function (target, propKey, receiver) {
//       console.log(`getting ${propKey}!`);
//       return Reflect.get(target, propKey, receiver);
//     },
//     set: function (target, propKey, value, receiver) {
//       console.log(`setting ${propKey}!`,value, receiver);
//       return Reflect.set(target, propKey, value, receiver);
//     }
//   })
//   obj.count = 1
// //  setting count!
// ++obj.count

var handler = {
    get: function(target, name) {
      if (name === 'prototype') {
        return Object.prototype;
      }
      console.log('获取了什么',name,target)
      return 'Hello, ' + name;
    },
  
    apply: function(target, thisBinding, args) { //apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作,如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
        console.log('来看看',args)
      return args[0];
    },
  
    construct: function(target, args) {
      return {value: args[1]};
    }
  };
  
  var fproxy = new Proxy(function(x, y) {
    return x + y;
  }, handler);
  
  const a = fproxy(1, 2) // 1
  console.log(a)
  new fproxy(1, 2) // {value: 2}
  fproxy.prototype === Object.prototype // true
  fproxy.foo === "Hello, foo"