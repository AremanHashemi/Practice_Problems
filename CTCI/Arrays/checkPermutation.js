// Given two strings write a method to decide if one is a permutation of the other

/**
 * Def: 
 *  String A must contain the same characters as B in any order
 * 
 * Hashtable Algorithm | Could be replaced with a Array === size of encoding
    * If string lengths are different return false
    * Itterate through one list and add each value to a hashtable  
    * Itterate through the second list and remove each value from the hashtable
    * Hashtable should be empty in the end return true
    * Runtime O(N)
    * Space complexity O(N)
 * 
 * Sorting Algorithm
    * String lengths are different return false 
    * We can sort list a and list b O(n log n)
    * We then itterate through and check each character is the same 
    * return true
 */

const checkPermutation = function (a, b) {
    if (a.length !== b.length) {
        return false;
    }
    const hash_a = addCharsToMap(a);
    return checkPermutationOfMap(b, hash_a);
}

const addCharsToMap = function (a) {
    const hash_a = new Map();
    for (let char of a ) {
        const count = hash_a.get(char) ?? 0;
        hash_a.set(char, count + 1);
    }
}

const checkPermutationOfMap = function (b, hash_a) {
    for (let char of b) {
        let count = hash_a.get(char);
        if (count === undefined) {
            return false;
        } else if (count === 0) {
            return false;
        }
        hash_a.set(char, count - 1);
    }
    return true; 
}
console.log(checkPermutation("Hello", "olleh"));