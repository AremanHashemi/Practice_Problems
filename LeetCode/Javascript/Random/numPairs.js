




/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    /**
     * 
     * iterate over the elements
     *  for each element we need to check the rest of the list for equalities 
     *      if equal incement soln
     */
    let numSolutions = 0;
    num.forEach(element, index => {
        nums.slice(index+1).forEach(element2 => { 
            if (element === element2) {
                numSolutions++;
            }
        })
    });
    return numSolutions;
};




/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    const indexes = indexesOf(jewels,stones);
    return indexes.length;
};


// Returns the indexes of list a in list b
const indexesOf = function(a, b) {
    const solution = [];
    stones.forEach((aElem, aIndex) => {
        stones.forEach((bElem, bIndex) => {
            if (aElem === bElem) {
                solution.push( (aIndex, bIndex));
            }
        });
    });
    return solution;
}