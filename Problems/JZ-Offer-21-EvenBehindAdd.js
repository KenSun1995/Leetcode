/**
 * 调整数组顺序，使奇数位于偶数前面，例如输入[1,2,3,4], 输出可以是[1,3,2,4] || [3,1,2,4]...
 */
/**
 * 使用两个指针从首尾开始向中间靠拢，如果左指针指向偶数并右指针指向奇数，交换。
 */
/**
 * Robust:
 * [0], [], [1,3,'5','a'], ['a']
 */

var exchangeArray = (arr) => {
    try {
        if (isNaN(arr[0])) throw 'Invalid element'; // ['a']...
        if (!arr || arr.length <= 1) return arr;    // [], [0], undefined...
        let len = arr.length;
        for (let i = 0, j = len - 1; i < j; i++, j--) {
            if (isNaN(arr[i]) || isNaN(arr[j]) || arr[i] === null || arr[j] === null || !arr[i] || !arr[i]) {
                throw 'Invalid element';            // [1,2,'a',4], [1,2,null,4]...
            }
            arr[i] -= 0;                            // change ['1','2',3,4] to [1,2,3,4]
            arr[j] -= 0;
            if (!checkCondition(arr[i]) || checkCondition(arr[j])) {
                if (checkCondition(arr[i])) {
                    j++;
                } else if (!checkCondition(arr[j])) {
                    i--;
                } else {
                    let tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
    } catch (e) {
        throw e;
    }
    return arr;
}

var checkCondition = (num) => { // odd return 1
    return num & 1
}

(() => {
    let input = [8, 10, 2, 1, 3, 5, undefined];
    try {
        console.log(exchangeArray(input));
    } catch (error) {
        console.log(error);
    }
})()