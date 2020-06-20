function handleArray(array) {
    //查找出数组中最小的元素
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;
}

module.exports = handleArray;