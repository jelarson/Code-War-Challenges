// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  let punc = "?!:.,#$%&*";
  return str
    .split(" ")
    .map((word) => {
      if (punc.includes(word)) {
        return word;
      } else {
        return word.slice(1, word.length) + word[0] + "ay";
      }
    })
    .join(" ");
}

console.log(pigIt("hello world !"));
