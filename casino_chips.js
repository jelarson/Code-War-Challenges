// https://www.codewars.com/kata/5e0b72d2d772160011133654/train/javascript

function solve(arr, count = 0){
  count ++
  const array = arr.sort((a,b)=>{return b - a})
  array[0]--
  array[1]--
  return array.filter(num => num ).length > 1 ? solve(array, count) : count
}

// console.log(solve([12,12,12]))
// console.log(solve([7,4,10]))
// console.log(solve([8,1,4]))

function solve2(arr, count = 0){
  const array = arr.sort((a,b)=>{return b - a})
  array[0]-=Math.ceil(array[1] / 2)
  count += Math.ceil(array[1] / 2)
  array[1]-=Math.ceil(array[1] / 2)
  return array.filter(num => num ).length > 1 ? solve(array, count) : count
}

console.log(solve2([12,12,12]))
console.log(solve2([7,4,10]))
console.log(solve2([8,1,4]))
console.log(solve2([ 33325, 538921, 988988 ]))