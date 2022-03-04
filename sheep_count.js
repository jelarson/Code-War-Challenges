// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
  var answer = ''
  for (let i = 1; i <= num; i++) {
    answer += i + ' sheep...'
  }
  return answer
}