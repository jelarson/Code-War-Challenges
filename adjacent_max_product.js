// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

function adjacentElementsProduct(array) {
  return Math.max(...array.map((num, idx)=> idx < array.length -1 ? num * array[idx+1] : null).filter(x=> x || x === 0))
}

console.log(adjacentElementsProduct([4, 12, 3, 1, 5]))
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]))