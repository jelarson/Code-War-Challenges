// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
  // let setty = new Set(iterable);
  // return Array.from(setty);
  let ans = [];
  let answer = [];
  iterable.map((char) => String(char));
  let previous = iterable[0];
  iterable.split("").forEach((letter) => {
    if (letter === previous) {
      ans.push(letter);
    } else {
      ans.push(" ");
      ans.push(letter);
    }
    previous = letter;
  });
  ans
    .join("")
    .split(" ")
    .forEach((letter) => {
      answer.push(letter[0]);
    });
  return answer;
  // return powerMove;
};

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 3, 3]));
