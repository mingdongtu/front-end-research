/**
 * 得出一个数组的全排列
 * [1,2,3] =>  [1,2,3]、[1,3,2]、[3,2,1][3,1,2]、[2,1,3]、[2,3,1]
 */
const arr = [1, 3, 5]

function backtrack(list, tempList, nums) {
    if (tempList.length === nums.length) {
        return list.push([...tempList])
    };
    for (let i = 0; i < nums.length; i++) {
        // console.log('我循环',i)
        if (tempList.includes(nums[i])) {
            continue};
        tempList.push(nums[i]);
        // console.log('调用循环', tempList, nums[i])
        backtrack(list, tempList, nums); //在循环♻️里面调用递归函数
        const a = tempList.pop();
    }
}
/**
 分析：
 1、最开始i=0，tmepList中不包含任何元素，将nums[0] 放入tempList 中去，将i=0，以及没有执行完的for循环部分压入到栈中z1
 2、递归：执行函数自身，i=0，这次tmpList 包含nums[0],所以跳出这次循环，后面部分不执行
 3、i=1，tempList中不存在，那么放入其中[nums[0],nuns[1]]，执行递归，将i=1已经没有执行完的for循环压入栈中z2
 4、递归：执行函数自身，for循环，i=0，i=1 均已经在tempList中，将nums[2]放入tempList中去，执行递归函数，将i=2 时的for循环压入栈中z3
 5、递归：tempList 长度已经满足，递归退出，第一个组合得出。开始执行 栈中的任务
 6、执行栈中的任务z3：i=2 ,tempList = [1,3,5]，将最后一个元素去掉，tempList = [1,3]
 7、执行栈中的任务z2：i=1,tempList = [1,3] ,将tempList最后一个元素删除，temList= [1]，执行i=2的循环，栈中有：z1
 8、延续上一个任务的从i=2重启循环，tempList 无nums[2],放入tempList中去[1,5],执行递归函数，将i=2 没有执行完的压入栈中z4，剩下：z4、z1
 9、i=0，重启循环，将i=1（3），放入tempList中去，tempList = [1,5,3],将i=1，压入栈中z5，剩下：z5 z4,z1
 10、开始执行栈中任务
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
console.log(permute(arr))
