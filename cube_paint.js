// https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript

var countSquares = function(cuts){
  if (cuts >= 1) {
    return cuts**2 * 3 * 2 + 2
}
  else if (cuts == 0) {
    return 1
  }
}

countSquares=n=>n?6*n*n+2:1

var countSquares = function(cuts){
  return (cuts ? 6 * Math.pow(cuts, 2) + 2 : 1)
}

const countSquares = cuts =>
  (6 * cuts ** 2 + 2) ** !!cuts;