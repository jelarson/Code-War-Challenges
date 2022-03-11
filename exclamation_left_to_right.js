// https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript

function remove(s,n){
  var arr = s.split('!')
  return arr.slice(0,n).join('') + arr.slice(n).join('!')
}