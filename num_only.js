// https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript

function getNumberFromString(s) {
  return Number(s.match(/\d+/g).join(''))
}