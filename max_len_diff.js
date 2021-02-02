// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
  const max1 = Math.max(...a1.map(x=>x.length))
  const min1 = Math.min(...a1.map(x=>x.length))
  const max2 = Math.max(...a2.map(x=>x.length))
  const min2 = Math.min(...a2.map(x=>x.length))
  return max1 - min2 > max2 - min1 ? max1 - min2 : max2 - min1
}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))