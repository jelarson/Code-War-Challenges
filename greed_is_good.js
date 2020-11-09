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

// short answer

function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}

// while loop and conditional hell

function score( dice ) {
  var six=0, five=0, four=0, three=0, too=0, one=0;
  var i = 0;
  while (i < 5) {
    if (dice[i] == 6) { six++; }
    if (dice[i] == 5) { five++; }
    if (dice[i] == 4) { four++; }
    if (dice[i] == 3) { three++; }
    if (dice[i] == 2) { too++; }
    if (dice[i] == 1) { one++; }
    i++;
  }
  var r = 0;
  if (one > 2) { r += 1000; one -= 3;}
  if (six > 2) { r += 600; }
  if (five > 2) { r += 500; five -= 3;}
  if (four > 2) { r += 400; }
  if (three > 2) { r += 300; }
  if (too > 2) { r += 200; }
  r += one * 100;
  r += five * 50;
  return r;
}

// object with regex

function score( dice ) {
  if (dice.length !== 5) return 0;
  
  let diceStr = dice.sort().join('');
  let score = 0;
  const rules = [
    { reg: /111/, score: 1000 },
    { reg: /666/, score: 600 },
    { reg: /555/, score: 500 },
    { reg: /444/, score: 400 },
    { reg: /333/, score: 300 },
    { reg: /222/, score: 200 },
    { reg: /1/,   score: 100 },
    { reg: /5/,   score: 50 },
  ];
  
  rules.forEach(rule => {
    while (rule.reg.test(diceStr)) {
      diceStr = diceStr.replace(rule.reg, '');
      score += rule.score;
    }
  });
  
  return score;
}