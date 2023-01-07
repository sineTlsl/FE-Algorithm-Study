# 트리(Tree)란?
> `트리(Tree)` 는 방향 그래프의 일종으로 정점을 가리키는 간선이 하나밖에 없는 구조를 가지고 있다.

![트리(Tree)](https://velog.velcdn.com/images/tlsl13/post/109e8ecb-72f5-4055-ad1f-c5481cd72c74/image.png)

하나의 루트에서 하위로 뻗어나가는 구조다.

## 용어
**Root**
가장 상위에 존재하는 정점이다.

**Node**
각 정점을 의미한다.

**Leaf Node**
더 이상 자식이 없는 정점을 의미한다.

**Level**
root로부터 몇 번째의 깊이인지를 표현한다.

**Degree(차수)**
한 정점에서 뻗어나가는 간선 수를 뜻한다.

## 트리의 특징
- 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다. 
- 정점이 $N$개인 트리는 반드시 $N-1$개의 간선을 가진다.
- 루트에서 특정 정점으로 가는 경로는 유일하다.

## 이진 트리
> `이진 트리` 는 각 정점이 최대 2개인 자식을 가지는 트리를 의미한다.

![이진 트리](https://velog.velcdn.com/images/tlsl13/post/89c64145-16ca-44ae-9f36-80bdc4af942a/image.png)

### 이진 트리의 특징
- 정점이 $N$개인 이진 트리는 최악의 경우 높이가 $N$이 될 수 있다.
- 정점이 $N$개인 포화 또는 완전 이진 트리의 높이는 $log N$이다. 
- 높이가 $h$인 포화 이진 트리는 $2^h-1$ 개의 정점을 가진다.
- 일반적으로 이진 트리를 사용하는 경우는 많지 않다. 
    - `이진 탐색 트리`, `힙`, `AVL 트리`, `레드 블랙 트리` 와 같은 자료구조에 응용된다.

## JavaScript 트리 사용법
트리의 구현 방법도 그래프와 마찬가지로 **인접 행렬**, **인접 리스트** 두 가지 방식으로 트리를 표현할 수 있다. 

이진 트리의 경우에는 자식이 2개 이하로 제한되는 특징 때문에 조금 더 최적화된 방식으로 구현이 가능하다. 1차원 배열 혹은 링크가 2개가 존재하는 **연결 리스트**로 구현이 가능하다.

- `인접 행렬` 은 이차원 배열을 이용할 수 있다.
- `인접 리스트` 는 연결 리스트로 표현이 가능하다.

![이진 트리](https://velog.velcdn.com/images/tlsl13/post/392c1d83-0e8e-42cb-9699-e8a6d987c2d1/image.png)

위에 보이는 사진처럼 이진트리를 각각의 코드로 작성하면 다음과 같다.

### 인접 행렬
```jsx
// 0번 인덱스는 편의를 위해 비워둔다.
// Left 정점 = Index * 2
// Right 정점 = Index * 2 + 1
// Parent 정점 = floor(Index / 2).  // Index를 2로 나누고 소수점을 버림
const tree = [
  undefined,
  // 1
  9,
  // 1*2, 1*2+1
  3, 8,
  // 2*2, 2*2+1, 3*2+1
  2, 5, undefined, 7,
  // 4*2, 4*2+1, 5*2, 5*2+1
  undefined, undefined, undefined, 4
];
```

### 인접 리스트
```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value)
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
console.log(tree.display());
```

## 트리 활용
대표적으로 트리를 활용한 것은 **조직도**와 **디렉터리 구조**가 있다.

![Finder&조직도](https://velog.velcdn.com/images/tlsl13/post/91ce1384-18b0-4a8a-b0a0-c4395241461c/image.png)

<br>

### 참고사이트
프로그래머스 코딩 테스트 광탈 방지 A to Z : JavaScript