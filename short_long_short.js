// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b){
  return a.length <= b.length? [a,b,a].join('') : [b,a,b].join('')
}