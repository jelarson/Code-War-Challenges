// https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript

function isPythagoreanTriple(integers) {
  var sorted = integers.sort((a,b) => a - b);
  return sorted[0]**2 + sorted[1]**2 == sorted[2]**2
}