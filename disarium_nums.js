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

// top answers

// similar logic - numArr can be left as a String, doesn't need to be arr to get idx

function disariumNumber(n){
  let number = n.toString();
  let sum = 0;
  
  for (let i=0; i<number.length; i++){
    sum += Math.pow(number[i], i+1);
  }
  
  return n === sum ? "Disarium !!" : "Not !!";
}

// sudo one-liner

const disariumNumber = n => `${n === n
  .toString()
  .split``
  .reduce((r, e, i) => r + e ** (i + 1), 0) ?
  'Disarium' : 
  'Not'} !!`;

// actual one liner with reducer

const disariumNumber = n =>
  [...`${n}`].reduce((pre, val, idx) => pre + val ** ++idx, 0) === n ? `Disarium !!` : `Not !!`;