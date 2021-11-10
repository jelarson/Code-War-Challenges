// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(arr){
  let ans = arr.split(',')
  if (ans.length < 3) return null
  ans.pop()
  ans.shift()
  return ans.join(' ')
}