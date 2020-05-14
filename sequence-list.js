// In this kata, you will write an arithmetic list which is
// basically a list that contains consecutive terms in the
// sequence.

var seqlist = function (first, c, l) {
  let arr = [];
  let counter = 0;
  for (var i = 1; i <= l; i++) {
    arr.push(first + counter);
    counter += c;
  }
  return arr;
};

console.log(seqlist(0, 1, 20));
