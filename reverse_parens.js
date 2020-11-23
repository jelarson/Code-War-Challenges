// https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040/train/javascript

function solve(s){
  if (s.length %2 !== 0){
    return -1
  }
  let ans = 0
  let open = 0
  s.split('').forEach(char => {
    if (char === '('){
      open++
    }
    if (char === ')'){
      if (open > 0){
        open--
      } else {
        ans++
        open++
      }
    }
  })
  return ans + open/2
}

console.log(solve('())()))))()()('))