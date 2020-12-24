// https://adventofcode.com/2020/day/4

const fs = require('fs')
const path = require('path')
// Part 1
const path1 = path.join(__dirname,'./adventOfCode4.txt');
fs.readFile(path1, {encoding: 'utf-8'}, (err, data) => {
  const arr = data.toString().split('\n\n')

  function day4(arr){
    let valid = 0
    arr.forEach(passport=>{
      passArr = passport.split('\n').join(' ').split(' ').map(itm=>itm.split(':')[0])
      if (passArr.includes('byr') && passArr.includes('iyr') && passArr.includes('eyr') && passArr.includes('hgt') && passArr.includes('hcl') && passArr.includes('ecl') && passArr.includes('pid')) valid++
    })
    return valid
  }


  console.log(day4(arr))
})