const a = ['B', 'A', 'E', 'C', 'D'];
// const b = ['A','B','C','D','E']

function sort(arr) { //从小到大排列
    let cur;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] > arr[i] && i > 0) {
            cur = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = cur
        }


    }
    return arr;
}
console.log(sort(a))