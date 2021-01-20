// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  return arr.map(x=>Math.min(...x)).reduce((a,b)=>a+b,0)
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))