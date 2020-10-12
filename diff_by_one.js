// https://www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript

var mispelled = function(word1, word2)
{
  if (Math.abs(word1.length - word2.length) === 1){
    if (word1.includes(word2) || word2.includes(word1)){
      return true
    } else {
      return false
    }
  }
  let count = 0
  for (let i = 0; i < word1.length; i++){
    if (word1[i] !== word2[i]){
      count++
    }
  }
  return count === 1
}

console.log(mispelled('versed', 'xersed'))
console.log(mispelled('versed', 'applb'))