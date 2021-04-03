// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = n => {
  const arr = []
  for (let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr.reverse();
};