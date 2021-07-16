// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

function dutyFree(normPrice, discount, hol){
  const dutyPrice = normPrice - (normPrice * (1 - discount/100))
  return Math.floor(hol/dutyPrice)
}

// top answer

function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
}

// rounding with zero exponent
const dutyFree = (normPrice, discount, hol) =>
  hol / (normPrice * discount / 100) ^ 0;