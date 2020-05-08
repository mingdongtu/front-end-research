//给定一个包含非负数的数组和一个目标整数 k，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，总和为 k 的倍数，
//即总和为 n*k，其中 n 也是一个整数。
//动态规划：从大到小 开始推演，找出一个固定模式，除了规模变化，其他没变；
const nums =  []

var checkSubarraySum = function(nums, k) {
        // const ap = new Array(nums.length+1).fill(0)
       const cpnums = JSON.parse(JSON.stringify(nums))
       for(let i=0;i<cpnums.length;i++){

           nums = JSON.parse(JSON.stringify(cpnums))
            for(let j=i;j<nums.length;j++){
                  if(j-i>0){
                    nums[j] = (nums[j-1] + nums[j])%k
                    console.log(nums[j])
                         if(nums[j]===0) return true
                         if(nums[j]%k===0) return true
                  }
            }

       }
       return false;
};
const a = checkSubarraySum(nums, 16666677)
console.log(a)