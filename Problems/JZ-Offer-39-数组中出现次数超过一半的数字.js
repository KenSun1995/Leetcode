/**
 * 数组中出现次数超过一半的数字
 * 例如: 长度为9的数组[1,2,3,2,2,2,5,4,2], 数字2出现了5次，因此输出2
 */
/**
 * 思路1:
 *      有一个数字出现次数超过了一半，也就是说排序过后，中位数一定是这个数。
 *      采用快速排序将数组排序，然后返回中位数
 * 思路2:
 *      如果在不允许修改原数组的情况下
 *      我们可以发现，这个数字的出现次数大于其他所有出现的数的数目总和
 *      则我们可以O(n)遍历数组一次，每次记录一个数字和出现的次数
 *      如果下一个数字和当前记录的数字相同，则counter++
 *      如果下一个数字和当前记录的数字不同，则counter--
 *      当counter===0时，记录改为下一个数字，并counter=1
 *      这样下来，最多次数的那个数的次数会不断去抵消其他数字的次数，但它的次数最多，它一定会留到最后，并返回
 */
/**
 * 以下只展示快速排序法，这种方法比较容易想到
 */
/**
 * Robust: [], undefined
 */

let swap = (arr, left, right) => {                          // 交换
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}

let partition = (arr, start, end) => {                      // 分治
    if (start === end) return start;
    let pivot = start;
    let index = pivot + 1;
    for (let i = index; i <= end; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

let findMostNumPartition = (arr, start, end) => {
    let index = 0;
    let mid = arr.length >> 1;
    index = partition(arr, start, end);                         // 第一次分治，拿到一个中间index
    while (index !== mid) {                                     // 如果中间index不是整个数组的中位数，继续分治
        if (index < mid)
            start = index + 1;
        if (index > mid)
            end = index - 1;
        index = partition(arr, start, end);
    }
    return arr[index];                                          // 找到了中位index, 返回中位数
}

let findMostNum = (arr) => {
    if (!arr || arr.length <= 0) return null;
    return findMostNumPartition(arr, 0, arr.length - 1);
}

(() => {
    let input = [1, 2, 3, 2, 2, 2, 5, 4, 2];
    console.log(findMostNum(input));
})()