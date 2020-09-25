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

// top answer

function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

// ryan's answer with regex
function firstNonRepeatingLetter(s) {
  const lower = s.toLowerCase()
  const found = [...lower].find((letter) => lower.match(new RegExp(letter, 'g')).length === 1) || ""
  return s.indexOf(found) === -1 ? found.toUpperCase() : found
}

// ryan's best answer

function firstNonRepeatingLetter(s) {
  return [...s].find((letter) => s.match(new RegExp(letter, 'gi')).length === 1) || ""
}