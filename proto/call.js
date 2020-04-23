function SuperType(){
       this.colors = ['red','yellow','orange']
}
SuperType.prototype.a = 100
function SubType(){
    //继承了SuperType
      SuperType.call(this)  //可以解释为 SuperType 在this 所在的上下文中执行了，这样this所在上下文SubType自然继承了SuperType 但是不会继承它的原型
}

const instance1 = new SubType()

console.log(instance1.colors,instance1.a)