// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// :) :D ;-D :~)

function countSmileys(arr) {
  count = 0;
  arr.forEach((smile) => {
    if (
      smile === ":)" ||
      smile === ":D" ||
      smile === ";~D" ||
      smile === ":~)"
    ) {
      count += 1;
    }
  });
  return count;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
