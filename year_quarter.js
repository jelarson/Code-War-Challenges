// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month) => {
  return month % 3 == 0 ? month/3 : Math.floor(month/3) + 1
}

console.log(quarterOf(6))
console.log(quarterOf(2))
console.log(quarterOf(11))