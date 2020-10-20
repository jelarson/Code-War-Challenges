// https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02/train/javascript

function sumOrProduct(array, n) {
  const sorted = array.sort(function(a,b){return a - b})
  const mult = sorted.slice(0,n).reduce(function(a,b){return a * b}, 1)
  const sum = sorted.slice(sorted.length -n).reduce(function(a,b){return a + b}, 0)
  if (sum > mult){
    return 'sum'
  } else {
    if (sum < mult){
      return 'product'
    } else {
      return 'same'
    }
  }
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))

// best answer 
// same logic - ternary
const sumOrProduct = (arr, n) => {
  const sorted = arr.sort((a, b) => a - b);
  const sum = sorted.slice(-n).reduce((acc, i) => acc + i);
  const product = sorted.slice(0, n).reduce((acc, i) => acc * i, 1);
  return sum > product ? 'sum' : sum < product ? 'product' : 'same';
}

// for loop instead of reducer

function sumOrProduct(array, n) {
  let arr = array.slice().sort((a, b) => a - b),
      sum = 0, product = 1, l = arr.length;
  for (let i = 0; i < n; i++) {
    sum += arr[l - 1 -i];
    product *= arr[i];
  }
  return sum > product ? "sum" : sum < product ? "product" : "same";
}