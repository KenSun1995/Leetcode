/**
 * 字符串的全排列
 */
/**
 * 思路：
 *      1. 用set来去重，比如s='aa', s[1][0] = s[0][1] = 'aa'
 *      2. 
 */
/**
 * 输入 abc, 输出["abc","acb","bac","bca","cab","cba"]
 */
/**
 * Robust: ''ss
 */
var permutation = function (s) {
    let res = new Set;
    let used = Array(s.length).fill(false);
    let dfs = (str, used) => {
        if (str.length == s.length) {
            res.add(str);
            return;
        }
        for (let i = 0; i < s.length; i++) {
            if (used[i]) continue;
            else {
                used[i] = true;
                dfs(str + s[i], used);
                used[i] = false;
            }
        }
    }
    dfs('', used);
    return [...res];
};

(() => {
    let input = 'abc';
    console.log(permutation(input));
})()