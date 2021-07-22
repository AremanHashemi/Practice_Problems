// Return if a tree is a mirror of itself (symmetric around center)

/**
 * Algorithm 1
 * Create a list of elements 
 */


// [1,2,3,]
var isSymmetric = function(root) {
	for (let i = 1; i < root.length ; i = (i * 2) + 1) {
		let start = i;
		let end   = i * 2;
		while (start < end) {
			if (root[start] != root[end]) {
				return false;
			}
			start++;
			end--;
		}
	}
	return true;
};

// const a = [1,2,2,3,4,4,3,null,null,null,8,8,null,null,null];
const a = [1,2,2,null,3,null,3];
console.log(isSymmetric(a))