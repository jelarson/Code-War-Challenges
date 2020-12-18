// https://adventofcode.com/2020/day/1

const fs = require('fs')
const path = require('path')
// Part 1
const path1 = path.join(__dirname,'./adventOfCode2.txt');
fs.readFile(path1, {encoding: 'utf-8'}, (err, data) => {
  const arr = data.toString().split('\n')

  function day2(arr){
    let count = 0
    arr.forEach(itm=>{
      const itmArr = [Number(itm.split('-')[0]), Number(itm.split('-')[1].split(' ')[0]), itm.split('-')[1].split(' ')[1].split(':')[0], itm.split('-')[1].split(' ')[2]]
      let letCount = 0
      itmArr[3].split('').forEach(letter=>{
        if (letter === itmArr[2]) letCount++
      })
      if (letCount >= itmArr[0] && letCount <= itmArr[1]) count++
    })
    return count
  }
  // console.log(day2(arr))
  // console.log(arr[2])
  // const str='2-4 g: jgzq'
  // console.log([Number(str.split('-')[0]), Number(str.split('-')[1].split(' ')[0]), str.split('-')[1].split(' ')[1].split(':')[0], str.split('-')[1].split(' ')[2]])
  function day2Part2(arr){
    let count = 0
    arr.forEach(itm=>{
      const itmArr = [Number(itm.split('-')[0]), Number(itm.split('-')[1].split(' ')[0]), itm.split('-')[1].split(' ')[1].split(':')[0], itm.split('-')[1].split(' ')[2]]
      let letCount = 0
      if (itmArr[3][itmArr[0] -1] === itmArr[2]) letCount++
      if (itmArr[3][itmArr[1] -1] === itmArr[2]) letCount++
      if (letCount === 1) count++
    })
    return count
  }
  console.log(day2Part2(arr))
})