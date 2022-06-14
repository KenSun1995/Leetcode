/**
 * 从上到下打印二叉树
 * 
 * 也就是广度优先遍历BFS，并打印
 */
/**
 * 使用一个队列，一开始的时候把根节点存入队列，
 * 接下来只要队列不为空，就弹出队列尾部的节点，打印，并将非null子节点从左到右依次存入队列。
 */
/**
 * Robust:
 *          []
 */
function NodeTree(val, left, right) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var printTreeBFS = (tree) => {
    if (!tree || tree.val === null) return;
    let queue = [tree];
    while (queue.length > 0) {
        let tmpTree = queue.shift();
        process.stdout.write(tmpTree.val + '');
        if (tmpTree.left)
            queue.push(tmpTree.left);
        if (tmpTree.right)
            queue.push(tmpTree.right)
    }
    console.log();
}

(() => {
    let input = new NodeTree(1, new NodeTree(2, new NodeTree(4), new NodeTree(5)), new NodeTree(3, new NodeTree(6), new NodeTree(7)));
    printTreeBFS(input);
})()