
function anagram(string, stringTwo) {
  const strOne = string.toLowerCase().split(' ').join('').split('').sort()
  const strTwo = stringTwo.toLowerCase().split(' ').join('').split('').sort()
  // let ans = true
  return strTwo.every((letter, idx) => letter === strOne[idx])
  // strTwo.forEach((letter, idx) => {
  //   if (letter !== strOne[idx]){
  //     ans = false
  //   }
  // })
  // return ans
}
const myName = 'jesse'

objName[myName]
obj.jesse

obj['name']
obj.name

// console.log(anagram('A gentleman', 'Elegant man'))
console.log(anagram('gentleman', 'Elegant man'))
// console.log(anagram('older and wiser', 'I learned words'))
// console.log(anagram('Listen', 'Silent')) 