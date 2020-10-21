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
