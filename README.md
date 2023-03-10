# ๐ FE-Algorithm-Study

## ์๊ณ ๋ฆฌ์ฆ ๋ฌธ์  ์ฌ์ดํธ
**๋ฐฑ์ค** https://www.acmicpc.net/problem/tags

## ์ปค๋ฆฌํ๋ผ
- ์๋ฃ๊ตฌ์กฐ (์คํ, ํ, ์ฐ๊ฒฐ๋ฆฌ์คํธ, ๊ทธ๋ํ, ํธ๋ฆฌ, ํ, ํด์ํ์ด๋ธ)
- ๊ทธ๋ํ (DFS/BFS)
- ์๋ฎฌ๋ ์ด์
- ๊ตฌํ
- ๋ฌธ์์ด
- ์์ ํ์
- ์ฌ๊ท, ์ ๋ ฌ

**[๊ณ ๋ฏผ์ค]**
- ์ต๋จ๊ฒฝ๋ก
- ์ด๋ถํ์
- ๋ถํ ์ ๋ณต
- ๊ทธ๋ฆฌ๋
- ๋ค์ด๋๋ฏน ํ๋ก๊ทธ๋๋ฐ (DP)
- ํฌ ํฌ์ธํฐ, ์ฌ๋ผ์ด๋ฉ ์๋์ฐ
- ๋ฐฑํธ๋ํน

## ์คํฐ๋ ์งํ ๋ฐฉ๋ฒ
1. ๋งค์ฃผ Pull Request ๋ ๋ฆฐ๋ค.
2. ์ฃผ 1ํ Discord์์ ๋ฌธ์ ํ์ด๊ฐ ์งํ๋๋ค.
3. ์ฝ๋์ ๊ด๋ จ๋ ๋ด์ฉ์ Review๋ก ์งํํ๋ค.


## ๊ท์น
#### ์ฝ๋ ์ฒซ ์งธ์ค์ ๋ค์๊ณผ ๊ฐ์ด ์ฃผ์ ๋ฌ๊ธฐ
<code> // ๊ฑธ๋ฆฐ์๊ฐ: 00:00:00 </code>

#### ํด๋์ ํ์ผ์ด๋ฆ ์ ์ฅ ๊ท์น
์๋ฅผ ๋ค์ด, ์ด๋ฒ ์ฃผ์ฐจ ์ปค๋ฆฌํ๋ผ์ด ์๋ฃ๊ตฌ์กฐ๋ผ ๊ฐ์ ํ๋ฉด, 
1. <code> DataStructure </code> ํด๋น ์๊ณ ๋ฆฌ์ฆ์ ์ด๋ฆ์ ํด๋๋ช์ผ๋ก ์ง์ ํ์ฌ ์์ฑ
2. ๊ทธ๋ฆฌ๊ณ  ๊ฐ์ branch๋ช ํด๋ ์์ฑ <br>
 <code> FE-Algorithm-Study/ DataStructure/branch๋ช </code> 
3. ๊ฐ์ธ branch๋ช ๋ฐ์ ๋ค์๊ณผ ๊ฐ์ ํ์ผ์ ์์ฑ. ๋ฌธ์ ๋ฒํธ๋ ๋ฐฑ์ค์์ ์ ๊ณตํ๋ ๋ฒํธ๋ฅผ ๋ปํจ
<img width="243" alt="๊ท์น" src="https://user-images.githubusercontent.com/97720335/210087877-c2a51849-874d-4107-9aec-a89791b5b617.png">

<br>

## Git ์ ์ฅ์ ์ด์ฉ ๋ฐฉ๋ฒ

#### ์๊ฒฉ์ ์ฅ์ ๋ก์ปฌ์ ๊ฐ์ ธ์ค๊ธฐ
<code> git clone https://github.com/sineTlsl/FE-Algorithm-Study.git </code>

#### ๋ก์ปฌ์์ branch ์์ฑํ๊ธฐ
๊ฐ์ ๊นํ๋ธ ์ด๋ฆ์ผ๋ก branch ์์ฑ
<code> git branch ๊นํ๋ธ์ด๋ฆ </code>

#### ๋ก์ปฌ์์ ์์ ํ ๊ฐ์ธ branch Push
1. <code> git checkout ๊นํ๋ธ์ด๋ฆ </code>
2. <code> git add ํ์ผ/๋๋ ํ ๋ฆฌ ๊ฒฝ๋ก </code>
3. <code> git commit -m "message" </code>
4. <code> git push origin ๊นํ๋ธ์ด๋ฆ" </code>

#### Merge๋ ํ, Repository ์ต์ ์ผ๋ก ๋๊ธฐํํ๊ธฐ
1. <code> git remote add upstream ์๋ณธ์ ์ฅ์URL </code>
2. <code> git remote -v </code>
3. <code> git fetch upstream </code>
4. <code> git checkout main </code>
5. <code> git merge upstream/main </code>
6. <code> git push origin main </code>
