function vowelCounter(str) {
  vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  strArray = str.split('')
  const newStr = strArray.filter((letter) => {
    for (vowel of vowels) {
      if (vowel === letter) {
        return false
      }
    }
    return true
  }).join('')
  return str.length - newStr.length
}

console.log(vowelCounter('hello, how are you today?'))
console.log(vowelCounter('Jesse'))
console.log(vowelCounter('Jesse LARSON'))

function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}


