/**
 * 二叉数中和为某值的子路径
 */

/**
 * 思路：dfs, 递归的本质是入栈出栈的过程，判断当前节点值加到路径上符合要求不，如果符合要求且为叶节点，打印。
 *           否则，递归调用左子树，右子树。在当前函数结尾删除当前路径和值。
 */

/**
 * Robust: 
 *      root = [], 
 *      root = null/undefined
 */


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var makeTree = (nums) => {
    var root = new TreeNode(nums[0]);
    var queue = [];
    queue.push(root);
    var cur;
    var lineNodeNum = 2;
    var startIndex = 1;
    var restLength = nums.length - 1;
    while (restLength > 0) {
        for (var i = startIndex; i < startIndex + lineNodeNum; i = i + 2) {
            if (i === nums.length) return root;
            cur = queue.shift();
            if (nums[i] !== null) {
                cur.left = new TreeNode(nums[i]);
                queue.push(cur.left);
            }
            if (i + 1 === nums.length) return root;
            if (nums[i + 1] !== null) {
                cur.right = new TreeNode(nums[i + 1]);
                queue.push(cur.right);
            }
        }
        startIndex += lineNodeNum;
        restLength -= lineNodeNum;
        lineNodeNum = queue.length * 2;
    }
    return root;
}

var findPath = (root, target, path, curTarget, resArr) => {
    curTarget += root.val;
    path.push(root.val);
    if (root.left === null && root.right === null && curTarget === target) {
        var tmp = JSON.parse(JSON.stringify(path));
        resArr.push(tmp);
    }
    if (root.left !== null)
        findPath(root.left, target, path, curTarget, resArr);
    if (root.right !== null)
        findPath(root.right, target, path, curTarget, resArr);
    curTarget -= root.val;
    path.pop();
    return resArr;
}

var pathSum = function (root, target) {
    if (!root || root.length < 1) return []
    var resArr = [];
    var path = [];
    var curTarget = 0;
    resArr = findPath(root, target, path, curTarget, resArr);
    return resArr;
};

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]
(() => {
    var root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
    var tree = makeTree(root);
    var resArr = pathSum(tree, 22);
    console.log(resArr);
})()