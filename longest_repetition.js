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

// top answer

const longestRepetition = s => {
  let max = 0;
  let char = ''; 
  for (let i = 1, l = s.length, c = 1; i <= l; i++) {
    if (s[i] === s[i - 1]) c++;
    else {
      if (c > max) {
        max = c;
        char = s[i - 1];   
      }
      c = 1;
    }
  }
  return [char, max];
}

// top answer - sort and splice
const longestRepetition = s => s ?
  s.match(/(.)\1*/g)
    .map((s, i) => [s[0], s.length, i])
    .sort((a, b) => (b[1] - a[1]) || (a[2] - b[2]))[0]
    .splice(0, 2) :
  ['', 0];

// regex top answer

const longestRepetition = s => (s.match(/(.)(\1*)/g) || []).reduce((a,e) => e.length > a[1] ? [e[0],e.length] : a,['',0]);