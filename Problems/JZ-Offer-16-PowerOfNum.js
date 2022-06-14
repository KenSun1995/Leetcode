/**
 * 实现函数double Power(double base, int exponent), 求base的exponent方。不需要考虑大数
 */
/**
 * 
 * 许多情况需要考虑，幂为负数，底数为0, 是否考虑大数(常用数组或字符串表示大数)
 * 在计算次幂的函数中，使用公式来优化了计算次数:
 * 当n为偶数时, a^n = a^(n/2) * a^(n/2)
 * 当n为奇数时, a^n = a^((n-1)/2) * a^((n-1)/2) * a
 * 
 * 并使用了位与，右移，代替了求余和除法，效率优化
 */

var equal = (x, y) => {
    return Math.abs(x - y) < Math.pow(2, -53);
}

// var g_InvalidFlag = false;

var power = (base, exponent) => {
    if (equal(base, 0.0) && exponent < 0) {
        // g_InvalidFlag = true;
        return 0.0;
    }
    let absExponent = exponent < 0 ? exponent * -1 : exponent;
    let res = PowerWithAbsExponent(base, absExponent);
    if (exponent < 0) {
        res = 1.0 / res;
    }
    return res;
}

var PowerWithAbsExponent = (base, absExponent) => {
    if (absExponent == 0) return 1;
    if (absExponent == 1) return base;
    let res = PowerWithAbsExponent(base, absExponent >> 1);
    res *= res;
    if (absExponent & 1 == 1)
        res *= base;
    return res;
}

(() => {
    console.log(power(2, -3));
})()