# 해시 테이블(Hash Table)이란?
> `해시 테이블(Hash Table)` 이란 키와 값을 받아 해싱(Hashing)하여 나온 index에 값을 저장하는 선형 자료구조다.

![Hash Table](https://velog.velcdn.com/images/tlsl13/post/c43a6aff-b40c-498e-800a-335e455955de/image.png)

삽입은 O(1)이며 키를 알고 있다면, 삭제 탐색도 O(1)로 수행한다.

**해시 함수**
- `해시 함수` 는 입력 받은 값을 특정 범위 내 숫자로 변경하는 함수다.
- 특정한 구현 방법이 없다.
- 우리 마음대로 구현해서 사용하면 된다.

## 해시 충돌(Hash Collision)
해시 함수를 이용한 해시 테이블의 문제점은 해시 함수의 결과가 동일할 수 있는 것인데, 이 문제를 `해시 충돌(Hash Collision)` 이라고 부른다.

해시 충돌을 해결하기 위한 대표적인 4가지 방법이 있다. 

### 1. 선형 탐사법
`선형 탐사법` 은 충돌이 발생하면 옆으로 한 칸 이동한다. 굉장히 단순한 방법이다.

![선형 탐사법](https://velog.velcdn.com/images/tlsl13/post/b1c4c690-40ae-4f3b-95e4-075428fd5520/image.png)

#### [단점]
- 특정영역에 데이터가 몰릴 수 있다.
- 이동한 버킷에서 충돌이 발생한다면, 충돌이 발생하지 않을 때까지 이동한다.
- 최악의 경우, 이름 그대로 선형 시간이 걸릴 수 있다.

### 2. 제곱 탐사법
`제곱 탐사법` 은 충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.

![제곱 탐사법](https://velog.velcdn.com/images/tlsl13/post/1587ddb9-d4ce-4c83-8c1b-a0392c392cfe/image.png)

특정영역에 데이터가 몰리지 않기 위해 사용한다.

### 3. 이중 해싱
`이중 해싱` 은 충돌이 발생하면 다른 해시 함수를 이용한다.

![이중 해싱](https://velog.velcdn.com/images/tlsl13/post/8d45c02f-9111-4f69-9ece-cdf4f033d91e/image.png)

충돌이 발생하면, 충돌이 발생하지 않을 때까지 두 번째 해시로 인덱스를 계속해서 만들어간다.

### 4. 분리 연결법
`분리 연결법` 은 버킷의 값을 연결 리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가한다.

![분리 연결법](https://velog.velcdn.com/images/tlsl13/post/68132d91-12d0-4898-bb9a-70fcb50fa80a/image.png)

- 다른 방법과 다르게 충돌이 발생할 경우, 다음 인덱스로 넘어가지 않는다.
- 해시테이블의 요소를 연결리스트로 만들어 충돌이 발생한 버킷에 값을 추가한다.

## 해시테이블 활용 
우리가 학생정보를 관리하는 소프트웨어를 만든다고 가정할 때, 어떻게 만들어야 빠르게 기록하고 찾을 수 있을 지 생각해본다.

`연결 리스트` 를 사용하면 학생을 추가/제거 할 때는 빠르지만, 찾을 때 많은 시간이 걸린다. `배열` 을 이용할 경우에 인덱스를 모를 경우에는 모두 찾아봐야하기 때문에 많은 시간이 걸린다.

이럴 때 `해시 테이블` 을 사용하는 것이 유리하다. 이름을 키로하여 탐색과 삽입/삭제 시간이 비교적 빠르다. 

## JavaScript Hash Table 사용법
### Array 
```jsx
const table = [];
table['key'] = 100;
table['ley2'] = 'Hello';
console.log(table['key']);  // 100
table['key'] = 349;
console.log(table['key']);  // 349
delete table['key'];
console.log(table['key']);  // undefined
```
- Array은 실제로는 객체 타입이기 때문에 Hash Table로 사용할 수 있다.
- 하지만, 이 방법은 올바른 내용이 아니라 추천하지는 않는다.

### Object 
```jsx
const table = {};
table['key'] = 100;
table['ley2'] = 'Hello';
console.log(table['key']);  // 100
table['key'] = 349;
console.log(table['key']);  // 349
delete table['key'];
console.log(table['key']);  // undefined
```
- 제일 간단한 방법이다.

### Map
```jsx
const table = new Map();
table.set('key', 100);
table.set('key2', 'Hello');
console.log(table['key']);  // undefined
console.log(table.get('key'));  // 100

const object = { a: 1 };
table.set(object, 'A1');  // Map은 Object도 key로 쓸 수 있다.
console.log(table.get(object));  // A1
table.delete(object);
console.log(table.get(object));  // undefined
console.log(table.keys());  // { 'key', 'key2' }
console.log(table.keys());  // { 100, 'Hello' }

table.clear();
console.log(table.values());  // { }
```
- Map은 `set()` 함수를 이용하여 값을 넣고, `get()` 함수로 값을 찾을 수 있다.
- 기존 객체와는 다르게 object나 array 같은 복잡한 타입도 key로 사용할 수 있다.
- 객체의 경우에 들어오는 값이 정수가 아니면 문자열로 처리된다.
- 다양한 타입을 넣을 경우 유리하다.
- 여러 편한 메소드를 제공해주고, 순회를 손쉽게 할 수 있다.

### Set
```jsx
const table = new Set();
table.add('key');  // key와 value가 동일하게 들어간다.
table.add('key2');
console.log(table.has('key'));  // true
console.log(table.has('key3'));  // false
table.delete('key2');
console.log(table.has('key2'));  // false
table.add('key3');
console.log(table.size);  // 2

table.clear();
console.log(table.size);  // 0
```
- Set은 key와 value가 동일하게 저장한다.
- 일종의 집합 연산이라고 볼 수 있다. => (중복된 내용을 제거할 때 사용)
<br>

### 참고사이트
프로그래머스 코딩 테스트 광탈 방지 A to Z : JavaScript

[[DS] 해쉬 테이블(Hash Table)이란?
](https://baeharam.netlify.app/posts/data%20structure/hash-table)