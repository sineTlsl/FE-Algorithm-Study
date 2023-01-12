// 걸린 시간: 01:10:01
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;

    return node;
  }
  getHead() {
    return this.head.val;
  }
  pop() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }
  getLength() {
    return this.length;
  }
}

let n = Number(input);

const cards = new LinkedList();
for (let i = 1; i <= n; i++) { cards.push(i); }

while(cards.getLength() !== 1) {
  cards.pop();
  cards.push(cards.getHead());
  cards.pop();
}
console.log(cards.getHead());