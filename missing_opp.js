// https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript

function calcType(a, b, res) {
  return a + b === res ? 'addition' : a - b === res ? 'subtraction' : a * b === res ? 'multiplication' : 'division' 
}

console.log(calcType(1,2,3))