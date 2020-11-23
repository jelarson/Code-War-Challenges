// https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040/train/javascript

function solve(s){
  if (s.length %2 !== 0){
    return -1
  }
  let ans = 0
  let open = 0
  s.split('').forEach(char => {
    if (char === '('){
      open++
    }
    if (char === ')'){
      if (open > 0){
        open--
      } else {
        ans++
        open++
      }
    }
  })
  return ans + open/2
}

console.log(solve('())()))))()()('))

// top answers

// same logic - cleaned up

function solve(s) {
  if (s.length % 2 != 0)
    return -1;
  let res = 0, k = 0;
  for (let c of s) {
    if (c == '(')
      k++;
    else if (k > 0)
      k--;
    else
      k++, res++;
  }
  return res + k / 2;
}

// interesting while loop with regex

function solve(s) {
  while ( s.includes('()') ) {
    s = s.replace(/\(\)/g, '');
  }
  if ( s.length % 2 === 1 ) return -1;
  let count = 0;
  const obj = {
      ')(': 2,
      '((': 1,
      '))': 1,
    };
  for ( let i = 0; i <= s.length-2; i += 2 ) {
    count += obj[s[i]+s[i+1]]
  }
  return count;
}

