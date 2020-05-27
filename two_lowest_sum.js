// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort(function (a, b) {
    return a - b;
  });
  return sorted[0] + sorted[1];
}

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
