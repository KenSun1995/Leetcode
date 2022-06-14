/**
 * 合并两个升序链表
 * [1->3->5->7->9] + 
 * [2->4->6->8->10] = 
 * [1->2->3->4->5->6->7->8->9->10]
 */
/**
 * Robust: [] + [1->2->3]
 *         [] + []
 */
// 1->2
// 3->4
function LinkList(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var mergeList = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;
    let res = null;
    if (list1.val <= list2.val) {
        res = list1;
        res.next = mergeList(list1.next, list2);
    } else {
        res = list2;
        res.next = mergeList(list1, list2.next);
    }
    return res;
}

(() => {
    let inputList = new LinkList(1, new LinkList(3, new LinkList(5, new LinkList(7, new LinkList(9)))));
    let inputList2 = new LinkList(2, new LinkList(4, new LinkList(6, new LinkList(8, new LinkList(10)))));
    let resList = mergeList(inputList, inputList2);
    console.log(resList);
})()