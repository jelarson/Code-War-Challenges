// https://www.codewars.com/kata/55f73f66d160f1f1db000059/train/javascript

function combineNames(a,b) {
  return a + ' ' + b
}
const combineNames = (...names) => names.join(' ');