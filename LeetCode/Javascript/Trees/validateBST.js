/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
	const between = function(x, min, max) {
		return x >= min && x <= max;
	}
	const helper = function(root, min, max) {
		if (root === null) {
			return true;
		}
		if (!between(root.value,min,max)) {
			return false;
		}
		return helper(root.left, min, root.value) && helper(root.right, root.value, max);
	}
	return helper(root, -Infinity, Infinity);
};

class tree {
	constructor(value){
		this.value = value;
		this.left  = null;
		this.right = null;
	}
}

const a = new tree(2);
a.left = new tree(1);
a.right = new tree(3);


console.log(isValidBST(a))