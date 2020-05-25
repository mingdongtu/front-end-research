class Person {
    //调用类的构造方法
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //定义一般的方法
    showName() {
        console.log("调用父类的方法")
        console.log(this.name, this.age);
    }
}

//定义一个子类
class Student extends Person {
    constructor(name, age, salary) {
        super(name, age)//通过super调用父类的构造方法,继承父类的属性需要super（）方法
        this.salary = salary
    }
    showName() {//在子类自身定义方法
        console.log("调用子类的方法")
        console.log(this.name, this.age, this.salary);
    }
}
let s1 = new Student('wade', 38, 1000000000)
console.log(s1)  //Student { name: 'wade', age: 38, salary: 1000000000 }
// s1.showName()

