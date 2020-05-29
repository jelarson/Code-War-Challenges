// https://www.codewars.com/kata/56121f3312baa28c8500005b/train/javascript

// biggest([1, 2, 3]) === '321'
// biggest([3, 30, 34, 5, 9]) === '9534330'

function biggest(nums) {
  return String(nums.sort().reverse().join(""));
}

console.log(biggest([1, 2, 3]));
console.log(biggest([3, 30, 34, 5, 9]));
console.log([3, 30, 34, 5, 9].sort().reverse().join(""));
