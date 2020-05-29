// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
  const sqrt = sq ** 0.5 + 1;
  if (sqrt % 1 === 0) {
    return sqrt ** 2;
  } else {
    return -1;
  }
}

console.log(findNextSquare(121));
