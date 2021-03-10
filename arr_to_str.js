// https://www.codewars.com/kata/59a602dc57019008d900004e/train/javascript

function transform(array) {
  return array.map(x=>String(x)).join('')
}

console.log(transform(["BmX", false, 784]))