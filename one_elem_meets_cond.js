// Create a function called one that accepts two params: a sequence anda function
// and returns true only if the function in the params returns true for exactly 
// one item in the sequence.


function one(arr, fun) {
  counter = 0
  for (item of arr) {
    if (fun(item) === true) {
      counter++
    }
  }
  if (counter === 1) {
    return true
  } else {
    return false
  }
}

console.log(one([1, 2, 3, 4, 5], 'item % 2'))
console.log(one([1, 2, 3, 5], 'item % 2'))