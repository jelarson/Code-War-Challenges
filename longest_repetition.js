// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

function longestRepetition(s) {
  let ans = ''
  let count = 0
  s.split('').forEach((char, idx, arr) => {
    let currentStreak = 1
    for(let i = idx; i < arr.length - 1; i++){
      if (arr[i+1] === char){
      currentStreak++
      } else{
        break
      }
    }
    if (currentStreak > count) {
      count = currentStreak
      ans = arr[idx]
    } 
  })
  return [ans, count];
}

// console.log(longestRepetition("aaaabb"))
console.log(longestRepetition("bbbaaabaaaa"))
// console.log(longestRepetition("cbdeuuu900"))
// console.log(longestRepetition("abbbbb"))
// console.log(longestRepetition("aabb"))