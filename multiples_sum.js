// If we list all the natural numbers below 10 that are 
// multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
// these multiples is 23.

// Finish the solution so that it returns the sum of all
// the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only
// count it once.

function solution(number) {
  if (number < 3) {
    return 0
  }
  let multiples = []
  let range = [...Array(number).keys()]
  range.forEach(num => {
    if (num % 3 === 0 || num % 5 === 0) {
      multiples.push(num)
    }
  })

  return multiples.reduce((a, b) => a + b, 0)
}

console.log(solution(10))

// ryans solution
function solution1(number) {
  const arr = []
  for (i = 1; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) arr.push(i)
  }
  return arr.reduce((x, y) => x + y, 0)
}

console.log(solution1(10))

// top solution
function solution2(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}

console.log(solution2(10))
