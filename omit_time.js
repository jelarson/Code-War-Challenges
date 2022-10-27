// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

function shortenToDate(longDate) {
  return longDate.split(' ').slice(0,3).join(' ').slice(0,-1)
}