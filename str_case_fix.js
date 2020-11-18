// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s){
  let upperCount = 0
  let lowerCount = 0
  s.split('').forEach(letter=>{
    letter.toLowerCase() === letter ? lowerCount++ : upperCount++
  })
  return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve('code'))
console.log(solve('coDe'))
console.log(solve('cODe'))
console.log(solve('CODe'))