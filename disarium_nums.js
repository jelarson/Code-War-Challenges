// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript

function disariumNumber(n){
  const numArr = [...String(n)]
  for(let i = 1; i <= numArr.length; i++){
    numArr[i-1] = numArr[i-1]**i
  }
  return numArr.reduce((a,b)=>a+b,0) === n ? "Disarium !!" : "Not !!"
}

console.log(disariumNumber(89))
console.log(disariumNumber(564))