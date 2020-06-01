

function revise(n){
    if(n>2) {
        console.log('我执行了退出',n)
        return}
    for(let i=0 ;i<8;i++){
        n ++ 
        console.log(i,'>>>>>>>>>>>>>>>>',n)
       return revise(n);
        console.log(i,'递_________________执行',n)
    }
}
revise(1)