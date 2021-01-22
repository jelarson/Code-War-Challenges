// https://www.codewars.com/kata/5ff50f64c0afc50008861bf0/train/javascript

function fourSeven(n){
  const ans = Array(202).fill(0)
  ans[4] = 7
  ans[7] = 4
  return ans[Math.abs(n-Math.abs(n*2))]
}

console.log(fourSeven(-4))