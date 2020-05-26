// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

// [1,2,3,4,5] = [2,3,4,5]

function removeSmallest(numbers) {
  let idx = numbers.indexOf(Math.min(...numbers));
  numbers.splice(idx, 1);
  return numbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
