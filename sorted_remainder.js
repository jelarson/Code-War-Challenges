// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

function remainder(a, b){
  var sorted = [a,b].sort((c,d)=>c-d)
  return sorted[1] % sorted[0]
}