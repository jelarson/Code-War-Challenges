// https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript

function getDecimal(n){
  return n%1 == 0 ? 0 : Number('0.'+String(n).split('.')[1])
}

console.log(getDecimal(-2.4))
console.log(getDecimal(3.8))