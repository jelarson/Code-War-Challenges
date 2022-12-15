// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript

function createArray(number){
  var newArray = [];
  
  for(let counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

const createArray = n => Array(...Array(n)).map((v, i) => i + 1);