/**
 * 得出一个数组的全排列
 * [1,2,3] =>  [1,2,3]、[1,3,2]、[3,2,1][3,1,2]、[2,1,3]、[2,3,1]
 */
const arr = [1, 3, 5]

function backtrack(list, tempList, nums) {
    if (tempList.length === nums.length) {
        // console.log('退出条件', tempList, list)
        return list.push([...tempList])
    };
    for (let i = 0; i < nums.length; i++) {
        if (tempList.includes(nums[i])) continue;
        tempList.push(nums[i]);
        console.log('调用循环', tempList, i)
        backtrack(list, tempList, nums); //在循环♻️里面调用递归函数
        const a = tempList.pop();
        console.log('删掉的元素!!!!!!!!!!!!!!!!', a)
    }
}


/**
 * 分析：
 * 1、如果当前数组tempList (重新组合后的数组)长度和 给定的数组长度一致，那么将这个数组推入到list中去
 * 2、开始循环给定的数组，如果当前数组tempList已经包含这个这个数，那么跳出当前数的循环，进行下一个循环
 * 3、如果当前元素不在tempList 中，那么添加到tempList
 * 4、
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const list = [];
    backtrack(list, [], nums)
    return list
};
permute(arr)