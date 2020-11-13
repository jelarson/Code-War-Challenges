// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

function minValue(values){
  return Number([...new Set(values)].sort((a,b)=>a-b).map(x=>String(x)).join(''))
}

console.log(minValue([5, 7, 9, 5, 7]))