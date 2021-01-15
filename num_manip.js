// https://www.codewars.com/kata/5890579a34a7d44f3b00009e/train/javascript

function manipulate(num) {
  const mid = Math.floor(String(num).length/2) 
  return [...String(num)].map((x,idx)=>{
    return idx >= mid ? 0 : x
  }).join('')
} 

console.log(manipulate(192827764920))