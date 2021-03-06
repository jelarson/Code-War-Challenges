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
  const hello = [...new Set(vals.sort(function(a,b){return a-b}).reverse())];
  
  hello.forEach(value => {
    const currentEval = []
    keys.forEach(key => {
      if (obj[key] === value){
        currentEval.push(Number(key))
      }
    })
    currentEval.sort(function(a,b){return a-b}).forEach(item => {
      for (let i = 0; i < value; i++){
        ans.push(item)
      }
    })
  })
  return ans
}

console.log(solve([2,3,5,3,7,9,5,3,7]))

// top answer

function solve(arr){
  var r={}
  for(var n of arr) r[n]=r[n]+1||1
  return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)
}

// ryan's solution

const solve = (arr) => arr.map((el, idx, orig) => [el, orig.reduce((total, next) => total + (next === el ? 1: 0), 0)]).sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]).reverse().map(el => el[0])

