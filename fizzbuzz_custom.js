// https://www.codewars.com/kata/5355a811a93a501adf000ab7/train/javascript

var fizzBuzzCustom = function(stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) {
  let ans = []
  for (let i = 1; i < 101; i++) {
    if (i%(numOne*numTwo)==0){
      ans.push(stringOne+stringTwo)
    }
    else if (i%numOne == 0) {
      ans.push(stringOne)
    }
    else if (i%numTwo == 0) {
      ans.push(stringTwo)
    } else {
      ans.push(i)
    }
  }
  return ans
};