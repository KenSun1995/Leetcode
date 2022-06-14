/**
 * 反转链表，输入链表头结点，返回反转后的头结点
 */
/**
 * 使用三个指针，防止链表断裂
 */
/**
 * 1 -> 2 -> 3 -> 4 -> 5 -> 6
 * 1 <- 2 <- 3 <- 4 <- 5 <- 6
 * Robust:
 * [],[1],[1,2,3....n]
 */

/*  迭代思路:
    初始，先把1指针指向null,
    进循环，
    2指针指向1,
    如果3指针有next, 所有指针后移，否则3指针指向2, 结束循环
*/
function LinkList(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
/* **迭代**
var revertLinkedList = (head) => {
    // 如果一个或零个节点
    if (!head || !head.next) return head;
    // 初始化指针
    let firstP = head;
    let secondP = firstP.next;
    let thirdP = null;
    if (secondP.next) {
        thirdP = secondP.next;
    } else {
        // 只有两个节点
        firstP.next = null;
        secondP.next = firstP;
        return secondP.val;
    }
    // 初始，先把first指针指空
    firstP.next = null;
    while (thirdP) {
        // second指针指向first
        secondP.next = firstP;
        // pointers move forward
        if (thirdP.next) {
            let t3 = thirdP;
            let t1 = secondP;
            thirdP = thirdP.next;
            secondP = t3;
            firstP = t1;
        } else {
            // thirdP.next === null, 说明到尾部了，third指向second, 结束
            thirdP.next = secondP;
            break;
        }
    }
    return thirdP.val;
}
*/

/**
 * 递归, 尝试用两个节点去理解。。。
 */
var revertLinkedList = (head) => {
    if (!head || !head.next) return head;
    let last = revertLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

(() => {
    let inputList = new LinkList(1, new LinkList(2, new LinkList(3, new LinkList(4, new LinkList(5)))));
    let lastPoint = revertLinkedList(inputList);
    console.log(lastPoint.val);
})()