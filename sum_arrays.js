// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  return [...arr1,...arr2].reduce((a,b)=>a+b);
}