// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

function findDifference(a, b) {
  return Math.abs(a.reduce((x,y)=>x*y,1) - b.reduce((x,y)=>x*y,1))
}