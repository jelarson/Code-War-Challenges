// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

const removeConsecutiveDuplicates = s => {
  const arr = s.split(' ')
  const idxArr = []
  for (let i = 1; i < arr.length; i++){
    if (arr[i] === arr[i-1]){
      idxArr.push(i-1)
    }
  }
  idxArr.forEach(num => {
    arr[num] = undefined
  })
  return arr.filter(a => a).join(' ')
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

// top answer - one liner

const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')

// for loop

function removeConsecutiveDuplicates(arr){
  var split = arr.split(' ')
  var array = []
  for(var i = 0; i < split.length; i++){
      if(split[i+1] !== split[i]){
         array.push(split[i])
      }
  }
  var result = array.join(' ')
  return result
}