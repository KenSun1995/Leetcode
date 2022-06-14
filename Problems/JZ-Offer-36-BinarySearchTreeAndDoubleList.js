/**
 * 二叉搜索数与双向链表, 根据给出的二叉搜索树，生成节点从小到大排列的双向链表, 并且首尾也要相连，行程闭环双向链表环
 * 不可以添加或创建任何新的节点或数据结构，只能原地更改
 */
/**
 * 思路：使用dfs遍历的二叉搜索树结果就是从小到大的节点顺序，因此使用dfs去遍历，使用指针head记录头指针，使用pre记录前一个指针，pre一直在边
 */
/**
 * Robust: ...
 */
function Node(val, left, right) {
    this.val = (val === undefined) ? null : val;
    this.left = (left === undefined) ? null : left;
    this.right = (right === undefined) ? null : right;
}


var treeToDoublyList = function (root) {
    if (!root || root.val === null) return // Robust
    let head = pre = null;
    dfs(root);
    head.left = pre; // 将首尾相连，行成闭环
    pre.right = head;
    return head; // 返回新的双向链表结构

    // 为了使head, pre能够作为treeToDoublyList函数代码块中的‘全局‘变量，则需将dfs定义为内部函数
    function dfs(node) {
        if (!node || node.val === null) return // 递归出口
        dfs(node.left);                        // 递归左子树
        if (!pre) {
            head = node;                       // 如果pre不存在，说明是第一个节点
        } else {
            pre.right = node;                  // 如果pre存在，则需要把pre的右指针指向当前节点
        }
        node.left = pre;                       // anyway, 当前节点的左指针指向pre节点
        pre = node;                            // 将当前节点保存为pre, 用于下次递归循环
        dfs(node.right);                       // 递归右子树
    }
};