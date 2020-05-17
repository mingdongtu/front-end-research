console.log('start:1'); //1

setTimeout(() => { //2
    console.log('我在第二行setTimeout里面执行:2')
}, 0)

console.log('我在第三行执行:3'); //3

new Promise((resolve, reject) => { //4:promise 是同步的
    console.log('我在promise里面执行:4')
    resolve() //如果没有resolve ,then 不会执行
}).then(() => { //5
    console.log('我在then 里面执行:5')
})

console.log('end:6') //6
    /**
     * 分析：
     * 同步：1、3、4、6
     * 微任务：5
     * 宏任务：2
     * 最终结果：1->3->4>6->5->2:
     */