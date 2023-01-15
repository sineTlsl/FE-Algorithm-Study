// const input = require('fs').readFileSync('2164/input.txt','utf8')
// const N = +input
// let i = 1;
// let arr = [];

// while(i<=N){ // N까지의 수를 담은 배열 생성
//     arr[i-1] = i;
//     i++
// }

// function solution(arr){ // 카드 버리고 최상단 밑으로 내리기
//     arr.shift();
//     arr.unshift(arr.pop());
// }

// while(arr.length !== 1){ // 카드가 한장 남을 때까지 반복
//     solution(arr);
// }
// console.log(arr)
// // 하지만 큐로 풀면 시간 초과

// 연결 리스트로 구ㄴ
const input = require('fs').readFileSync('DataStructure/JHJFE/2164/input.txt','utf8')
const N = +input



class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        
        this.head = init;
        this.tail = init;
        this.dataNum = 0;
    }

    length() {
        return this.dataNum;
    }

    append(data) {
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.dataNum += 1;
    }
    removeHead(){
        this.head = this.head.next;
        this.dataNum --;
    }
    HeadData(){
        return this.head.data;
    }



    toString() {
        let roNode = this.head;
        roNode = roNode.next;
        let s = '';
        for (let i = 0; i < this.dataNum; i++) {
            s += `${roNode.data}, `;
            roNode = roNode.next;
        }
        return s.slice(0, -2); // 마지막 콤마 제거
    }

    get fullData() {
        let roNode = this.head;
        roNode = roNode.next;
        let s = '';
        for (let i = 0; i < this.dataNum; i++) {
            s += `${roNode.data}, `;
            roNode = roNode.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`); // 마지막 콤마 제거
    }

    insert(index, data) { // 중간 삽입 기능
        let roNode = this.head;
        roNode = roNode.next;
        let s = '';
        for (let i = 0; i < index - 1; i++) {
            s += `${roNode.data}, `;
            roNode = roNode.next;
        }

        let newNode = new Node(data);

        newNode.next = roNode.next;
        roNode.next = newNode

        this.dataNum += 1;

    }
}

let a = new LinkedList();
let n = 1;
do{
    a.append(n);
    n++;
}while(n<=N)

a.removeHead();
a.dataNum ++;

while(a.dataNum !== 1){
    a.removeHead();
    a.append(a.HeadData());
    a.removeHead();
}

console.log(a.head.data);
