// https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

function parseF(s) {
  return typeof s == 'boolean' || isNaN(Number(s)) ? null : Number(s);
}