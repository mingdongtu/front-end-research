//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
/** 
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
 */

var longestPalindrome = function(s) {
    let maxList = [];
    const arr  = s.split('') //arr = ['b','c','d','e','b','e']
    for(let i = 0; i<arr.length;i++){
        
          for(let j=i;j<arr.length;j++){
               let firstValue = arr[i]; //这是回文字符串的第一个字母
                 if(firstValue===arr[j]){
                        const curList = arr.slice(i,j+1);
                        maxList = curList.length>maxList.length?curList:maxList;
                 }

          }
    }
    const result =  maxList.join('')
    console.log('最终版',result)
    return result
};
const eg = 'babad'
longestPalindrome(eg)