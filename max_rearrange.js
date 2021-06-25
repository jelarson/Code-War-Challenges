// https://www.codewars.com/kata/563700da1ac8be8f1e0000dc/train/javascript

var maxRedigit = function(num) {
  return String(num).length == 3 ? Number(String(num).split('').sort((a,b)=>b-a).join('')) : null
};