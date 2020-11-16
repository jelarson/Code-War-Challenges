// https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

function maxTriSum(numbers){
  const sorted = [...new Set(numbers.sort((a, b) => b-a))]
  return sorted[0]+sorted[1]+sorted[2]
}

console.log(maxTriSum([2,9,13,10,5,2,9,5]))
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))