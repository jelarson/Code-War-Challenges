// https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript

var findInArray = function(array, iterator) {
  for(let i = 0; i < array.length; i++){
    if (iterator(array[i],i)){
      return i
    }
  }
  return -1
};

var trueIfEven = function(v, i) { return v % 2 === 0; }
var neverTrue = function(v, i) { return false; }
var trueIfValueEqualsIndex = function(v, i) { return v === i; }
var trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }

// console.log(findInArray([], trueIfEven))
// console.log(findInArray([1,3,5,6,7], trueIfEven))
// console.log(findInArray([2,4,6,8], trueIfEven))
// console.log(findInArray([2,4,6,8], neverTrue))
console.log(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex))