// check if the first letter in a string is capitalized

function isCapital(str) {
  str.split('')
  return str[0] === str[0].toUpperCase() ? true : false
}

console.log(isCapital('hello'));
console.log(isCapital('Hello'));
