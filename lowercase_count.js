// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript

function lowercaseCount(str){
  return str.match(/[a-z]/);
}

function lowercaseCount(str) {
  return (/[a-z]/.test(str)).length();
}