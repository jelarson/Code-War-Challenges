// https://www.codewars.com/kata/56453a12fcee9a6c4700009c/train/javascript

function closeCompare(a, b, margin = 0){
  return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1
}

