/** HashTable 
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {
//     const numTable = new Map();
//     for (num of nums) {
//         if (numTable.get(num) === undefined) {
//             numTable.set(num, true);
//         } else {
//             return true;
//         }
//     }
//     return false;
// };


// Sorted array inplace solution
var containsDuplicate = function(nums) {
    nums = nums.sort();
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] == nums[i - 1]) {
            return true;
        }
    }
    return false;
};



console.log(containsDuplicate([1,2,3,4]));
/*
    Itterate through array O(N)
        Check value in hashtable O(1)
            Add value to hashtable O(1)

    Time complexity O(N) avg
    Time Complexity O(N^2) worst
    Space Complexity O(N)
*/

/*
    Sort Array (n log n) in place
    Iterate through and check neighbors

    Time complexity O(N LOG N)
    space complexity O(1)
*/