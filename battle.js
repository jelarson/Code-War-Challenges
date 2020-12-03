// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

function goodVsEvil(good, evil){
  let goodVal = 0
  let badVal = 0
  good.split(' ').forEach((val, idx)=> {
    let mult = 3
    if (idx === 0) mult = 1
    if (idx === 1) mult = 2
    if (idx === 4) mult = 4
    if (idx === 5) mult = 10
    goodVal += val*mult
  })
  evil.split(' ').forEach((val, idx)=> {
    let mult = 2
    if (idx === 0) mult = 1
    if (idx === 4) mult = 3
    if (idx === 5) mult = 5
    if (idx === 6) mult = 10
    badVal += val*mult
  })
  return goodVal > badVal ? "Battle Result: Good triumphs over Evil" : goodVal === badVal ? "Battle Result: No victor on this battle field" : "Battle Result: Evil eradicates all trace of Good"
}

console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))