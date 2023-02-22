// https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript

var countSquares = function(cuts){
  if (cuts >= 1) {
    return cuts**2 * 3 * 2 + 2
}
  else if (cuts == 0) {
    return 1
  }
}