// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers){
  const newArr = numbers.map(num => {
    return num ** 2
  })
  return newArr.reduce(function(a, b){return a + b;}, 0);
}

// top answer

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}