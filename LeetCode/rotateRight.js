
/*
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]


    [1,2,3] 
    [1,1,3] tmp = 2
    [1,1,2] tmp = 3
    [3,1,2] tmp = 1
*/



// var rotate = function (nums, k) {
//     k = k % nums.length;
//     newNums = new Array(nums.length);
//     for (let i = 0; i < nums.length; i++) {
//         const newPos = (i + k) % nums.length;
//         newNums[newPos] = nums[i];
//     }
//     return newNums;
// }
// // Three ways to do
var rotate = function (nums, k) {
    k = k % nums.length;
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev    = nums[start];
        do {
            let next = (current + k) % nums.length;
            let tmp = nums[next];
            nums[next] = prev;
            prev = tmp;
            current = next;
            count++;
        } while (start != current);
    }
}
let arr = [1,2,3,4,5,6,7];
console.log("Original array :".padEnd(20), arr);
console.log("Rotated :".padEnd(20), rotate(arr,3));

