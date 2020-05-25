// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  if (Array.isArray(input) === false) {
    return [];
  }
  input.forEach((num) => {
    if (num > 0) {
      count += 1;
    }
    if (num < 0) {
      sum += num;
    }
  });
  let answer = [count, sum];
  if (sum === 0 && count === 0) {
    return [];
  } else {
    return answer;
  }
}

console.log(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15,
  ])
);

console.log(countPositivesSumNegatives([0]));

// Top Answer

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}
