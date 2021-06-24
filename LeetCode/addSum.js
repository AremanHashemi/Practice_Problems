/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    return ar.reduce((a,b) => {return a+b});
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    const a_score = 0;
    const b_score = 0;
    for (i in a) {
        if (a[i] > b[i]) {
            ++a_score;
        } else if (b[i] > a[i]) {
            ++b_score;
        }     
    }
    return [a_score, b_score];
}


function aVeryBigSum(ar) {
    let sum = ar.reduce((total, value) => {return total + value})
}

function diagonalDifference(arr) {
    let asum = 0;
    let bsum = 0;
    let size = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[size - i][size - i]);
        asum += arr[i][i];
        bsum += arr[i][size -  i];
    }
    return Math.abs(asum + bsum);
}



// var items = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
// console.log(diagonalDifference(items));



console.log(" ".repeat(0));



/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let start = 0
    for (let index = 1; index < nums.length; ++index) {
        // Two indexes are equal
        if (nums[start] == nums[index]) {
            // If they are equal you have a duplicate 
        } else {
            // Inlcude the first value into the list
            start++;
            nums[start] = nums[index];
        }
    }
    return start + 1;
};

// Input: nums = [1,2,2]
// Output: 2, nums = [1,2,_]

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]


// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]



/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    const memo = new Array(prices.length).fill(null);
    return maxProfitHelper(prices, 0, memo);
};
var maxProfitHelper = function(prices, start, memo) {
    if (memo[start] !== null) {
        return memo[start];
    }
    if (start == prices.length) {
        return 0;
    }
    let max = 0;
    for (let i = start; i < prices.length; ++i) {
        //Here we start the possibility at buying at i
        let local_max = 0;
        for (let j = i + 1; j < prices.length; ++j) {
            // Find possible max from selling at j
            const sale = prices[j] - prices[i];
            if (sale > 0) {
                // If we can make a profit from selling at j
                // We need to check is that profit more than selling at other j values
                let sale_total = sale + maxProfitHelper(prices, j, memo);
                local_max = sale_total > local_max ? sale_total : local_max;
            }
            max = local_max > max ? local_max : max;
        }
    }
    memo[start] = max;
    return max;
}


console.log(maxProfit([7,1,5,3,6,4]));
// const memo = new Array(9);
// console.log(memo[1]);



 
// Peak and Valley Soln
var maxProfit = function(prices) {
    let i = 0;
    let maxReturn = 0;
    const stop = prices.length - 1; 
    while (i < stop) {
        // Find valley
        while (i < stop && prices[i] <= prices[i + 1]) {
            i++;
        }
        let valley = prices[i];
        // Find peak
        while (i < stop && prices[i] > prices[i + 1]) {
            i++;
        }
        let peak = prices[i];
        maxReturn += valley - peak;
        i++;
    }
    return maxReturn;
}

var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1]; 
        }
    }
    return maxprofit;
}


