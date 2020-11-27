// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n){
  const ans = [`${Array(n).fill('*').join('')}\n`]
  for (let i = n - 2; i >= 1; i-=2){
    ans.push(Array(i).fill('*').join('') + '\n')
    // ans.shift(Array(i).fill('*').join('') + '\n')
  }

  return n%2 === 0? null : [...ans.slice(1).reverse(), ...ans].join(' ');
}

console.log(diamond(1))
console.log(diamond(3))
console.log(diamond(5))
console.log(diamond(2))