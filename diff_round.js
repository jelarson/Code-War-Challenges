// https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript

function roundIt(n){
  var arr = String(n).split('.')
  return arr[0].length > arr[1].length ? Math.floor(n) : arr[0].length < arr[1].length ? Math.ceil(n) : Math.round(n)
}