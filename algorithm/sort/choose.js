/**
 * 选择排序
 * 将每个元素和所有元素比较，最小的放在最左边
 */

const arr = [1, 33, 22, 13, 45, 9, 5, 11, 6]

function choose(arr) {
    var len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; //这个是以前不知道的
            }
        }
    }
    return arr
}

console.log(choose(arr))