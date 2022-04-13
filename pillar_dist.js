// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript

function pillars(num_pill, dist, width) {
  return num_pill > 1 ? 100 * dist * (num_pill - 1) + num_pill * width - 2 * width : 0
}