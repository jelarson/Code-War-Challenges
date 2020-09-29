// https://www.codewars.com/kata/5edc8c53d7cede0032eb6029/train/javascript

function solve(n){
  let ans = -1
  for (let i = 1; i < n; i++){
    const sum = (i * i) + n
    if (Math.sqrt(sum) % 1 === 0){
      ans = i * i
      break
    }
  }
  return ans
}

console.log(solve(13))