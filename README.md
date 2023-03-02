# 정규표현식 (RegExp)
정규식, Regular Expression 표현식이란 문자열을 검색하고 대체하는데 사용가능한 일종의 형식 언어(패턴)
간단한 문자검색부터 이메일, 패스워드, 검사 등의 복잡한 문자 일치 기능 등을 정규식 패턴으로 빠르게 수행 가능

## 역할
- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

### 테스트 사이트

http://regexr.com/


## 정규식 생성

```js

//생성자
// new라는 키워드와 함께 전역객체로 RegExp 객체 제공 후 생성자 함수로 호출
// 첫번째 인수는 특정한 표현의 패턴, 두번째는 어떤 방식으로 검색할 것인지에 대한 옵션을 추가

new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')


// 리터럴
// 패턴부분을 // (슬래시기호)로 감싸서 표현하고 옵션은 슬래시뒤에 명시
/표현/옵션
/[a-z]/gi

```


## 예제 문자

```js
const str = `
010-1234-5678
thezoe@zoelife.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```


## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array)반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global) = 전체영역
i | 영어 대소문자를 구분하지 않고 일치(ignore case)
m | 여러 줄 일치(multi line) = 각각의 줄을 시작과 끝으로 확인

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣사이의 문자 구간에 일치(한글)
\w  | 63개 문자(Word, 대소영문52개 + 숫자 10개 + _)에 일치
\b  | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d  | 숫자(Digit)에 일치
\s  | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)