// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str,n){
  // while
  var front = Math.ceil(n/2)
  var back = n - front;
  return Array(front).fill('*').join('') + str + Array(back).fill('*').join('')
}