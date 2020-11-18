// https://www.codewars.com/kata/5a55f04be6be383a50000187/train/javascript

function specialNumber(n){
  const str = String(n)
  for(let i = 0; i < str.length; i++){
    if (str[i] > 5){
      return "NOT!!"
    }
  }
  return "Special!!"
}

console.log(specialNumber(2))
console.log(specialNumber(3))
console.log(specialNumber(6))
console.log(specialNumber(55))
console.log(specialNumber(75))