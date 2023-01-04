## 스택(Stack)이란?
`스택(Stack)` 은 데이터를 일시적으로 저장하기 위해 사용하는 자료구조다.

데이터의 입출력은 **후입선출(LIFO: Last In First Out)** 방식을 사용하고, 한 쪽 끝에서만 자료를 넣고 빼는 작업이 이루어진다.

### 1. Stack 구조
`스택(Stack)` 은 다음과 같은 구조로 나누어서 진행된다.
![Stack 구조](https://user-images.githubusercontent.com/97720335/210541810-04eaed20-69c6-4d1e-8de5-5bee40b8a2fc.jpeg)

`스택(Stack)` 은 top이 있는 위치에서만 데이터에 접근할 수 있다.
- **top()** — 스택의 맨 위에 있는 데이터 값 (현재 가리키고 있는 데이터)
- **pop()** — 데이터를 스택에서 빼내는 것
- **push()** — 데이터를 스택에 쌓는 것

### 2. Stack 활용 예시
1. 작업 실행 취소와 같은 역추적 작업이 필요할 때
2. 괄호 검사, 후위 연산법, 문자열 역순 출력 등

### 3. Stack 구현
JavaScript에서는 `Stack` 라이브러리를 지원해주지 않는다.

보통의 스택은 배열로 선언하고 push, pop 메서드를 사용하여 대체할 수 있다. 스택에서는 끝 부분의 인덱스만 사용하여 연산을 하기 때문에 Stack의 삽입과 삭제는 문제가 되지 않는다.

하지만, 배열로 구현하기 한계가 있다보니 간단한 예제가 아닌 이상 연결리스트로 구현하는 것이 좋다.

#### 연결리스트를 활용한 Stack Code
```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 데이터 삽입
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }
    return ++this.size;
  }

  // 데이터 삭제
  pop() {
    if (!this.first) return null;
    let tmp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return tmp.value;
  }

  // 데이터 출력
  print() {
    let current = this.first;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.print();

/**
2
1
0
*/
```

### 4. 정리
`Stack` 은 서로 관계가 있는 여러 작업을 연달아 수행하면서 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용된다.
- Stack은 데이터 구조의 이전 구현을 기반으로 한다.
- Stack은 `LIFO` 이다.
- 컴퓨터 과학 전반에 걸쳐 널리 사용된다.

<br>

### 참고사이트
[[자료구조] 스택(Stack)과 큐(Queue)에 대해서 알아보자!](https://jud00.tistory.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%8A%A4%ED%83%9DStack%EA%B3%BC-%ED%81%90Queue%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)

[[Javascript] Stack, Queue / Javascript Queue 구현해야 하는 이유](https://opensea.tistory.com/18)
