/**
 * Method replaces all spaces with '%20'
 * 
 * 
 * Option 1 Duplicate array
    * Split string by spaces into seperate array of strings O(n)
    * Join array by adding '%20' O(n)
 *  Time complexity = O(N)
 *  Space complexity = O(N) 
 * 
 * Option 2 inplace : assuming the original array has enough space
 * First pass through array making each space now take 3 spaces 
 * 
 */


const URLify = function (rawURL) {
    const words = rawURL.trim().split(' ');
    return words.join('%20');
}

console.log(URLify("Mr John Smith "));