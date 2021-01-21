// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

function maxMultiple(divisor, bound){
  for(let i=0; i < divisor; i++){
    if((bound - i) % divisor == 0)return bound - i
  }
}

console.log(maxMultiple(7,100))