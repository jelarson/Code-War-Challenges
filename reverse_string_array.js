// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  return String(n)
    .split("")
    .map((x) => +x)
    .reverse();
}

console.log(digitize(12345));
