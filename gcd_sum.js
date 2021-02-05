// https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/javascript

function solve(s,g){
  for(let i = g; i <= s - g; i+=g){
    if (g + i === s){
      return [g,i]
    }
  }
  return -1
}

console.log(solve(8,2))

