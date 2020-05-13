/**
 下面的脚本来研究深拷贝，以及周边知识的
 */

//eg1：如何实现一个深拷贝

function cloneShallow(source) { //浅拷贝
    let currentObj = {}
    for (let key in source) { //会将原型上面的属性遍历出来：原型上添加的属性属于可枚举属性
        console.log(source[key])
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            currentObj[key] = source[key]
        }
    }

    return currentObj
}

function con() {
    this.a = 1
    this.b = 2
    this.c = 3
}
con.prototype.d = 100

const a = new con()

const b = cloneShallow(a);
b.c = 100;
console.log(b)
console.log(a)