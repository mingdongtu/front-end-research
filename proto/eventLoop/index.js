/**
 * 开始研究setTimeout、async/await、promise等执行顺序
 */
/**
 * 基本知识-宏队列
 * setTimeout
 * setInterval
 * setImmediate (Node独有)
 * requestAnimationFrame (浏览器独有)
 * I/O
 * UI rendering (浏览器独有)
 * 基本知识-微队列
 * process.nextTick (Node独有)
 * Promise（promise回调函数是同步的，then 是微任务）
 * Object.observe
 * MutationObserver
 * 基本知识-执行原则
 * 1、js同步先执行
 * 2、有微任务就执行所有微任务
 * 3、没有微任务执行一个宏任务
 * 4、再执行由宏任务产生的所有微任务，如此循环♻️
 */
console.log(1); //同步

setTimeout(() => {
    console.log(2); // 宏任务
    Promise.resolve().then(() => {  //注意：Promise 是同步的 then 是异步的
        console.log(3) //微任务
    });
});

new Promise((resolve, reject) => {
    console.log(4) //同步
    resolve(5)
}).then((data) => {
    console.log(data); //微任务
})

setTimeout(() => {
    console.log(6); //宏任务
})

console.log(7); //同步

/**
 * 分析：
 * 同步：1->4->7
 * 同步执行后产生的微任务：5
 * 同步执行之后的宏任务：2->6
 * 宏任务执行之后的微任务：3
 * 结果：1->4->7->5->2->3->6
 */