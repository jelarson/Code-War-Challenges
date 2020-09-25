// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  const splitStr = s.split('')
  return splitStr.filter((letter, idx) => {
    const modStr = [...splitStr.slice(0, idx), ... splitStr.slice(idx+1)]
    return !modStr.includes(letter.toUpperCase()) ? !modStr.includes(letter.toLowerCase()) ? true : false : false
  })[0] || ''
}

console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('sTreSS'))

