// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

function pyramid(n) {
  const ans = []
  for(let i = 0; i < n; i++){
    const current = [1]
    for(let b = 0; b < i; b++){
      current.push(1)
    }
    ans.push(current)
  }
  return ans
}

console.log(pyramid(0))
console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(3))

// top answer - one for loop - fill method
function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}

// fill and map
function pyramid(n) {
  return Array(n).fill().map((e,i)=>Array(i+1).fill(1))
}