/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap = new Map();
    for (let char of s) {
        let count = charMap.get(char) ?? 0;
        charMap.set(char,count + 1);
    }

    for (let i = 0; i < s.length; i++) {
        const count = charMap.get(s[i]);
        if (count < 2) {
            return i;
        }
    }
    return -1;
};

const s = "aabb";
const result = firstUniqChar(s);
console.log(result);