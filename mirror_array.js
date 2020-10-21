// https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

function mirror(data) {
  const sorted = [...data].sort(function(a,b){return a -b})
  return [...sorted, ...sorted.reverse().slice(1)]
}

console.log(mirror([1,3,2]))

// one liner - same logic

const mirror = (a, b=a.slice().sort((x,y)=>x-y)) => [...b, ...b.reverse().slice(1)]