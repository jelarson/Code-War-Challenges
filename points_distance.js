// https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript

function distanceBetweenPoints(a, b) {
  let run = Math.abs(a['x'] - b['x'])
  let rise = Math.abs(a['y'] - b['y'])
  return run == 0 ? rise : rise == 0 ? run : Math.sqrt(rise**2 + run**2)
}

function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)))