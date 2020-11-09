// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

function score( dice ) {
  let score = 0
  const obj = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0
  }
  dice.forEach(die => {
    obj[String(die)]++
  })
  Object.keys(obj).forEach(val => {
    if (obj[val] >= 3){
      if (val === '1'){
        score+=1000
        if (obj[val] > 3){
          score+=(obj[val]-3)*100
        }
      } else {
        score+=Number(val)*100
        if (val=== '5' && obj[val] > 3){
          score+=(obj[val]-3)*50
        }
      }
    } else {
      if (val === '1'){
        score+=obj[val]*100
      }
      if (val === '5'){
        score+=obj[val]*50
      }
    }
  })
  return score
}

console.log(score( [2, 3, 4, 6, 2] ))
console.log(score( [4, 4, 4, 3, 3] ))