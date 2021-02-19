// https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript

function averages(numbers) {
  const ans = []
  for(i=1; i < numbers.length; i++){
    ans.push((numbers[i]+numbers[i-1])/2)
  }
  return ans
}

console.log(averages([1, 3, 5, 1, -10]))