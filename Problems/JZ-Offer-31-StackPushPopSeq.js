/**
 * 栈的压入，弹出序列
 * 输入压入: 12345, 
 * 输入弹出: 45321 true
 *          45312 false
 * Robust: [], [1]
 *         [], []
 *         [1,2,3], []
 */

var checkMatch = (pushStack, popStack) => {
    if (!pushStack || !popStack) return false;  // undefined,undefined
    if (pushStack.length === 0 && popStack.length === 0) return true;  // [][]
    if (pushStack.length === 0) return false;  // [],[1]
    if (popStack.length === 0) return true;    // [1],[]
    let tmpStack = [];  // 临时栈
    for (let i of popStack) { // 遍历弹出序列
        if (tmpStack.length === 0 || tmpStack[tmpStack.length - 1] !== i) { // 如果临时栈为空或者栈顶不是要弹出的元素
            let tmpEle = null;
            if (pushStack.length !== 0) { // 如果还有没入临时栈的，就拿出来
                tmpEle = pushStack.shift();
            } else {                      // 已经都弹入了，为false
                return false;
            }
            while (tmpEle !== i) {       // 如果新拿出来的元素不是要弹出的，就存入临时栈
                tmpStack.push(tmpEle);
                if (pushStack.length !== 0) {   // 如果还有没入临时栈的，继续拿出来
                    tmpEle = pushStack.shift();
                } else {                 // 如果都弹入临时栈了，还没有找到，就是false
                    return false;
                }
            }
        } else { // 如果栈顶正好是要弹出的元素，弹出
            tmpStack.pop();
        }
    }
    return true;
}

(() => {
    let pushStack = [1, 2, 3, 4, 5]
    let popStack = [2, 4, 3, 5, 1]
    console.log(checkMatch(pushStack, popStack));
})()