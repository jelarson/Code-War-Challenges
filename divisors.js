// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

function divisibleBy(numbers, divisor){
  return numbers.filter(x=>x%divisor == 0)
}