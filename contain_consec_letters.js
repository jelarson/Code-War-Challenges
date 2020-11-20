//https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

function solve(s){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  return alpha.includes(s.split('').sort().join(''))
}

console.log(solve('dabc'))