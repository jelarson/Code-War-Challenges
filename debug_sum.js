// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

function getSumOfDigits(integer) {
  return Number(String(integer).split('').reduce((a,b)=>Number(a) + Number(b)))
}

function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum += digits[ix + 1];
  }
  return sum;
}