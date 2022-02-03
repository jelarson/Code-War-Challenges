// https://www.codewars.com/kata/5709bdd2f088096786000008/train/javascript

function superSize(num){
  return Number(String(num).split('').sort().reverse().join(''))
}