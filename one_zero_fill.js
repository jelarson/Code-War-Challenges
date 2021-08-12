// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
  const str = Array(Math.floor(size/2)).fill('10').join('')
  return size % 2 == 0 ? str : str + '1' 
}