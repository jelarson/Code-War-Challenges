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