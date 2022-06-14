/**
 * 复杂链表的复制
 */

/**
 * 链表的节点中除了val,next还有random指向其他随机节点
 */
/**
 * 思路：使用map来存放, key是原节点，值是复制的节点。第一次循环复制了节点的值，第二次循环复制next和random
 */
/**
 * Robust:
 *      head = []
 */
/**
 * Test:
 *  输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
    输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
    子数组的第二个元素时random指向的节点index
 */
function Node(val, next, random) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    this.random = (random === undefined ? null : random);
}

var copyRandomList = function (head) {
    let node = head;
    const m = new Map();
    while (node) {
        m.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    while (node) {
        m.get(node).next = node.next ? m.get(node.next) : null;
        m.get(node).random = node.random ? m.get(node.random) : null;
        node = node.next;
    }
    node = head;
    return m.get(node);
};