// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

function rowWeights(array){
  let num1 = 0
  let num2 = 0
  for(let i = 0; i < array.length; i++){
    i % 2 === 0 ? num1+=array[i] : num2+=array[i]
  }
  return [num1, num2]
}

console.log(rowWeights([50,60,70,80]))