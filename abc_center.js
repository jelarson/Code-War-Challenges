// https://www.codewars.com/kata/5f5da7a415fbdc0001ae3c69/train/javascript

// function isInMiddle(seq) {
//   console.log(seq)
//   const arr = seq.split('abc')
//   if (arr.length === 2){
//   if (Math.abs(arr[0].length - arr[1].length) === 1 || arr[0].length - arr[1].length === 0){
//       return true
//       } 
//   }
//   return false
// }

// function isInMiddle(seq) {
//   let div = 1
//   if (seq.length %2 === 0){
//     div = 2
//   }
//   let newStr = seq
//   if (seq.length > 5){
//     newStr = seq.slice(seq.length / 2 - div, seq.length / 2 + div + 1)
//   }
//   return newStr.includes('abc')
// }

function isInMiddle(seq) {
  const arr = seq.split('')
  for (let i = 0; i < seq.length / 2 -2; i++){
    arr.pop()
    arr.shift()
  }
  return arr.join('').includes('abc')
}

console.log(isInMiddle('abcabcabc'))
console.log(isInMiddle('abcabcabcabc'))
console.log(isInMiddle('12345abc6789'))
console.log(isInMiddle('AabcBBB'))

// top answer with recursion
const isInMiddle = str =>
  str.length <= 4 ? str.includes('abc') : isInMiddle(str.slice(1, -1));

// top answer while loop

function isInMiddle(seq) {

  while (seq.length > 4) {
    seq = seq.slice(1, -1);
  }
  return seq.indexOf("abc") >= 0;
}