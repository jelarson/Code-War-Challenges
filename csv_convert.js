// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

function toCsvText(array) {
  return array.map(x=>x.join(',')).join('\n')
}