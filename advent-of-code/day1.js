// https://adventofcode.com/2020/day/1

const fs = require('fs')
const path = require('path')
// Part 1
const path1 = path.join(__dirname,'./adventOfCode.txt');
fs.readFile(path1, {encoding: 'utf-8'}, (err, data) => {
  const arr = data.toString().split('\n')
  
  function day1(arr){
    for (let i = 0; i < arr.length - 2; i++){
      for (let b = i+1; b < arr.length - 1; b++){
        for(let c = b+1; c < arr.length; c++){
          if(Number(arr[i]) + Number(arr[b] + Number(arr[c])) == 2020) {
            return Number(arr[i])*Number(arr[b]*Number(arr[c])) 
          }
        }
      }
    }
  }
  
  console.log(day1(arr))
})