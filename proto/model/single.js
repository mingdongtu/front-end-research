// 单体模式
var Singleton = function(name) {
    this.name = name;
    this.instance = null;

};
Singleton.prototype.getName = function() {
        return this.name;
    }
    // 获取实例对象
function getInstance(name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
}
// 测试单体模式的实例
var a = getInstance("aa"); //getInstance里面的this是全局的
var b = getInstance("bb");
console.log(a === b); // true