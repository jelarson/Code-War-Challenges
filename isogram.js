// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
  const modifiedStr = str.toLowerCase().split('').sort().join('')
  const comparedStr = [...new Set(str.toLowerCase().split('').sort())].join('')
  return comparedStr === modifiedStr ? true : false
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("moOse"))

// top answer

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}