// 걸린 시간 00:30:00
//스택
const fs = require('fs');
const line = require('fs').readFileSync('DataStructure/10828/input.txt','utf8')
const input = line.trim().split('\n');// 줄바꿈 기준으로 분리해 1줄씩 분리해서 담기
const testCaseNum  = +input[0]; // 테스트케이스 개수
let result = []; // 작업할 스택 공간
let output = []; // 출력을 담을 공간
for(let i = 1 ;i<=testCaseNum;i++){ // 테스트 케이스 진행

    const arr = input[i].split(' '); // 동작과 value 구분
    if(arr[1]){
    arr[1] = +arr[1]; // value String -> Number로 변환
    }

    output.push(solution(arr,testCaseNum));
    if(arr[0] === "push"){// push 결과 제거
        output.pop();
    }
}

function solution(arr, testCaseNum){ //문제 요구 사항 참조 구현
    let Do = arr[0]
    if( Do ==='push'){
        return result.push(arr[1]);
    }else if(Do === 'pop'){
        return result.length === 0 ? -1 : result.pop();
    }else if(Do === 'top'){
        return result.length === 0 ? -1 : result[result.length-1];
    }else if(Do === 'size'){
        return result.length;
    }else if(Do === 'empty'){
        return  result.length === 0 ? 1:0
    }
}
console.log(output.join('\n')); // 개행해서 출력