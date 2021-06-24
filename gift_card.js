// https://www.codewars.com/kata/54554846126a002d5b000854/train/javascript

var buy = function(x, arr){

  for (let i = 0; i < arr.length; i++){
    let num = x - arr[i]
    if (arr.includes(num)){
      return [i,arr.slice(i+1,arr.length).indexOf(num)+i+1]
    }
  }
  return null;
};

// top answer

function buy(c, arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === c) return [i, j]
    }
  }
  
  return null
}

console.log(buy(5,[5,2,3,4,5]))
console.log(buy(5,[1,2,3,4,5]))
console.log(buy(5,[2,3,4,5]))
console.log(buy(2,[1,1]))
console.log(buy(3,[1,1]))