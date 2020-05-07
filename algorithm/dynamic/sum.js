//给定一个包含非负数的数组和一个目标整数 k，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，总和为 k 的倍数，
//即总和为 n*k，其中 n 也是一个整数。
const nums = [0, 0]
var checkSubarraySum = function(nums, k) {
    k = Math.abs(k)
    let isHas = false;
    let sum = 0;
    const index = nums.indexOf(k)
    if (nums.length < 2) return false
    if (index == -1) return false

    for (let i = 2; i < nums.length + 1; i++) { //子数组长度的可能性
        //将长度范围为i内的数字组成数组
        console.log(2)
        let start = index - (i - 1) < 0 ? 0 : index - i + 1;
        let end = index + i < nums.length ? index + i - 1 : nums.length - 1;
        let array = nums.slice(start, end + 1);
        console.log(start, end, array)
        for (let j = 0; j < index; j++) { //选取连续i 个数组成的子数组之和
            let sumArray = array.slice(j, j + i - 1);
            // console.log(array, sumArray, j, i - 1)
            sum = sumArray.reduce((a, b) => a + b)
            if (sum % k == 0) {
                isHas = true
            }
        }

    }
    return isHas
};
const a = checkSubarraySum(nums, 0)
console.log(a)