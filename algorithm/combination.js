/**
 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

eg1:
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]

eg2:
输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

rules:
1、数组不重复；
2、每个数字可以出现在不同组合中；
3、每个组合中，同一个数字可以出现很多次

 */
const candidates = [2,3,5]
var combinationSum = function(candidates, target) {
        let array = []
       for(let i = 0;i<candidates.length;i++){
              const curNum = candidates[i]
              let curArray = []
              let restNum = target
              while(restNum>=curNum){
                   restNum = restNum - curNum;  //在剩余的元素里面查找
                   curArray.push(curNum)
                   console.log('当前值',curNum)
                   if(restNum == 0) {
                      array.push(curArray)
                      return array
                   } 
                   for(let j = 0 ;j<candidates.length;j++){
                          if(restNum === candidates[j]&&candidates[j]!=curNum) { //找到了
                            restNum = 0
                             curArray.push(candidates[j])
                              array.push(curArray)
                          }
                   }
                   //如果余下的值找不到
                      
              }
       }
       return  array
};
console.log(combinationSum(candidates,8))