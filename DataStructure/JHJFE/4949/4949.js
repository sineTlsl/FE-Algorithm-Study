
const input = require('fs').readFileSync('DataStructure/JHJFE/4949/input.txt','utf8').trim().split('\n');
const result = [];


for(let i =0; i < input.length-1;i++){

    let arr = input[i];
    solution(arr) ? result.push('yes') : result.push('no')  ;
}

function solution(arr){
  
    let line = arr.split('');
    let expect = []; // 1이면 중괄호, 2면 대괄호가 와야함


    while(line.length !== 0){
        let str = line.pop();

        switch(str){
            case '(' : 
            if(expect.pop() !== 1) {return false;}
            
            break;

            case ')' : 
            
            expect.push(1);

            break;

            case '[' : 
            if(expect.pop() !== 2) {return false;}
          
            break;

            case ']' : 
            
            expect.push(2);

            break;
        }
    }
    
    return expect.length === 0
    
}

console.log(result.join('\n'));