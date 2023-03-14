// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str,c){
  return str.indexOf(c) >= 0 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}