// https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e/train/javascript

function squaresOnly(a) {
  return a.filter(x=>{
    return x == 0 || x**.5 % 1 == 0
  })
}

var squaresOnly = array => array.filter(number => Math.sqrt(number) % 1 === 0);
