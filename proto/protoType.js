//原型式   继承
function cloneObject(obj){
      function F(){};
      //将被继承的对象作为函数的prototype
      F.prototype = obj;
      //返回new 期间创建的新对象，此对象的原型为被继承的对象
      //通过原型链查找可以拿到被继承对象的属性
      return new F();
}
const b = {name:'brues'};
const a = cloneObject(b)
console.log(a.name)