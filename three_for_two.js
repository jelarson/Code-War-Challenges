// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

function mango(quantity, price){
  return quantity / 3 * 2 * price
}

// top answer
function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}