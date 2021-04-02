// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears == 1) {
    return [1,15,15]
  }
  if (humanYears == 2) {
    return [2,24,24]
  }
  const cat = 24 + (humanYears - 2) * 4
  const dog = cat + humanYears - 2
  return [humanYears,cat,dog];
}

console.log(humanYearsCatYearsDogYears(0))
console.log(humanYearsCatYearsDogYears(1))
console.log(humanYearsCatYearsDogYears(2))
console.log(humanYearsCatYearsDogYears(3))
console.log(humanYearsCatYearsDogYears(5))