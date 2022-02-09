// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

function drawStairs(n) {
  return Array(n).fill('I').map((a,b)=>' '.repeat(b).concat(a)).join('\n')
}