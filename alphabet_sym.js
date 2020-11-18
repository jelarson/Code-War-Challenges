// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

function solve(arr){  
  return arr.map(item=> {
    let count = 0
    item.toLowerCase().split('').forEach((letter, idx)=>{
      if (letter.charCodeAt(0) - 97 === idx){
        count++
      }
    })
    return count
  })
  };

console.log(solve(["abode","ABc","xyzD"]))