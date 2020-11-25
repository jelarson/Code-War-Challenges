// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

// function longestConsec(strarr, k) {
//   if(strarr.length < k){
//     return ''
//   }
//   const ans = []
//   for(let i = 0; i < strarr.length - k+1; i++){
//     const temp = [strarr[i]]
//     for (let c = 1; c<k; c++){
//       temp.push(strarr[i + c])
//     }
//     ans.push(temp.join(''))
//   }
//   const sorted = ans.sort((a,b)=> b.length -a.length)
//   const biggest = sorted.filter(c=> c.length === sorted[0].length)
//   let idx = ans.length
//   let term = ''
//   biggest.forEach(c =>{
//     if (ans.indexOf(c) < idx){
//       idx = ans.indexOf(c)
//       term = c
//     }
//   })
//   return term
// }

// function longestConsec(strarr, k) {
//   // console.log(strarr, k)
//   if(strarr.length < k || k <= 0){
//     return ''
//   }
//   const ans = []
//   for(let i = 0; i < strarr.length - k+1; i++){
//     ans.push(strarr.slice(i, i+k).join(''))
//   }
//   return ans.sort((a,b)=> b.length -a.length)[0]
// }
function longestConsec(strarr, k) {
  if(strarr.length < k || k <= 0){
    return ''
  }
  let ans = ''
  for(let i = 0; i < strarr.length - k+1; i++){
    const word = strarr.slice(i, i+k).join('')
    if (word.length > ans.length){
      ans = word
    }
  }
  return ans
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libezzzz", "zas"], 2))
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))


// top answers

// same logic without early return

function longestConsec(strarr, k) {
  var longest = "";
  for(var i=0;k>0 && i<=strarr.length-k;i++){
    var tempArray = strarr.slice(i,i+k);
    var tempStr = tempArray.join("");
    if(tempStr.length > longest.length){
      longest = tempStr;
    }
  }
  return longest;
}

// reducer

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }
  
  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}

// ryan's answer with reducer

function longestConsec(strarr, k) {
  if(k < 1 || k > strarr.length) return ''
  return strarr.reduce((longest, _, idx) => {
    const str = strarr.slice(idx, idx + k).join('')
    const length = str.length
    return length > longest.length ? str : longest
  }, '')
}
