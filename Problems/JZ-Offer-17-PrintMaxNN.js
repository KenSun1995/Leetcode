/**
 * 输入数字n, 按顺序打印出从1到最大的n位数，比如输入3,则打印1,2,3...,999
 */
/**
 * 考虑大数，则可以用字符串表示大数，或者数字全排列
 */
/**
 * 以下是数字全排列解法, 使用字符串来避免大数溢出
 */
var PrintMaxiNN = (number) => {
    if (number <= 0 || isNaN(number)) return
    let numString = [];
    for (let i = 0; i < 10; i++) {
        numString[0] = i;
        PrintNumRecursion(numString, number, 0);
    }
}

var PrintNumRecursion = (numString, len, index) => {
    if (index == len - 1) {
        PrintNumber(numString);
        return;
    }
    for (let i = 0; i < 10; i++) {
        numString[index + 1] = i;
        PrintNumRecursion(numString, len, index + 1);
    }
}

var PrintNumber = (numString) => {
    let beginZeroFlag = true;
    let len = numString.length;
    let resString = '';
    for (let i = 0; i < len; i++) {
        if (beginZeroFlag && numString[i] !== 0)
            beginZeroFlag = false;
        if (!beginZeroFlag) {
            resString += numString[i]
        }
    }
    console.log(resString);
}


(() => {
    PrintMaxiNN(2);
})()
