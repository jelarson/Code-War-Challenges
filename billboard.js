// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

function billboard(name, price = 30){
  let total = 0
  for(let i = 0; i < name.length; i++){
    total += price
  }
  return total
} 