// 걸린시간 3:00:00

'use.strict';
var fs = require('fs');
const input = fs.readFileSync('FE-Algorithm-Study/DataStructure/Aroma-oh/2164.txt').toString().trim();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;

        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.size++;

        return newNode;
    }

    getHead() {
        return this.head.value;
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    getSize() {
        return this.size;
    }
}

const card = new LinkedList();

for (let i = 1; i <= input; i++) {
    card.add(i);
}

count = 1;
while (card.getSize() !== 1) {
    card.removeHead();
    card.add(card.getHead());
    card.removeHead();
    count++;
}

console.log(card.getHead());
