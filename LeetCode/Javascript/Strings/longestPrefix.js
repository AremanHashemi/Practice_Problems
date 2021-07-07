/**
 * Common Approach
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let count = 0;
    const min = Math.min.apply(Math,strs.map((str) => {return str.length}));
    for (let i = 0; i < min; ++i) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j-1][i] !== strs[j][i]) {
                return strs[0].slice(0,count);
            }
        }
        count++;
    }
    return strs[0].slice(0,count);
};


const s = ["flower","flow","flight"];
const res = longestCommonPrefix(s);
console.log(res);
