// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

str = "How can mirrors be real if our eyes aren't real";

function toJadenCase(string) {
  let stringArr = string.split(" ");
  return stringArr
    .map((word) => {
      return (
        word.split("")[0].toUpperCase() +
        word.split("").slice(1, word.length).join("")
      );
    })
    .join(" ");
}

console.log(toJadenCase(str));
