//https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript

function nthSmallest(arr, pos){
  const sorted = arr.sort((a,b)=> a-b)
  return sorted[pos -1]
}

console.log(nthSmallest([15,20,7,10,4,3],3))