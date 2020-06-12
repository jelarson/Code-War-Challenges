// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

function roundToNext5(n) {
  if (n % 5 !== 0) {
    if (n > 0) {
      return n + (5 - (n % 5));
    } else {
      return n + (5 - (n % 5)) - 5;
    }
  } else {
    return n;
  }
}

console.log(roundToNext5(-1));

// top answer
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
