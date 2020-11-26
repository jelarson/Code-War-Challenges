// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

// function race(v1, v2, g) {
//   const seconds = g / ((v2 - v1) / 3600)
//   return [Math.floor(seconds / 3600), Math.floor(seconds / 60), Math.floor(seconds % 60)]
// }

function race(v1, v2, g) {
  if (v1 >= v2) return null
  const seconds = g / ((v2 - v1) / 3600)
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(c=> Math.floor(c))
}

console.log(race(720, 850, 70))
console.log(race(80, 91, 37))