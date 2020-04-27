function vowelCounter(str) {
  vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  strArray = str.split('')
  const newStr = strArray.filter((letter) => {
    for (vowel of vowels) {
      if (vowel === letter) {
        // return false
        return true
      }
    }
    // return true
    return false
  }).join('')
  // return str.length - newStr.length

  return newStr.length
}

console.log(vowelCounter('hello, how are you today?'))
console.log(vowelCounter('Jesse'))
console.log(vowelCounter('Jesse LARSON'))

function yCount(str) {
  wordStr = str.split(' ')
  lastYCount = []
  wordStr.forEach(word => {
    lastYCount.push(word.charAt(0))
  })
  return lastYCount
  // for (words of str) {
  //   return words
  // }
}

console.log(yCount('hello, how are you today?'))

function getCount(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}


