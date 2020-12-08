// https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript

const sumSquareEvenRootOdd = ns => {
  return Math.round(ns.map(num=>{
    return num % 2 === 0 ? num**2 : num**.5
  }).reduce((a,b)=>a+b, 0)*100)/100
};

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))