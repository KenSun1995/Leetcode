/**
 * 二叉搜索数的后续遍历
 *      二叉搜索数: 左子树上的节点均小于根节点，右子树上的节点均大于根节点
 */
/**
 * 数组末是根节点，前面的数字前一部分属于左子树，应该都小于8，后面的数字部分应该属于右子树，应该都大于8
 * 然后再将其左子树和右子树继续迭代进行相同的判断
 */
/**
 * Robust:
 *      [], [1], undefined
 */
/**
 * !!!! 面试题中，要求处理二叉树的遍历序列，则先找到root节点，再划分左右子树进行递归
 */

var checkPostOrder = (arr) => {
    if (!arr || arr.length < 1) return false;  // [], undefined
    if (arr.length === 1) return true;         // [1], 当递归到最后只剩一个数，返回true
    let root = arr[arr.length - 1];            // 最后一位是根节点
    let index = 0;                             // 设置左子树的指针index
    for (; index < arr.length - 1; index++) {
        if (arr[index] > root)
            break;
    }
    let j = index;                             // arr[index] 为右子树数组中的第一个数
    for (; j < arr.length - 1; j++) {
        if (arr[j] < root)
            return false;                      //  如果右子树数组里有小于根节点的，false
    }
    let left = checkPostOrder(arr.slice(0, index));               // 递归左子树
    let right = checkPostOrder(arr.slice(index, arr.length - 1)); // 递归右子树
    return left && right                       //  左右子树都true才行
}

(() => {
    let input = [1, 3, 2, 10, 12, 11, 8];
    console.log(checkPostOrder(input));
})()