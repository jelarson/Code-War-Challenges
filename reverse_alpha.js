// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
  let res = str.replace(/[^a-zA-Z]+/g, '')
  
  return res.split('').reverse().join('')
}

console.log(reverseLetter('ultr53o?n'))
console.log(reverseLetter('abc123'))