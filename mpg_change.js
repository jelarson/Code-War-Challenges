// https://www.codewars.com/kata/5d96030e4a3366001d24b3b7/train/javascript

function solve(b, a) {
  return b[0] + ((a[0] - b[0]) * (a[1] / b[1]))
}

const solve = ([c1, d1], [c2, d2]) => (c2 * d2 - c1 * d1) / (d2 - d1)