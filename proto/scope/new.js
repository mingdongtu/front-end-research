/**
 下面的代码是来探讨 new 关键字的
 * 
 */

function A() {
    this.name = 'tumingdong'
}
A.prototype.father = 'Tucongwen'

const b = new A();
A.prototype.age = 54
console.log(b.name) //tumingdong
console.log(b.age) //54
    /**
     调用new A() 发生了以下事情
     1、一个继承自 A.prototype 的新对象b被创立
     2、 使用指定的参数调用 A ，并将this 绑定到新创建的对象b（A 里面的this 指向了新创建的对象b）
     3、由构造函数返回的对象就是new 表达式的结果

     */