function SuperType(){
    this.property = true      
}

SuperType.prototype.getSuperValue = function(){
      return this.property
}

function SubType(){
     this.subproperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
     return this.subproperty ;

}

let instance = new SubType();

console.log(instance.getSuperValue(),instance.getSubValue())
//最大的问题是 SuperType 的 原型链上的属性也会被继承