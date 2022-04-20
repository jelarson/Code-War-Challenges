// https://www.codewars.com/kata/574c5075d27783851800169e/train/javascript

function animals(heads, legs){
  let arr = [heads-(legs/2-heads),legs/2-heads]
  return arr[0]%1 == 0 && Math.min(...arr) >= 0 ? arr : 'No solutions'
}