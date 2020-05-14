// Given two arrays a and b write a function comp(a, b)
// (compSame(a, b) in Clojure) that checks whether the two
// arrays have the "same" elements, with the same
// multiplicities. "Same" means, here, that the elements in
// b are the elements in a squared, regardless of the order.

var a = [121, 144, 19, 161, 19, 144, 19, 11];
// var a = [];
var b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// var b = [];

function comp(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  numArr = [];
  for (digit of array1) {
    numArr.push(digit * digit);
  }
  return numArr.sort().join(",") === array2.sort().join(",");
}

console.log(comp(a, b));

var c = [2, 4, 1];
var d = [4, 1, 2];

console.log(c.sort().join(""));
console.log(d.sort().join(""));
console.log(d.sort() === c.sort());
