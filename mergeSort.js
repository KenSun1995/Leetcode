function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right)); // 左右子数组分别递归，然后调用归并函数，返回
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {           // 从左右子数组的第一位，一直做对比选出最小的，知道其中一个数组为空
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)                             // 把剩下的不为空的子数组余项加到后面
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());                 // 归并排序中，左右子数组是从最小单元size 1开始进行归并，所以left, right一直都是有序的

    return result;
}

(() => {
    let input = [33, 5, 10, 55, 12, 2, 7, 5]
    console.log(mergeSort(input));
})()