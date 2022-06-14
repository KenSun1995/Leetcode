/**
 * 8皇后问题:
 *          在8X8的国际象棋上摆放8个皇后, 他们互相不能攻击，即任意两个皇后不再同一列，一行或对角线上。
 *          请问一共有多少种摆放的方法? (92种)
 */
/**
 * 思路：
 *          拿一个size为8的数组，arr = Array(8), index表示行数编码，值(0~7)表示列数编码,
 *          为arr[0] ~ arr[7] 来分配值 0 ~ 7, 即 0 ~ 7 在arr数组中的全排列，
 *          每分配入一个数值，对当前所分配的所有值进行条件筛查，如果false, 则继续拿其他数来填充并继续筛查，直到满足条件，则进一步递归
 *          筛查条件：当前位置与之前所有节点位置的横坐标差与纵坐标差绝对值不能相等，且被分配的0-7之间的数，不能是相同的
 *          记录满足的个数
 */

var eightQueens = () => {
    let counter = 0;                                                    //计数器
    let dfs = (arr, index) => {
        if (index === arr.length) {                                     //如果填充满了8个，计数
            counter++;
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            arr[index] = i;                                             //依次填入0-7, 看哪一种符合
            let flag = true;
            for (let j = 0; j < index; j++) {                           //依次检查当前节点与之前的所有节点之间是否都满足条件
                let ij = i - arr[j];
                if ((ij > 0 ? ij : -ij) === index - j || ij === 0) {    //不满足条件，false && break
                    flag = false;
                    break;
                }
            }
            if (flag) {                                                 //满足条件，进一步递归
                dfs(arr, index + 1);
            }
        }
    }
    dfs(Array(8).fill(1), 0);                                           //递归入口，index从0开始
    return counter;
}

(() => {
    console.log(eightQueens());
})()