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

 // top answers

 function solve(s) {

  let a = s.match(/[^aeiou]/g).sort();
  let b = s.match(/[aeiou]/g).sort();
  let r = '';
  
  if (a.length > b.length)
    [a, b] = [b, a];
    
  if (b.length - a.length > 1)
    return 'failed';
    
  return b
    .map((c, i) => c + (a[i] || ''))
    .join('');
  
};

// lo dash

const {zip} = require('lodash')

function solve(s){
  let c = (s.match(/[^aeiou]/g) || []).sort(), v = (s.match(/[aeiou]/g) || []).sort()
  if (Math.abs(c.length - v.length) > 1) return 'failed'
  let zipped = c.length > v.length ? zip(c, v) : zip(v, c)
  return zipped.map(x => x.filter(a => a).join``).join``
}

// ryans answer

function solve(s) {
  const word = s.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const [vow, con] = word.reduce(([v, c], next) => {
      if(vowels.includes(next)) return [[...v, next], [...c]]
      return [[...v], [...c, next]]
  }, [[], []])
  vow.sort()
  con.sort()
  const numVowels = word.reduce((a, b) => a + (vowels.includes(b) ? 1 : 0), 0)
  const count = (word.length - numVowels) - numVowels
  if(![-1, 0, 1].includes(count)) return 'failed'
  const [more, less] = count < 1 ? [vow, con] : [con, vow]
  let solution = []
  for(let i = 0; i < word.length; i++){
    const which = i % 2 ? less : more
    solution.push(which.shift())
  }
  return solution.join('')
};