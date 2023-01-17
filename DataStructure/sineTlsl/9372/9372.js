// 걸린 시간: 00:45:10
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

console.log(solution(input));

function solution(input) {
  let number = Number(input[0]);
  let a, b = [];
  let result = [];
  let idx = 1;
  
  for (let i = 0; i < number; i++) {
    let [countryNum, planeNum] = input[idx++].split(" ").map(Number);
    for (let j = 0; j < planeNum; j++) {
      [a, b] = input[idx++].split(" ").map(Number);
      result[i] = countryNum - 1;
    }
  }
  return result.join('\n');
}


