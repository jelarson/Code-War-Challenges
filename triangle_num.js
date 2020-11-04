// https://www.codewars.com/kata/557e8a141ca1f4caa70000a6/train/javascript

function isTriangleNumber(number) {
  let num = 1
  let ans = false
  for (let i = 1; i <= number; i+=num){
    if (i === number){
      ans = true
    }
    num++
  }
  return ans
}

console.log(isTriangleNumber(3))
console.log(isTriangleNumber(5))
console.log(isTriangleNumber('hello'))
console.log(isTriangleNumber(9))
console.log(isTriangleNumber(10))