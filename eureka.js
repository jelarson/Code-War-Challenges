// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
  let numList = [];
  let ans = [];
  for (let i = a; i <= b; i++) {
    numList.push(i);
  }
  numList.forEach((num) => {
    let diggy = [];
    let len = 1;
    String(num)
      .split("")
      .forEach((digit) => {
        diggy.push(Number(digit) ** len);
        len++;
      });
    let sum = diggy.reduce((a, b) => a + b, 0);
    if (sum === num) {
      ans.push(sum);
    }
  });
  return ans;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));

// top answer

function sumDigPow(a, b) {
  var ans = [];
  while (a <= b) {
    if (
      a
        .toString()
        .split("")
        .reduce((x, y, i) => x + (+y) ** (i + 1), 0) == a
    )
      ans.push(a);
    a++;
  }
  return ans;
}
