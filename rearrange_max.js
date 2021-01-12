// https://www.codewars.com/kata/579fa665bb9944f9340005d2/train/javascript

const rotateToMax = n => {
  return Number(String(n).split('').sort((a,b)=>b-a).join(''))
}

console.log(rotateToMax('001'))
console.log(rotateToMax(786))