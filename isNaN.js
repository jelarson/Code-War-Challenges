// https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

function isDigit(s) {
  return !isNaN(Number(s))
}

function isDigit(s) {
  return s==parseFloat(s);
 }

 const isDigit = str => !!str.trim() && !isNaN(str);