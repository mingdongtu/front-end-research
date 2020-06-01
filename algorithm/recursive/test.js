

function revise(num){
   console.log(num)
    if(num===0) {
            return 
    } 
    for(let i=0 ;i<6;i++){
        num--;
        revise(num);
        console.log('递归之后执行')
    }
}
revise(4)