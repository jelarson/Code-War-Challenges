// https://www.codewars.com/kata/56be025f9347a066c7000e4f/train/javascript

Math.roundTo = function (number, precision) {
  return Math.round(number * 10**precision) / 10**precision
}

Math.roundTo = (number, precision)=> +number.toFixed(precision);