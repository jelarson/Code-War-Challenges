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
  return arr;
}

console.log(wdm(test));
