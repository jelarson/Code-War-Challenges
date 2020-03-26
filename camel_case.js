// Complete the method/function so that it converts dash/underscore 
// delimited words into camel casing. The first word within the output 
// should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  let capSplitArray = []
  let splitArray = str.split('-').join().split('_').join().split(',')
  for (word of splitArray) {
    capSplitArray.push(word.charAt(0).toUpperCase().concat(word.slice(1)))
  }
  return str.charAt(0).concat(capSplitArray.join('').slice(1))
}


console.log(toCamelCase("the-stealth-warrior")) // returns "theStealthWarrior"
console.log(toCamelCase("The_stealth_warrior")) // returns "TheStealthWarrior"

const toCamelCase1 = str => str.replace(/[-_][A-Za-z]/g, (val) => val.split('')[1].toUpperCase())

console.log(toCamelCase1("the-stealth-warrior")) // returns "theStealthWarrior"
console.log(toCamelCase1("The_stealth_warrior")) // returns "TheStealthWarrior"