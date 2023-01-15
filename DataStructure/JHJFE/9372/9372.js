const input = require('fs').readFileSync('DataStructure/JHJFE/9372/input.txt','utf8').trim().split('\n');
const testCase = +input[0];

let result = [];
let i =1;
let pos = i;

while(testCase >= i){
    
    let arr = input[pos].split(" ");
    let nodeNum =  +arr[0];// 노드 수 
    let edgeNum = +arr[1];// 간선 수

    result.push(nodeNum-1); // 노드 - 1 저장
    pos = pos + edgeNum + 1;
    i++
    
}

console.log(result.join('\n'));