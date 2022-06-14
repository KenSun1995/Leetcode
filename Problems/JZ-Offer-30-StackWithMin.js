/**
 * 包含min()函数的栈
 *      为栈定义三个函数, push(), pop(), min()
 */
/**
 * !!!! 注意，定义栈属性函数，MinStack.prototype.push = function (){}; 时，不能用箭头函数，不能省略分号
 */
function MinStack() {
    this.stack = [];
    this.minStack = [];
}

MinStack.prototype.push = function (x) {
    if (isNaN(x)) return;
    x -= 0;
    this.stack.push(x);
    if (this.minStack.length === 0) {
        this.minStack.push(x);
    } else if (x < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    } else {
        this.minStack.push(this.minStack[this.minStack.length - 1])
    }
};

MinStack.prototype.pop = function () {
    this.minStack.pop();
    return this.stack.pop();
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.min = function () {
    return this.minStack[this.minStack.length - 1];
};

(() => {
    var obj = new MinStack()
    obj.push(5);
    obj.push(2);
    obj.push(4);
    obj.push(2);
    obj.pop();
    obj.pop();
    console.log('top: ', obj.top());
    console.log('min: ', obj.min());
})()

