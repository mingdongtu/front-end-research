const a = [1,2,3,4]
const b  = {name:'tu',age:29,high:173}
Object.prototype.weight = 100
// console.log(b.__proto__.constructor)
for(const item of a){
       console.log(item)
}
for(const item in b){
    console.log(item)
}