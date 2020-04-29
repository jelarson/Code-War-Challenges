// Write a function, persistence, that takes in a positive
// parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits 
// in num until you reach a single digit.

//persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

var counter = 0
function persistence(num) {
  let emptyArray = []
  numArray = num.toString().split('')
  for (x of numArray) {
    emptyArray.push(Number(x))
  }
  result = emptyArray.reduce((a, b) => a * b, 1, counter++)
  if (result.toString().length === 1) {
    return counter
  } else {
    return persistence(result)
  }
}

console.log(persistence(51));
console.log(persistence(39));

function persistence1(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }

  return times;
}

console.log(persistence1(51));
console.log(persistence1(39));