// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  const splitStr = s.split('')
  const ans = splitStr.filter((letter, idx) => {
    const modStr = [...splitStr.slice(0, idx), ... splitStr.slice(idx+1)]
     return modStr.includes(letter.toLowerCase() || letter.toUpperCase()) ? false : true
  })
  return ans.length > 0 ? ans[0] : '' 
}

console.log(firstNonRepeatingLetter('stress'))