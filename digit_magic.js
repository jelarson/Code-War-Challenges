// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  let splitArr = String(n).split("");
  let squaredArr = [];
  splitArr.forEach((num) => {
    squaredArr.push(num ** p);
    p++;
  });
  let squaredSum = squaredArr.reduce((a, b) => a + b);
  if (squaredSum % n === 0) {
    return squaredSum / n;
  } else {
    return -1;
  }
}

console.log(digPow(89, 1));

// top answer

function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}
