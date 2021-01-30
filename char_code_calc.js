// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

function calc(x){
  const num1 = x.split('').map(c=>c.charCodeAt(0)).join('')
  const num2 = num1.split('').map(c=>c == '7' ? '1' : c).join('')
  return Number(num1.split('').reduce((a,b)=>a+b,0)) - Number(num2.split('').reduce((a,b)=>a+b,0))
}

console.log(calc('ABC'))