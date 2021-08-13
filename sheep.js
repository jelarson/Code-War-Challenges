// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
  const idx = queue.reverse().indexOf('wolf')
  return idx > 0 ? `Oi! Sheep number ${idx}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep'
}