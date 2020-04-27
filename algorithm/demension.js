//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

const arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

var findNumberIn2DArray = function(matrix, target) {
    let isHas = false;
    let len = matrix.length;
    for (let i = 0; i < matrix.length; i++) {
        function fn(currentArray, target) {
            //   let currentArray = matrix[i] //
            // console.log(currentArray)
            if (target < currentArray[currentArray.length - 1]) {

                let middleIndex = Math.floor(currentArray.length / 2);

                let middle = currentArray[middleIndex];
                console.log(currentArray, currentArray.length, middleIndex, Math.floor(currentArray.length / 2))
                if (middleIndex == 0) return; //跳出循环

                if (target > middle) {
                    currentArray = currentArray.slice(middleIndex + 1)

                    fn(currentArray, target)
                }
                if (target < middle) {
                    currentArray = currentArray.slice(0, middleIndex)
                    console.log(currentArray, middleIndex)
                    fn(currentArray, target)
                }
                if (target == middle) {
                    isHas = true
                    return
                }
            }

        }
        fn(matrix[i], target)
    }

    return isHas
};
const a = findNumberIn2DArray(arr, 16)
console.log(a)