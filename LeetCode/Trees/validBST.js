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


/**
 * Algorithm
 * Base case value = null = leaf return
 * 
 * 
 * All values to the left of our current node are smaller than our value
 * All values to the right of our current node are greater than our value
 */


var isValidBST = function(root) {
    validate(root, null, null)
};

const validate = function(root, minValue, maxValue) {
    if (root === null) {
        return true;
    }

    if ((minValue !== null && root.val <= minValue) || 
            (maxValue !== null && root.val >= maxValue)) {
                return false; 
    }
    return validate(root.left, minValue, root.value) 
        && validate(root.right, root.value, maxValue);
}


class TreeNode {
    constructor(value) {
        this.left  = null;
        this.right = null;
        this.value = value;
    }
    constructor(value, left, right) {
        this.left = new TreeNode(left);
        this.right = new TreeNode(right);
        this.value = value;
        return 
    }
    addLeft(value) {
        const newNode = Tree(value);
        this.left = newNode
        return newNode;
    }
    addRight(value) {
        const newNode = Tree(value);
        this.right = newNode;
        return newNode;
    }
}

class Tree {
    constructor() {
        this.root
    }

    parseBinaryHeap(heap) {
        // [1,2,3,4,5]
        /**
         *          1
         *      2       3
         *    4   5    6  7 
         *  8
         * Arr[(i-1)/2]	Returns the parent node
           Arr[(2*i)+1]	Returns the left child node
           Arr[(2*i)+2]	Returns the right child node
         */
        for (let i = 0; i < heap.length; i++) {
            const leftIndex  = (2 * i) + 1;
            const rightIndex = (2 * i) + 2;

            const root = Tree()
        }
    }
}

let c = [1,2,3,4,5,6,7,8];
for (let i = 0; i < c.length; i++) {
    const leftIndex  = (2 * i) + 1;
    const rightIndex = (2 * i) + 2;
    console.log(`Node ${c[i]}, left: ${c[leftIndex]}, right: ${c[rightIndex]}\n`);
}
