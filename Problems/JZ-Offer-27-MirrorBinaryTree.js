/**
 * 求镜像二叉树，反转所有的非叶子节点
 */
function NodeTree(val, left, right) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var makeTree = (arr, tree, i) => {
    if (i >= arr.length) {
        return null;
    }
    tree.val = arr[i];
    tree.left = makeTree(arr, new NodeTree(), 2 * i + 1);
    tree.right = makeTree(arr, new NodeTree(), 2 * i + 2);
    return tree;
}

var mirrorTree = (tree) => {
    if (!tree || (!tree.left && !tree.right)) return;
    //swap
    let tmp = tree.left;
    tree.left = tree.right;
    tree.right = tmp;
    if (tree.left)
        mirrorTree(tree.left);
    if (tree.right)
        mirrorTree(tree.right);
    return tree;
}

(() => {
    let input = [4, 3, 2, 4, 5, null, 6]; // tree
    let tree = new NodeTree();
    tree = makeTree(input, tree, 0);
    // start
    tree = mirrorTree(tree);
    console.log(tree);
})()