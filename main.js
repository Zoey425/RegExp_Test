const str = `
010-1234-5678
thezoe@zoelife.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'gi')
// console.log(str.match(regexp))


// 리터럴방식

// const regexp1 = /the/gi
// console.log(str.match(regexp1))

// const regexp = /fox/gi
// // console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)


// let regExp = /fox/gi
// str = str.replace(regExp, 'AAA')
// console.log(str)


// 플래그

// const regexp = /the/
// console.log(str.match(regexp))

console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gi))   // null
console.log(str.match(/\.$/gim)) 
// 정규 표현식에서 .(마침표) = 특정한 문자를 검색하는 일종의 패턴
// 만약 문자인 .(마침표)를 찾고 싶으면 \(백슬래시) 기호를 붙여준다
// 이를 '이스케이프 문자(Escape Character)' 인데 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말함.
// $(달러)는 마침표 뒤쪽에 붙여서, 달러사인 앞에 있는 하나의 단어로 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치 시킨다.


console.log(
  str.match(/d$/gm)
)


console.log(
  str.match(/^T/gm)
)

console.log(
  str.match(/./g)
)


console.log(
  str.match(/h..p/g)
)

console.log(
  str.match(/fox|dog/g)
)

console.log(
  str.match(/http?/g)
)


console.log(
  str.match(/d{2}/g)
)

console.log(
  str.match(/d{2,}/g)
)

console.log(
  str.match(/d{2,3}/g)
)


console.log(
  str.match(/\w{2,3}/g)
)
// '\w'숫자를 포함한 영어 알파벳을 의미
// 숫자를 포함한 영어 알파벳을 2번이상 3번 이하글자만 출력



console.log(str.match(/\b\w{2,3}\b/g))

console.log(str.match(/[fox]/g))

console.log(str.match(/[0-9]{1,}/g))


console.log(str.match(/[가-힣]{1,}/g))


console.log(str.match(/\w/g))
console.log(str.match(/\b/g))

console.log(str.match(/\bf\w{1,}/g))
//소문자 f를 찾는 모든 영단어 찾는 패턴


console.log(str.match(/\d{1,}/g))
console.log(str.match(/\s/g))

const h = `    the hello           world   !  `
console.log(h.replace(/\s/g, ''))


// ------------------
console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
