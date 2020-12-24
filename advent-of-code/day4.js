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


  // console.log(day4(arr))

  function day4part2(arr){
    let valid = 0
    arr.forEach(passport=>{
      passArr1 = passport.split('\n').join(' ').split(' ').map(itm=>itm.split(':')[0])
      passArr2 = passport.split('\n').join(' ').split(' ').map(itm=>itm.split(':'))
      if (passArr1.includes('byr') && passArr1.includes('iyr') && passArr1.includes('eyr') && passArr1.includes('hgt') && passArr1.includes('hcl') && passArr1.includes('ecl') && passArr1.includes('pid')){
        let checker = true
        passArr2.forEach(c=>{
          if (checker){
            if (c[0] === 'byr'){
              checker = c[1] <= 2002 && c[1] >= 1920
            }
            if (c[0] === 'iyr'){
              checker = c[1] <= 2020 && c[1] >= 2010
            }
            if (c[0] === 'eyr'){
              checker = c[1] >= 2020 && c[1] <= 2030
            }
            if (c[0] === 'pid'){
              let pidChecker = true
              let pidArr = ['0','1','2','3','4','5','6','7','8','9']
              pidChecker = c[1].length === 9
              c[1].split('').forEach(char=>{
                if (pidChecker){
                  pidChecker = pidArr.includes(char)
                }
              })
              checker = pidChecker
            }
            if (c[0] === 'hgt'){
              if (c[1].includes('cm')){
                checker = c[1].split('cm')[0] <= 193 && c[1].split('cm')[0] >= 150
              }
              else if (c[1].includes('in')){
                checker = c[1].split('in')[0] <= 76 && c[1].split('cm')[0] >= 59
              }
              else {
                checker = false
              }
            }
            if (c[0] === 'hcl'){
              let hclCheck = true
              const hclArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
              hclCheck = c[1].length === 7 && c[1][0] === '#'
              c[1].slice(1).split('').forEach(char=>{
                if (hclCheck){
                  hclCheck = hclArr.includes(char)
                }
              })
              checker = hclCheck
            }
            if (c[0] === 'ecl'){
              const eclArr = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
              checker = eclArr.includes(c[1])
            }
          }
        })
        if (checker) valid++
      }
      
    })
    return valid
  }

  console.log(day4part2(arr))
})