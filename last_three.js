// https://www.codewars.com/kata/58255fde4ef190225a0001c0/train/javascript

function lastThreeDigits(m, n){
  return m==1&&n==1?"1":(""+Array(n).fill(m).reduce((x,y)=>((x % 1000) * (y % 1000))%1000,1)).padStart(3,'0')
}