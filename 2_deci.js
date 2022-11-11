// https://www.codewars.com/kata/5641a03210e973055a00000d/train/javascript

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2))
}

const twoDecimalPlaces = (n) => Math.round(n * 100) / 100;