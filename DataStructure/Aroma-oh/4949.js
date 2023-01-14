'use.strict';
const { count } = require('console');
var fs = require('fs'); 
const input = fs.readFileSync('backjoon/4949.txt').toString().trim().split('\n');


const open = ['(', '['];
const close = [')', ']'];
const result = [];

for (let i = 0; i < input.length-1; i++) {
    const stack = [];
    let isNo = false;

    for (let j = 0; j < input[i].length; j++){
        if (open.includes(input[i][j])) stack.push(input[i][j]); 
        else if (close.includes(input[i][j])) {
            if (stack.pop() !== open[close.indexOf(input[i][j])]){
                isNo = true;
                result.push('no');
                break;
            }
        }
    } 
    if(!isNo){
        if(stack.length === 0) result.push('yes');
        else result.push('no');
    }
}

console.log(result.join('\n'));
