/**
 * 输入一个size为8的数组，判断有没有可能把这8个数字分别放到正方体的8个顶点上，
 * 使得正方体上三组相对的面上的4个顶点的和都相等。
 */
/**
 * 思路：
 *      先得到a1 ~ a8的所有排列，返回判断是否有符合条件的：
 *      a1+a2+a3+a4=a5+a6+a7+a8, a1+a3+a5+a7=a2+a4+a6+a8, a1+a2+a5+a6=a3+a4+a7+a8
 */
/**
 * 输入: [1,2,3,4,5,6,7,8]
 * 输出: true/false
 */
/**
 * Robust: [], [1,3,4]
 */

var squareCheck = (arr) => {
    if (!arr || arr.length !== 8) return false;                             // Robust
    let able = Array(8).fill(false);                                        // 得到标识数组[false*8]
    let res = false;                                                        // result flag
    let dfs = (a, able) => {
        if (a.length === 8) {                                               // 如果长度为8了，判断
            if (a[0] + a[1] + a[2] + a[3] === a[4] + a[5] + a[6] + a[7] &&
                a[0] + a[2] + a[4] + a[6] === a[1] + a[3] + a[5] + a[7] &&
                a[0] + a[1] + a[4] + a[5] === a[2] + a[3] + a[6] + a[7]) {
                res = true;                                                 // 满足条件，flag为true
                return;
            }
        } else {
            for (let i = 0; i < arr.length; i++) {                          // 如果长度不足8, 循环递归
                if (able[i]) continue;                                      // 如果当前标识位为true, 则下一个
                able[i] = true;                                             // 改当前标识位为true
                a.push(arr[i]);                                             // 当前数字加入数组中，为了传入下一层递归dfs
                dfs(a, able);                                               // dfs
                a.pop();                                                    // 递归出栈，后退一层，移除最后一个加入的元素，从而达到全排列
                able[i] = false;                                            // 同样，递归出栈，标识位改回false
            }
        }
    }
    dfs([], able);                                                          // 递归入口
    return res;
}

(() => {
    let input = [2, 3, 7, 9, 11, 0, 2, 8];
    // let input = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(squareCheck(input));
})()