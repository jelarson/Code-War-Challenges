// https://adventofcode.com/2020/day/3

const fs = require('fs')
const path = require('path')
// Part 1
const path1 = path.join(__dirname,'./adventOfCode3.txt');
fs.readFile(path1, {encoding: 'utf-8'}, (err, data) => {
  const arr = data.toString().split('\n')

  function day3(input, xUnits, yUnits){
    let treeMap = input.map(x => x.split(''));
    let coordinates = [0,0]
    let treeCount = 0
    for (let i = 0; i < treeMap.length -1; i+=yUnits){
      coordinates[0]+=xUnits
      if (coordinates[0] >= treeMap[0].length) coordinates[0]-=treeMap[0].length
      coordinates[1]+=yUnits
      if (treeMap[coordinates[1]][coordinates[0]] === '#') treeCount++
    }
    return treeCount
  }

  console.log(day3(arr,3,1))

})