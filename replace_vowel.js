// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

function replace(s){
  var arr = 'aeiouAEIOU'.split('')
  return s.split('').map(x=>arr.includes(x) ? '!' : x).join('')
}