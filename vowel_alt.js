// https://www.codewars.com/kata/59cf8bed1a68b75ffb000026/train/javascript

function solve(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const vowelArr = []
  const constArr = []
  s.split('').forEach(let=> vowels.includes(let) ? vowelArr.push(let) : constArr.push(let))
  vowelArr.sort()
  constArr.sort()
  const val = vowelArr.length - constArr.length
  if (Math.abs(val) > 1){
    return 'failed'
  }
  let first
  let second
  if (val !== -1){
    second = constArr
    first = vowelArr
  } else {
    second = vowelArr
    first = constArr
  }
  second.push(' ')
  const ans = []
  for (let i = 0; i < first.length; i++){
    ans.push(first[i])
    ans.push(second[i])
  }
  return ans.join('').trim()
 };

//  console.log(solve('oruder'))
 console.log(solve('apple'))
 console.log(solve('java'))