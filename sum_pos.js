// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  return arr.filter(x=>x>0).reduce((a,b)=>a+b,0)
}