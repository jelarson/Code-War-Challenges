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

// top answers

// regex

const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

// filter

function solve(s){
  let upper = s.split('').filter(x => x === x.toUpperCase()).length
  let lower = s.length - upper
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
}

// reduce with regex

function solve(s){
  return [...s].reduce((t,c)=>t+/[a-z]/.test(c)*2,0)<s.length?s.toUpperCase():s.toLowerCase();
}

