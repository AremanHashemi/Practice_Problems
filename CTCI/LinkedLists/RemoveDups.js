/**
 * Remove duplicates from an unsorted LinkedList
 * 
 * 
 * 
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let iter = this.head;
            while (iter.next !== null) {
                iter = iter.next;
            }
            iter.next = node;
        }
        this.size++;
    }
    removeDups() {
        let iter = this.head;
        let prev = null;
        let valueMap = new Map();
        while (iter.next !== null) {
            const exist = valueMap.get(iter.data) ?? false;
            if (exist) {
                // Remove node
                // Do not move prev node since iter is deleted
                prev.next = iter.next;
            } else {
                valueMap.add(iter.data, true);
                prev = iter;
            }
            iter = iter.next;
        }
    }
}
