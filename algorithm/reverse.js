/**
 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 输入: 123
输出: 321
输入: -123
输出: -321
 */

var reverse = function(x) {
    let num = Math.abs(x);
    let numList = num.toString().split('');
    let cur ;
    for(let i=0;i<numList.length;i++){
           if(i != (numList.length-1)/2){
               console.log(i)
                cur = numList[i];
                numList[i] = numList[numList.length-1]   
                numList[numList.length-1] = cur 
           }
    }
    num = parseInt(numList.join(''))
    // console.log(num)
    return x<0?-num:num;
};
reverse(123)