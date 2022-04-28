// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

function finalGrade (e, p) {
  return e > 90 || p > 10 ? 100 : e > 75 && p > 4 ? 90 : e > 50 && p > 1 ? 75 : 0
}