// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const min = Math.min(...arr)
  return toReturn === 'value' ? min : arr.indexOf(min)  
}

console.log(min([1,2,3,4,5], 'index'))
console.log(min([1,2,3,4,5], 'value'))