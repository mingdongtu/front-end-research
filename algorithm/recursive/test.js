

function revise(n){
    if(n>4) {
        // console.log('我执行了退出',n)
        return}
    for(let i=0 ;i<1;i++){ //调用自身函数时，剩下没有完成的循环压入栈中
        n ++ 
        console.log(i,'>>>>>>>>>>>>>>>>',n)
        revise(n); 
        //递归函数之后的部分会被压入到栈中
        console.log(i,'递_________________执行',n)
    }
}
revise(3)