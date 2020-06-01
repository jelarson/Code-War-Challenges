// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  falsey = 0;
  alphabet.split("").forEach((letter) => {
    string.toLowerCase().split(" ").join("").includes(letter)
      ? null
      : (falsey += 1);
  });
  return falsey > 0 ? false : true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Not a panagram"));

// top answer

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}
