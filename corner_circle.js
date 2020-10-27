// https://www.codewars.com/kata/5898761a9c700939ee000011/train/javascript

function cornerCircle(r) {
  const a = Math.sqrt(r*r*2) - r
  // return Math.sqrt((Math.sqrt(r*r*2)-r)^2/2)
  return a
  return Math.sqrt((a**2)/2)/2
}

console.log(cornerCircle(3))
console.log(cornerCircle(17))

// top answer

function cornerCircle(r) {  
  return Math.round(r * (Math.SQRT2 - 1) * (Math.SQRT2 - 1) * 100) / 100;
}