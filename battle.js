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

// top answers

// reducer

function goodVsEvil(good, evil) {  
  var getWorth = function( side, worth ) {
    return side.split(' ').reduce( function(result, value, index) { 
      return result + (worth[index] * value);
    }, 0);
  }

  var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
}

// point values in array to match up

function goodVsEvil(good, evil) {
  var worth = [ [1, 2, 3, 3, 4, 10], [1, 2, 2, 2, 3, 5, 10] ];
  var good = good.split(' ').reduce((s,v,i) => s + worth[0][i] * v, 0);
  var evil = evil.split(' ').reduce((s,v,i) => s + worth[1][i] * v, 0);
  if (good > evil) return "Battle Result: Good triumphs over Evil";
  else if (evil > good) return "Battle Result: Evil eradicates all trace of Good";
  else return "Battle Result: No victor on this battle field";
}

// short answer

const goodVsEvil = (good, evil) =>
  (fn => `Battle Result: ${fn(good) === fn(evil) ? `No victor on this battle field` : fn(good) > fn(evil) ? `Good triumphs over Evil` : `Evil eradicates all trace of Good`}`)
  (str => str.split(` `).reduce((pre, val, idx) => pre + val * (str === good ? [1, 2, 3, 3, 4, 10] : [1, 2, 2, 2, 3, 5, 10])[idx], 0));

  