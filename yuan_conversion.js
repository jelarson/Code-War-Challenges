// https://www.codewars.com/kata/5977618080ef220766000022/train/javascript

function usdcny(usd) {
  return String((Math.round(usd*675)/100).toFixed(2)) + ' Chinese Yuan'
}