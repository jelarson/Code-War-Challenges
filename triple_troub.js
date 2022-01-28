// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

function tripleTrouble(one, two, three){
  let ans = ''
  for(let i = 0; i < one.length; i++) {
    ans = ans + one[i] + two[i] + three[i]
  }
  return ans
 }