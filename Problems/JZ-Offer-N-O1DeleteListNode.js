function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var makeAList = () => {
    let one = new ListNode(1);
    let two = new ListNode(2);
    let three = new ListNode(3);
    let four = new ListNode(4);
    let five = new ListNode(5);
    let six = new ListNode(6);
    five.next = six;
    four.next = five;
    three.next = four;
    two.next = three;
    one.next = two;
    return one;
}

var deleteNode = (head, val) => {
    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    if (!head) return head;
    let prev = head
    let current = head.next;
    while (current) {
        if (current.val === val) {
            prev.next = current.next;
            current = current.next;
        } else {
            prev = current;
            current = current.next;
        }
    }
    return head;
}

var printList = (list) => {
    let tmp = list;
    console.log(tmp.val);
    if (tmp.next !== null)
        printList(tmp.next);
}

(() => {
    let list = makeAList();
    list = deleteNode(list, 1);
    printList(list);
})()