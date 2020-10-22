// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
  return word.toLowerCase().split('').map((char, idx, arr) => arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')').join('')
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("Success"))
console.log(duplicateEncode("(( @"))

// top answer
//regex

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}