/**
 * 给定几个字符，求字符串的所有组合
 * 特殊情况: 'ab' 与 'ba' 是不同的排列，但只能算一个组合
 */
/**
 * 思路:
 *      比如abc, 相当于求abc中数目为1,2,3的组合
 *      子函数用来求字符数组中可以得到的数目为k的组合
 *          递归：当拿到第一个a时，可以选择继续求接下来3-1个字符里，数目为k的组合(a未入选结果集)
 *                              也可以选择继续求接下来3-1个字符里，数目为k-1的组合(a入选结果集)
 */
/**
 * input: ['a','b','c']
 * output: ['a','b','c','ab','ac','bc','abc']
 */
/**
 * Robust: [], undefined
 */
var combination = (arr) => {
    if (!arr || arr.length < 1) return null          // Robust
    let res = [];                                    // 结果集    
    let tmpStr = '';                                 // 临时结果字符串
    let combinationSub = (index, num, res) => {      // 子函数
        if (!num) {
            res.push(tmpStr);                        // 如果num === 0了，存入结果集
            return;
        }
        if (index >= arr.length) return;             // 如果字符数组遍历结束了, return
        tmpStr += arr[index];                        // arr[index] 在结果集里
        combinationSub(index + 1, num - 1, res);     // 则递归剩下的数组元素中找剩下的num-1个
        tmpStr = tmpStr.slice(0, tmpStr.length - 1); // 移除刚才的arr[index] 并在剩下的元素中找num个
        combinationSub(index + 1, num, res);
    }
    for (let i = 1; i <= arr.length; i++) {
        combinationSub(0, i, res);                    // 依次寻找num = 1, 2, 3 ... arr.length的结果集
    }
    return res;                                       // 返回最终结果集
}

(() => {
    let input = ['a', 'b', 'c']
    console.log(combination(input));
})()
