// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
  const copy = x.split('').reverse().join('').toLowerCase()
  return x.toLowerCase() == copy
}