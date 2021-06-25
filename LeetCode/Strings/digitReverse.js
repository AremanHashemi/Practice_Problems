/**
 * Reverse the order of digits
 * Simple way
 *  Convert digit to array of chars
 *  reverse chars
 * 
 * 
 *  Using arithmetic
 * find number of digits 
 * starting from largest 10 * size integer divide to find 
 */


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) {
        return 0;
    }
    const sign = x > 0 ? 1 : -1;
    x = Math.abs(x);
    let sum = 0;
    while (x > 0) {
        const lastDigit = x % 10;
        sum += lastDigit;
        if (x >= 10) {
            sum *= 10;
        }
        x   = Math.floor(x/10);
    }
    return sign * sum;
};

const val = 1534236469;
console.log(val)
console.log(reverse(val))