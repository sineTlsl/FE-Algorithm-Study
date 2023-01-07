## 큐(Queue)란?
`큐(Queue)` 는 스택과 마찬가지로 데이터를 일시적으로 저장하기 위해 사용하는 자료구조다.

한 쪽에서만 데이터의 삽입, 삭제가 이루어졌던 stack과 달리 큐는 `선입선출(FIFO: First In First Out)` 방식으로 **양쪽 끝에서 데이터의 삽입과 삭제가 각각 이루어진다.**

### 1. Queue의 구조
`큐(Queue)` 는 다음과 같은 구조로 나누어서 진행된다.

![Queue의 구조](https://user-images.githubusercontent.com/97720335/210543417-a58c5e58-1ce8-4fa3-bff3-3b081d5c7b13.jpeg)


- **Rear** - 데이터의 삽입 연산을 할 위치
- **Front** - 데이터의 삭제 연산을 할 위치
- **Enqueue** - 큐의 `rear` 에서 삽입 연산이 수행되는 기능
- **Dequeue** - 큐의 `front` 에서 삭제 연산이 수행되는 기능

### 2. Queue의 활용 예시
1. 은행 업무
2. 콜센터 고객 대기시간
3. 프로세스 관리

### 3. Queue의 구현
JavaScript에서는 `Queue` 라이브러리를 지원해주지 않는다.

큐를 배열로 구현하게 되면, push와 shift, unshift와 pop로 구현할 수 있다. 하지만, 이 두 가지 쌍 모두 한 쪽에서는 꺼내든 집어 넣든 인덱스를 다시 조정해야된다는 불편함이 있다. 

배열로 구현하기에는 인덱스 조정을 불필요하게 작성해줘야하므로, 연결리스트를 구현하는 걸 권장한다.

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  // 데이터 삽입
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  
  // 데이터 삭제
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
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

const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.print();

/**
1
2
3
4
*/
```

### 4. 정리
`Queue` 는 순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼(buffer)로서 많이 사용된다.
- Queue는 데이터 구조의 이전 구현을 기반으로 한다.
- Queue는 `FIFO` 이다.
- 컴퓨터 과학 전반에 걸쳐 널리 사용된다.

<br>

### 참고사이트
[[자료구조] 스택(Stack)과 큐(Queue)에 대해서 알아보자!](https://jud00.tistory.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%8A%A4%ED%83%9DStack%EA%B3%BC-%ED%81%90Queue%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)

[[Javascript] Stack, Queue / Javascript Queue 구현해야 하는 이유](https://opensea.tistory.com/18)