/**
 * partition分治函数思想:
 *          标记第一位的数，标记index从第二位开始，然后从第二位开始，依次和标记数对比
 *          如果小于标记数，将其换到index处，index++
 *          一次循环后，所有小于标记数的数都放到了2 ~ index - 1 中，index处是不小于标记数的数
 *          然后，交换标记数与index-1处的数，至此，中位数位于index-1处
 *          返回index-1
 */
var partition = (arr, start, end) => {
    if (arr.length <= 1 || start >= end) return arr
    let pivot = start;
    let index = pivot + 1;
    for (let i = index; i <= end; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1)
    return index - 1
}

var swap = (arr, left, right) => {
    let tmp = arr[left]
    arr[left] = arr[right]
    arr[right] = tmp
}


var quickSort = (arr, left, right) => {
    if (arr.length <= 1 || left >= right) return arr    // 如果数组为1或左右index相等，递归结束
    if (left < right) {                                 // 如果left < right, 递归继续
        let index = partition(arr, left, right)
        quickSort(arr, left, index - 1)
        quickSort(arr, index + 1, right);
    }
    return arr
}


(() => {
    let input = [33, 5, 10, 55, 12, 2, 7, 5]
    console.log(quickSort(input, 0, input.length - 1));
})()