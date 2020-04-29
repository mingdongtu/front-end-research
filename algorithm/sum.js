//输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
//要求时间复杂度为O(n)。
//1、具象的观察
//2、有数组也有负数说明：a、最大的数组之和一定为正；
//3、前后两个数滚动相加，每加一次就计算最大值，当且仅当前面的值不为正 ，不进行相加
const nums = [10,-30,19,22,34,-12,88,0]
var maxSubArray = function(nums) {
      let max = nums[0] //默认第一个为最大值
      for(let i=0;i<nums.length;i++){
          if(nums[i-1]>0) nums[i] += nums[i-1];
          //每遍历一个数就要计算一下到目前为止的最大值
           max = Math.max(max,nums[i])
      }
      return max
};
// console.log(maxSubArray(nums))


var maxReduceArray = function(nums){
       let max = nums[0];
      const a =  nums.reduce((a,b,i)=>{
            if(a>0){
                  a = a + b;
            }else{
                 a = b;
            }
         max = Math.max(max,a)
         return a 
           
       })
   
       return a 
}
console.log(maxReduceArray(nums))