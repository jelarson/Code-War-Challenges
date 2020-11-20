//https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

function solve(s){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  return alpha.includes(s.split('').sort().join(''))
}

console.log(solve('dabc'))

// top answers

// one liner - same logic with spread operator

function solve(s) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}

// using charcode

function solve(s) {

  if (s.length === 1) {
    return true;
  }

  const sortedChars = s.split('').sort().join('');

  for (let i=1; i<sortedChars.length; i++) {
    if (sortedChars.charCodeAt(i) - sortedChars.charCodeAt(i-1) !== 1) {
      return false
    }
  }

  return true;
}

// one liner with char code

function solve(s){
  return [...s].sort().map(x=>x.charCodeAt(0)).every((x,i,a)=>!i||x-1==a[i-1])
}