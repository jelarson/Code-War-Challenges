// Given an integral number, determine if it's a square number:

// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true
// isSquare(26) returns  false

var isSquare = function (n) {
  arr = [];
  if (n === 0) {
    return true;
  }
  if (n < 0) {
    return false;
  } else {
    for (var i = 0; i <= n; i++) {
      if (n / i === i) {
        return true;
      }
    }
  }
  return arr.includes(true);
};

console.log(isSquare(25));
console.log(isSquare(26));
