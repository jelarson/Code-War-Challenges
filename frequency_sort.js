// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

function solve(arr){
  const obj = {}
  let currentCount = 0
  const alreadyCounted = []
  const ans = []
  arr.forEach(char => {
    if (!alreadyCounted.includes(char)){
      for (let i = 0; i < arr.length; i++){
        if (arr[i] === char){
          currentCount++
        }
      } 
      obj[char] = currentCount
    }
    currentCount = 0
  })
  const keys = Object.keys(obj)
  const vals = Object.values(obj)
  let currentHigh = Math.max(...vals)
  const currentEval = []

  keys.forEach(key => {
    if (obj[key] === currentHigh){
      currentEval.push(key)
    }
  })
  currentEval.sort().forEach(value => {
    for (let i = 0; i < currentHigh; i++){
      ans.push(Number(value))
      currentHigh = Math.max(...vals.slice(0, vals.indexOf(currentHigh)), ...vals.slice(vals.indexOf(currentHigh)+1))
    }
  })
  return ans
}

console.log(solve([2,3,5,3,7,9,5,3,7]))