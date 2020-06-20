class Fo {
    constructor(val) {
            this.state = { a: val }
        }
        //  如果不接收实例化时传递过来的参数，那么可以不用constructor ,直接像下面这样书写
        // state = {
        //      c:1
        // }
}

const b = new Fo(100)
console.log(b.state)