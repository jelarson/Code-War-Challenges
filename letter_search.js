// https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript

function change(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = [];
  let idx = [];
  string
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (alphabet.includes(letter)) {
        idx.push(alphabet.indexOf(letter));
      }
    });
  let currentInd = 0;
  alphabet.split("").forEach((let) => {
    if (idx.includes(currentInd)) {
      alphabetArr.push("1");
    } else {
      alphabetArr.push("0");
    }
    currentInd++;
  });
  return alphabetArr.join("");
}

console.log(change("a **&  bZ"));

// Top Answer

function change(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(function (c) {
      return string.indexOf(c) !== -1 ? 1 : 0;
    })
    .join("");
}
