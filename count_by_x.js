// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
  var z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i*x)
  }
  return z;
}