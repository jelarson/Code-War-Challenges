// https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript

function isToday(date) {
  return new Date().toLocaleDateString("en-US") == date.toLocaleDateString("en-US")
}