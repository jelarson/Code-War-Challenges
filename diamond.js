// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n){
  if (n%2 === 0 || n <= 0) return null
  const ans = [`${Array(n).fill('*').join('')}\n`]
  for (let i = n - 2; i >= 1; i-=2){
    const arr = []
    if (i < n) arr.push(' '.repeat((n-i)/2))
    arr.push('*'.repeat(i))
    ans.push(arr.join('') + '\n')
  }
  return [...ans.slice(1).reverse(), ...ans].join('');
}

// console.log(diamond(1))
console.log(diamond(3))
// console.log(diamond(5))
// console.log(diamond(2))

Expected: ' *\n***\n *\n', instead got: ' *\n ***\n  *\n'

// top answer

// for loop starting at 0 - add to string instead of array

function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}

// double while loop

function diamond(n){
  if (n < 0 || n % 2 == 0) return null;
  for (var i = 0, diamond = ''; i < n; i++) {
    var stars = n - Math.abs(n - 2*i - 1);
    var spaces = (n - stars) / 2;
    while (spaces-- > 0) diamond += ' ';
    while (stars-- > 0) diamond += '*';
    diamond += '\n';
  }
  return diamond;
}

