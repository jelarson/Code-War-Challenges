// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript

function isOpposite(s1,s2){
  return s1 && s1.length == s2.length ? s1.split('').every((x,i)=>x === x.toUpperCase() ? x.toLowerCase() === s2[i] : x.toUpperCase() ===s2[i]) : false
}

