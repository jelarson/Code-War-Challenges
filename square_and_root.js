// https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript

const sumSquareEvenRootOdd = ns => {
  return Math.round(ns.map(num=>{
    return num % 2 === 0 ? num**2 : num**.5
  }).reduce((a,b)=>a+b, 0)*100)/100
};

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))

// top answers

// one liner with single reducer

const sumSquareEvenRootOdd = ns => {
  return +(ns.reduce((a, b) => a + (b % 2 ? b ** 0.5 : b ** 2), 0)).toFixed(2)
};

// tofixed(2) must round to two decimals

const sumSquareEvenRootOdd = ns => {
  // your code goes here
  let tempNum = ns.map(element => {
    return (element % 2 == 0 ? element * element : Math.sqrt(element));
  })
  
  let sum = tempNum.reduce((a, b) => a + b, 0);
  
  return sum.toFixed(2)*1;
};

// for loop

const sumSquareEvenRootOdd = ns => { 
  var lista = [], somma = 0;
  
  for(i=0;i<ns.length;i++){
    if(ns[i] % 2 == 0){
      somma += ns[i]**2;
    } else {
      somma += Math.sqrt(ns[i]);
    }
  }

  somma = Math.round(somma*100)/100;
  return somma;
};