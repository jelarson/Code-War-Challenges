// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
  numArr = String(value).split("");
  let expArr = numArr.map((digit) => {
    return Number(digit) ** numArr.length;
  });
  return expArr.reduce((a, b) => a + b, 0) === value ? true : false;
}

console.log(narcissistic(153));

// Top Answer

function narcissistic(value) {
  return (
    ("" + value).split("").reduce(function (p, c) {
      return p + Math.pow(c, ("" + value).length);
    }, 0) == value
  );
}
