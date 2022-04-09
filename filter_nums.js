// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

function stringClean(s){
  return s.split('').filter(x=>!['1','2','3','4','5','6','7','8','9','0'].includes(x)).join('')
}