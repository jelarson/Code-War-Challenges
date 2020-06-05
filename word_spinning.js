// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(spinWords("this is another test"));

// top answer

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
