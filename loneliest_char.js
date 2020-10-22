// https://www.codewars.com/kata/5f885fa9f130ea00207c7dc8/train/javascript

function loneliest(str) {
  let leader
  let leaderCount = 0
  str.trim().split('').forEach((letter, idx, arr) => {
    if (letter !== ' '){
      if (leader){
        let left = 0
        let right = 0
        for (let i = idx + 1; i < arr.length; i++){
          if (arr[i] === ' '){
            right++
          } else {
            i+= arr.length
          }
        }
        for (let i = idx - 1; i >= 0; i--){
          if (arr[i] === ' '){
            left++
          } else {
            i= -1
          }
        }
        if (right + left === leaderCount){
          leader.push(letter)
        }
        if (right + left > leaderCount){
          leader = [letter]
          leaderCount = right + left
        }
      } else {
        leader = [letter]
        let right = 0
        for (let i = idx + 1; i < arr.length; i++){
          if (arr[i] === ' '){
            right++
          } else {
            i+= arr.length
          }
        }
        leaderCount = right
      }
    }
  })
  return leader
}

console.log(loneliest('abc d   ef  g   h i j      '))

// top answers - regex

function loneliest(str) {
  str = str.trim();
  let chars = str.split(/\s*/);
  let spaces = str.split(/\S/).map(x => x.length);
  let spacesPerChar = chars.map((c, i) => spaces[i] + spaces[i + 1]);
  let spaceSize = spacesPerChar.reduce((t, a) => t > a ? t : a);
  return chars.filter((c, i) => spacesPerChar[i] === spaceSize);
}

// top answer

const loneliest = (str) => {
  str = str.trim();
  let result = []; let maxSpace = 0;
  for(let i = 0; i < str.length; i++) {
      let countSpace = 0;
      if(str[i] === " ") continue;
      for(let j = i - 1;j>=0;j--) {
          if(str[j]!=" ") break;
          countSpace++;
      }
      for(let j = i + 1;j < str.length;j++) {
          if(str[j]!=" ") break;
          countSpace++;
      }
      if(countSpace > maxSpace) {
          result = [str[i]];
          maxSpace = countSpace;
      } 
      else if(countSpace === maxSpace) {
          result.push(str[i]);
      }
  }
  return result;
}

// Ryan's answer

function loneliest(str) {
  let prev
  const obj = [...str.trim()].reduce((obj, char) => {
    if(char === ' '){
      obj.next = (obj.next || 0) + 1
      prev && (obj[prev] = obj[prev] + 1)
    } else {
      obj[char] = obj.next || 0
      delete obj.next
      prev = char
    }
    return obj
  }, {})
  const number = Math.max(...Object.values(obj))
  return Object.keys(obj).filter(key => obj[key] === number)
}