# 📔 FE-Algorithm-Study

## 알고리즘 문제 사이트
**백준** https://www.acmicpc.net/problem/tags

## 커리큘럼
- 자료구조 (해시, 스택, 큐, 덱, 힙)
- 재귀, 정렬
- 다이나믹 프로그래밍 (DP)
- 그래프 (DFS/BFS)
- 최단경로
- 이분탐색
- 분할정복
- 그리디 
- 완전탐색
- 시뮬레이션
- 구현
- 문자열
- 투 포인터, 슬라이딩 윈도우
- 백트래킹

## 스터디 진행 방법
1. 매주 Pull Request 날린다.
2. 주 1회 Discord에서 문제풀이가 진행된다.
3. 코드에 관련된 내용은 Review로 진행한다.


## 규칙
#### 코드 첫 째줄에 다음과 같이 주석 달기
<code> // 걸린시간: 00:00:00 </code>

#### 폴더와 파일이름 저장 규칙
예를 들어, 이번 주차 커리큘럼이 자료구조라 가정하면, 
1. <code> DataStructure </code> 해당 알고리즘의 이름을 폴더명으로 지정하여 생성
2. 그리고 각자 branch명 폴더 생성 <br>
 <code> FE-Algorithm-Study/ DataStructure/branch명 </code> 
3. 개인 branch명 밑에 다음과 같은 파일을 생성. 문제번호는 백준에서 제공하는 번호를 뜻함
<img width="243" alt="규칙" src="https://user-images.githubusercontent.com/97720335/210087877-c2a51849-874d-4107-9aec-a89791b5b617.png">

<br>

## Git 저장소 이용 방법

#### 원격저장소 로컬에 가져오기
<code> git clone https://github.com/sineTlsl/FE-Algorithm-Study.git </code>

#### 로컬에서 branch 생성하기
각자 깃허브 이름으로 branch 생성
<code> git branch 깃허브이름 </code>

#### 로컬에서 작업 후 개인 branch Push
1. <code> git checkout 깃허브이름 </code>
2. <code> git add 파일/디렉토리 경로 </code>
3. <code> git commit -m "message" </code>
4. <code> git push origin 깃허브이름" </code>

#### Merge된 후, Repository 최신으로 동기화하기
1. <code> git remote add upstream 원본저장소URL </code>
2. <code> git remote -v </code>
3. <code> git fetch upstream </code>
4. <code> git checkout main </code>
5. <code> git merge upstream/main </code>
6. <code> git push origin main </code>