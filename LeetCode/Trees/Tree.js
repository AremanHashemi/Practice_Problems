
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

let x = [1,2,3,4,5,6,7,8];
for (let i = 0; i < c.length; i++) {
    const leftIndex  = (2 * i) + 1;
    const rightIndex = (2 * i) + 2;
    console.log(`Node ${c[i]}, left: ${c[leftIndex]}, right: ${c[rightIndex]}\n`);
}
