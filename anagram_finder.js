// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
 const sortedWord = word.split('').sort().join('')
 const ans = []
 words.forEach(item => {
  if (item.split('').sort().join('') == sortedWord){
    ans.push(item)
  }
 })
 return ans
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

// top answer

function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function(v) {return word == v.split('').sort().join('');});
}