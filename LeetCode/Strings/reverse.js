/**
 * Reverse a string 
 * 
 * Recursive way
 *  Recurse on the substring
 *  append character on the way back up
 *  Runtime O(N)
 *  Space complexity O(N)
 * 
 * Itterative way
 *   loop through array with a start and end pointer
 *   Swap the last and first elements via a temp char
 *   if start === end then stop
 *  
 * 
 */


/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) { 
//     return reverseStringHelper(s, 0);
// };

// var reverseStringHelper = function(s, pos) {
//     if (s.length === pos){
//         return "";
//     } else {
//         return reverseStringHelper(s, pos+1) + s[pos];
//     }
// }

var reverseString = function(s) { 
    let str = [...s];
    let start = 0;
    let end   = str.length;
    while (start < end) {
        console.log(start, end);
        const tmp = str[start];
        str[start]  = str[end];
        str[end]    = tmp;
        ++start;
        --end;
    }
    return str.join("");
};

console.log(reverseString("hello"));