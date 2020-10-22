// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
  const unique = [...new Set(text.toLowerCase().split(''))]
  return unique.filter(letter => text.toLowerCase().indexOf(letter) !== text.toLowerCase().lastIndexOf(letter)).length
}

console.log(duplicateCount(""))
console.log(duplicateCount("asdfghjkl"))
console.log(duplicateCount("aabBcde"))

// top answer
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

