// https://www.codewars.com/kata/5733d6c2d780e20173000baa/train/javascript

function maxMin(arr1,arr2){
  var arr = arr1.map((x,i)=>Math.abs(x-arr2[i]))
  return [Math.max(...arr), Math.min(...arr)]
}