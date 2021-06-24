// https://www.codewars.com/kata/54554846126a002d5b000854/train/javascript

var buy = function(x, arr){
  for (let i = 0; i < arr.length; i++){
    let num = x - arr[0]
    if (arr.includes(num)){
      return [i,arr.indexOf(num)]
    }
  }
  return null;
};