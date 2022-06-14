/**
 * 最小的k个数:
 *          输入n个整数，找出其中最小的k个数，例如: [4,5,1,6,2,7,3,8], 则最小的4个数字是1,2,3,4
 */
/**
 * 思路 1:
 *          同样采取分治，排序找到k-1角标，然后前面的数就是要返回的，但注意这时是未排序的结果集
 * 
 * 思路 2:
 *          适用于海量数据且不需要修改原数组
 *          声明一个k size的数组用来存放结果集，如果数组里还有空间，直接存入
 *          如果数组满了，求数组里的最大值，然后与当前待传入的数对比，如果当前的是够小，就替换
 *          (红黑树太麻烦，可用Math.max(...array)) 求最大值
 *          
 */
/**
 * Robust: [], undefined
 */

var swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

var partition = (arr, start, end) => {
    if (start >= end) return start;
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

var getLeastNumbers = function (arr, k) {
    if (!arr || k < 1 || k > arr.length) return [];
    let start = 0;
    let end = arr.length - 1;
    let index = partition(arr, start, end);
    while (index !== k) {
        if (index < k) {
            start = index + 1;
        } else {
            end = index - 1;
        }
        index = partition(arr, start, end);
    }
    return arr.slice(0, k);
};


(() => {
    let input = [4, 5, 1, 6, 2, 7, 3, 8];
    console.log(getLeastNumbers(input, 4));
})()



/**
 * Solution 2
 */
//  var getLeastNumbers = function (arr, k) {
//     if (!arr || k < 1 || k > arr.length) return [];
//     let res = [];
//     for (let i of arr) {
//         if (res[k - 1] === undefined) {
//             res.push(i);
//         } else {
//             let max = Math.max(...res);
//             if (i < max) {
//                 for (let j = 0; j < k; j++) {
//                     if (res[j] === max) {
//                         res[j] = i;
//                         break;
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// };