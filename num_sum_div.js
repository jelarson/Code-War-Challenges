// https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript

function divisibleByThree(str){
  const sum = str.split('').reduce((a,b)=>Number(a)+Number(b),0)
  return sum%3 === 0
}

console.log(divisibleByThree('123'))

function divisibleByThree(str){
  return [...str].reduce((s,d)=>+d+s,0)%3===0;
}

