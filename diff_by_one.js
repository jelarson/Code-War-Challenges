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

// top answers

var mispelled = function(word1, word2)
{
  var w = word1.length - word2.length > 0 ? word1.length : word2.length;
  var num = 0;
  
  for(var i = 0; i < w; i++) {
    if(word1[i] !== word2[i]) {
      num++;
    }
  }
  
  return num === 1;
}



var mispelled = function(word1, word2)
{
  if(Math.abs(word1.length - word2.length) > 1) return false
  if(~word1.indexOf(word2) || ~word2.indexOf(word1)) return true
  return word1.split('').filter((e,i)=>e!=word2[i]).length==1
}

const check = (wordMax,wordMin) => {
  return wordMax.length === wordMin.length + 1 && !!(wordMax.search(wordMin) + 1);
}
const mispelled = function(word1, word2){
  if(word1.length === word2.length) {
    return [...word1].filter((el,i) => el !== word2[i]).length === 1;
  }
  return word1.length > word2.length ? check(word1,word2) : check(word2,word1);
}