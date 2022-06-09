// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
  return array.map(x=>{
    return x**.5 % 1 > 0 ? x**2 : x**.5
  });  
}