// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
  let count = [1];
  for (let i = 2; i <= (n/2); i++){
    if (n%i == 0){
      count.push(i)
    }
  }
  return count
}

console.log(getDivisorsCnt(10))

function getDivisorsCnt(n){
  let count = 0;
  for (let i = 1; i <= n; i++){
    if (n%i == 0){
      count++
    }
  }
  return count
}