// https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript

function solve(arr){
  const ans = Array(arr.length)
  let sorted = arr.sort((a,b)=>b-a)
  for (let i = 0; i < arr.length; i++){
    ans[i] = sorted[0]
    sorted = sorted.slice(1).reverse()
  }
  return ans
};

console.log(solve([15,11,10,7,12]))

// one liner

const solve = arr =>
  [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());

