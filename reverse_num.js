// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

function reverseNumber(n) {
  let neg = n < 0
  const num = Number(String(Math.abs(n)).split('').reverse().join(''))
  return neg ? num * -1 : num;
}

console.log(reverseNumber(123))
console.log(reverseNumber(-123))
console.log(reverseNumber(1000))