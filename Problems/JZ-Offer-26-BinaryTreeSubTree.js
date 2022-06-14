/**
 * 树的子结构
 */
/**
 * !!! 数组表示的二叉树，如何通过index来定位父节点或左右子节点:
 *          父节点index为n, 左子节点index为 2n+1, 右子节点为2n+2
 *          子节点index为n, 父节点为(n-1)/2
 * !!! 
 *      DFS（Depth First Search）深度优先搜索。 
 *      BFS（Breadth First Search）广度优先搜索。
 * 
 *      DFS: 注重状态回溯，递归，先按一个方向走到底，无路可走回溯然后走其他的路
 *      BFS: 注重状态的选取与标记，每走一步都记录下一个可走的步，然后记录几步能走到这里，都记录好了再向下
 */
/**
 * input1: [4,3,2,1,1]; input2: [3,1]; true
 * input1: [4,3,2,4,5,null,6]; input2: [5,6]; false
 * input1: [4,3,2,4,5,null,6]; input2: [5,null,6]; true
 * Robust: 
 *      [],[1,2]
 *      [],[]
 *      [1,2],[]
 */
// Tree structure
function NodeTree(val, left, right) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
// make a tree from array
var makeTree = (arr, tree, i) => {
    if (i >= arr.length) {
        return null;
    }
    tree.val = arr[i];
    tree.left = makeTree(arr, new NodeTree(), 2 * i + 1);
    tree.right = makeTree(arr, new NodeTree(), 2 * i + 2);
    return tree;
}
// check if tree wrap substree
var checkSame = (tree1, tree2) => {
    if (!tree2) return true
    if (!tree1) return false
    if (tree1.val !== tree2.val) return false
    return checkSame(tree1.left, tree2.left) && checkSame(tree1.right, tree2.right);
}
// main function
var hasSubTree = (tree1, tree2) => {
    let res = false;
    if (tree1 && tree2) {
        if (tree1.val === tree2.val) {
            res = checkSame(tree1, tree2);
        }
        if (!res)
            res = hasSubTree(tree1.left, tree2);
        if (!res)
            res = hasSubTree(tree1.right, tree2);
    }
    return res;
}

(() => {
    let input1 = [4, 3, 2, 4, 5, null, 6]; // tree
    let input2 = [2, null, 6];             // subtree
    let tree1 = new NodeTree();
    let tree2 = new NodeTree();
    tree1 = makeTree(input1, tree1, 0);
    tree2 = makeTree(input2, tree2, 0);
    // check start
    let res = hasSubTree(tree1, tree2);
    console.log(res);
})()
