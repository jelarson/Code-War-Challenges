// https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript

function myFirstKata(a, b) {
  if (typeof(a) != "number" || typeof(b) != "number") {
    return false;
  } else {
    return a % b + b % a;
  }
}

var myFirstKata =(a, b)=> (+a===a && +b===b) ? (a%b + b%a) : !!0