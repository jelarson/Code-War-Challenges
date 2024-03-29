// https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

// can't use Math.pow()
function numberToPower(number, power){
  return Math.pow(number, power)
}

// can't use **
function numberToPower(number, power){
  return number ** power;
}

// array fill
function numberToPower(number, power){
  return Array(power).fill(number).reduce((a,b)=>a*b,1)
}