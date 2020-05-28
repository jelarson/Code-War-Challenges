// https://www.codewars.com/kata/58e953ace87e856a97000046/train/javascript

let test = "puke All's well hiccup     that ends hiccup well puke";

function wdm(talk) {
  const arr = talk
    .split("puke")
    .join("")
    .split("hiccup")
    .join("")
    .split(" ")
    .filter(Boolean)
    .join(" ");
  // const str = arr.map((word) => {
  //   if (word !== " ") {
  //     return word;
  //   }
  // });
  // const str = arr.filter(Boolean);
  return arr;

  // let arr = Array.from(talk, (char) => {if(char === ' '){return char}})
}

console.log(wdm(test));
