**"추가와 삭제가 반복되는 로직이라면 어떻게 해야할까?"**

**배열**을 이용하면 시간복잡도가 커지므로 요소 추가나 삭제가 반복되는 로직은 배열 사용을 권장하지 않는다. 배열은 탐색이 많을 때 유용한 도구이다.

그럴 때 적합하기 위해서 사용하는 것이 **연결리스트**다.

# 연결 리스트(Linked List)란?
`연결 리스트(Linked List)` 는 각 요소를 포인터로 연결하여 관리하는 선형 자료구조다. 각 요소는 노드라고 부르며 데이터 영역과 포인터 영역으로 구성된다.

![Linked List](https://velog.velcdn.com/images/tlsl13/post/e5293f89-2ab9-4485-a1bf-47dc8f36038a/image.png)

## 연결 리스트의 특징
- 메모리가 허용하는 한 요소를 제한없이 추가할 수 있다.
- 탐색은 O(n)이 소요된다.
- 요소를 추가하거나 제거할 때는 O(1)이 소요된다.
- Singly Linked List, Doubly Linked List, Circular Linked List가 존재한다.
<br>

## 배열과 연결리스트의 차이점
### ✔️ 메모리 차이
![메모리 차이](https://velog.velcdn.com/images/tlsl13/post/80c44b05-486e-4435-8174-517376a7c228/image.png)

배열은 순차적인 데이터가 들어가기 때문에 메모리를 계속해서 사용하고 있고, 연결리스트는 순차적이지 않기에 퍼져 있는 데이터들을 찾기 위해 포인터를 사용하여 각 영역을 참조하게 된다.
### ✔️ 요소 추가 및 삭제
#### 1) 배열 (Array)
![배열](https://velog.velcdn.com/images/tlsl13/post/acbdefc9-6d6a-4be7-905b-942193d8a1c4/image.png)

배열 요소를 삭제하거나 추가하기 위해서는 선형 시간이 소요된다. 메모리를 메꾸기 위해서는 앞으로 당기거나 뒤로 밀어야 한다.

#### 2) 연결 리스트 (Linked List)
![연결리스트](https://velog.velcdn.com/images/tlsl13/post/4e8bde91-15d4-47dd-91d5-33f17530a9d7/image.png)

1. 제일 먼저, 삭제(빨간색 영역)할 요소를 고른다.
2. 삭제할 요소의 이전 요소가 가르키는 포인터를 삭제할 요소의 다음 요소에 연결한다.
3. 삭제할 요소를 완전히 삭제한다.

<br>

## 1. 단일 연결 리스트 (Singly Linked List)
> Head에서 Tail까지 `단방향` 으로 이어지는 연결 리스트. 가장 단순한 형태인 연결 리스트다.

![Singly Linked List](https://velog.velcdn.com/images/tlsl13/post/a2af4f98-ae72-4be8-a636-19e2184c5df0/image.png)

- 각 노드 당 한 개의 포인터가 존재한다.
- 포인터는 다음 노드의 위치를 가르킨다.
- `Tail` 은 가장 마지막이므로 다음을 가리키는 포인터를 갖지 않는다.

### CODE
```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;
    // 맨 첫 번째 노드가 가르키는 값과 찾는 값이 일치하지 않다면,
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let prevNode = this.head;
      while (prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }

      if (prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
      }
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";

    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));

linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
```

## 2. 이중 연결 리스트 (Doubly Linked List)
> `양방향` 으로 이어지는 연결 리스트. Singly Linked List보다 자료구조의 크기가 조금 더 크다.

![Doubly Linked List](https://velog.velcdn.com/images/tlsl13/post/8895081d-57d9-43ef-83ef-f3288b51a554/image.png)

- 포인터를 두 개 가지고 있다.
- 이전 노드와 다음 노드를 가르킨다.

## 3. 원형 연결 리스트 (Circular Linked List)
> Singly 혹은 Doubly Linked List에서 Tail이 Head로 연결되는 연결 리스트. 메모리를 아껴쓸 수 있다. 원형 큐 등을 만들때도 사용된다.

![Circular Linked List](https://velog.velcdn.com/images/tlsl13/post/c7efaa5e-172f-4ff5-a7f6-85a856f5cc07/image.png)

- 단일 연결 리스트의 `Tail` 에 포인터가 추가된 형태다.
- `Tail` 의 포인터는 `Head` 를 가리킨다.

<br>

 ### 참조사이트
프로그래머스 코딩 테스트 광탈 방지 A to Z : JavaScript

[[Data Structure] 연결리스트에 대해 알아보자(Linked List)](https://fomaios.tistory.com/entry/DataStructure-%EC%97%B0%EA%B2%B0%EB%A6%AC%EC%8A%A4%ED%8A%B8%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90Linked-List)