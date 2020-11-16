//https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript

function nthSmallest(arr, pos){
  const sorted = arr.sort((a,b)=> a-b)
  return sorted[pos -1]
}

console.log(nthSmallest([15,20,7,10,4,3],3))

// top answer

// sort and return on same line

function nthSmallest(arr, pos){
  return arr.sort((a,b)=>a-b)[pos-1]
}

// one liner

const nthSmallest = (a, n) => a.sort((x, y) => x - y)[n - 1];