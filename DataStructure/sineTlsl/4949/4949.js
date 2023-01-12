// 걸린 시간: 34:12:01
const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

console.log(solution(input));

function solution(input) {
  let result = [];
  input.forEach(el => {
    let isBoolean = true;
    let stack = [];

    if (el !== ".") {
      for (let i = 0; i < el.length; i++) {
        if (el[i] === "[" || el[i] === "(") { stack.push(el[i]); }
        else if (el[i] === "]") {
          stack[stack.length-1] === "[" ? stack.pop() : isBoolean = false;
        } else if (el[i] === ")") {
          stack[stack.length-1] === "(" ? stack.pop() : isBoolean = false;
        }
      }
      stack.length > 0 || !isBoolean ? result.push("no") : result.push("yes"); 
    } 
  });

  return result.join("\n");
}