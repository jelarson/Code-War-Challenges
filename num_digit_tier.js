// https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/javascript

function createArrayOfTiers(num) {
  return String(num).split('').map((x,idx,arr)=>arr.slice(0,idx+1).join(''))
}

console.log(createArrayOfTiers(420))
console.log(createArrayOfTiers(2017))