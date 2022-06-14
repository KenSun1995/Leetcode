/**
 * 查找链表的倒数第k个节点, 一次遍历
 */
/**
 * 两个指针，一个指针先走k-1步，第二个指针再开始走，当第一个指针走到末尾，第二个指针则走到了倒数k处
 */
/**
 * Robust: 
 * k=0
 * k>list.length
 * k<0
 */
function LinkList(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var queryLastKNode = (list, k) => {
    if (k <= 0) return null; // k = 0, k = -1...
    let first = list;
    let second = null;
    let count = 0;
    while (first) {
        if (count >= k - 1) {
            if (!second) {
                second = list;
            } else {
                second = second.next;
            }
        }
        first = first.next;
        count++;
    }
    return second ? second.val : null; // k > list.length...
}
(() => {
    // 1,2,3,4,5
    let inputList = new LinkList(1, new LinkList(2, new LinkList(3, new LinkList(4, new LinkList(5)))));
    console.log(queryLastKNode(inputList, 2));
})()