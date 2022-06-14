/**
 * 顺时针打印矩阵
 * matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 1,2,3
 * 4,5,6
 * 7,8,9
 * 
 * output:[1,2,3,6,9,8,7,4,5]
 */
/**
 * Robust: [],[1],[[1,2,3]]
 */
/**
 * 巧妙思路: 
 *          使用字典，配合switch循环来控制方向的变化: →↓←↑
 *          找到每个方向的规律，不断缩小目标矩阵，直到矩阵变为空矩阵
 */

var clockOrderArr = (matrix) => {
    //      []  ||         [1],[1,2,3]
    if (!matrix || !(matrix[0] instanceof Array)) return matrix;
    //   [[2,3]],     [[2]]
    if (!matrix[1]) return matrix[0];
    let dictionary = { 'right': 'down', 'down': 'left', 'left': 'up', 'up': 'right' };
    let array = [];
    let dic = 'right';
    while (matrix && matrix.length !== 0) {         // 输入:        [[1,2,3],[4,5,6],[7,8,9]]
        switch (dic) {
            case 'right':
                let tmpRight = matrix.shift();      //第一次right后: [[4,5,6],[7,8,9]]
                for (let i of tmpRight)
                    array.push(i);
                break;
            case 'down':
                for (let i of matrix) {             //第一次down后:  [[4,5],[7,8]]
                    if (i.length > 0)
                        array.push(i.pop());
                }
                break;
            case 'left':
                let tmpLeft = matrix.pop();         //第一次left获取到 [7,8]
                for (let i = tmpLeft.length - 1; i >= 0; i--)
                    array.push(tmpLeft[i]);         //逆向存储        [8,7]
                break;
            case 'up':                              //向上，并循环
                let tmpUp = []
                for (let i of matrix)
                    if (i.length > 0)
                        tmpUp.unshift(i.shift());
                for (let i of tmpUp)
                    array.push(i);
                break;
            default:
                break;
        }
        dic = dictionary[dic];                       // 切换方向
    }
    return array;
}
(() => {
    // let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let matrix = [[7], [9], [6]]
    let resArr = clockOrderArr(matrix);
    console.log(resArr);
})()