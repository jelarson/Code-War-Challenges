//https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/javascript

function solve(stones) {
  const arr = []
  const stoneArr = stones.split('')
  for(let i = 1; i < stones.length; i++){
    if(stones[i] !== stones[i -1]){
      arr.push(stones[i-1])
    }
  }
  arr.push(stones[stones.length -1])
  return stones.length - arr.length
}

console.log(solve('RRGGBB'))

// top answer

function solve(stones) {
  let count = 0
  for (let i = 1; i <= stones.length; i++) {
    if (stones[i] === stones[i-1]) { count++ }
  }
  return count
}

// top answer - reducer

function solve(stones) {
  return stones.split('').reduce((totalRemove, stone, i) => {
    return i >= 1 && (stones[i - 1] === stone) ? ++totalRemove : totalRemove
  }, 0) 
}

// recursive one liner
let solve = ([h,...t],c) => (h==c) + (t.length&&solve(t,h))

// regex
function solve(stones) {
  return (stones.match(/(\w)(?=\1)/g) || []).length;
}