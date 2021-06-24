// Given a non-empty array of integers nums, 
// every element appears twice except for one. 
// Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let total = 0;
    for (num of nums) {
        total ^= num;
    }
    return total;
};


// Solutions
/*
Brute force
    Itterate through array check every other index for a duplicate until
    Runtime O(N^2)




*/