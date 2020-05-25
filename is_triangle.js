// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a, b, c) {
  let valArr = [a, b, c];
  let maxNum = Math.max(...valArr);
  valArr.splice(valArr.indexOf(maxNum), 1);
  return valArr.reduce((a, b) => a + b, 0) > maxNum ? true : false;
}

console.log(isTriangle(7, 2, 2));
console.log(isTriangle(1, 2, 2));

// Top answers

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  return a + b > c;
}
