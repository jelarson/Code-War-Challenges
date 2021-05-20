// https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/train/javascript

function sortStringsByVowels(strings){
  const vowels = ['a','e','i','o','u']
  var results = [];
  
  strings.forEach((str,idx)=>{
    let oneVowel = false
    const newStr = str.toLowerCase().split('').filter((x,idx2,arr)=>{
      if (vowels.includes(x)){
        oneVowel = true
        if (vowels.includes(arr[idx2 + 1]) | vowels.includes(arr[idx2-1])){
          return true
        }
      }
    })
    if (newStr.length == 0){
      if (oneVowel) {
        results.push([idx,1])
      } else {
        results.push([idx,0])
      }
    } else {
      results.push([idx,newStr.length])
      console.log(newStr)
    }
  })
  results = results.sort((a,b)=> b[1] - a[1])
  return results
  return results.map(c=>strings[c[0]]);
  }

console.log(sortStringsByVowels(["aa","eee","oo","iiii"]))
console.log(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]))
console.log(sortStringsByVowels(["every","bataux","is","waaaay","loose"]))
console.log(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]))