// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/javascript

function waveSort(arr) {
  const ans = []
  const first = arr.sort((a,b)=>a-b).slice(0,arr.length/2)
  const second = arr.sort((a,b)=>a-b).slice(arr.length/2)
  for (let i =0; i <arr.length/2; i++){
    ans.push(second[i])
    ans.push(first[i])
  }
  return ans
}

console.log(waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]))
console.log(waveSort([1, 2]))