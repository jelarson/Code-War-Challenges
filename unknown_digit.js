// https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/javascript

function solveExpression(exp) {
  let b = exp.split('=')[0]
  let a = exp.split('=')[1]
  const minus = {val: (b.slice(1).includes('-') && b.slice(1).indexOf('-') !== b.slice(1).lastIndexOf('-')), opp: '-'}
  const mult = {val: b.includes('*'), opp: '*'}
  const sum = {val: b.includes('+'), opp: '+'}
  const opp = [minus, mult, sum].map((c)=> c.val? c.opp : undefined).filter((c)=> c)[0]
  let exprArr = []
  if (opp === '-'){
    const idx = b.slice(1).indexOf(opp) +1
    exprArr = [b[0].concat(b.slice(1, idx)), b.slice(idx +1) ]
  } else{
    exprArr = b.split(opp)
  }
  const arr = [1,2,3,4,5,6,7,8,9,0]
  for(let i = 0; i <= 9; i++){
    const regex = /[?]/g
    const firstExp = Number(exprArr[0].replace(regex, i))
    const secondExp = Number(exprArr[1].replace(regex, i))
    const ans = Number(a.replace(regex, i))

    if (eval(`${firstExp} ${opp} ${secondExp}`) === ans){
      return i
    }
  } 
  return -1
}

// console.log(solveExpression('1+1=?'))
// 2
// console.log(solveExpression('123*45?=5?088'))
// 6
// console.log(solveExpression('-5?*-1=5?'))
// 0
// console.log(solveExpression('-5?--1=5?'))
// -1
// console.log(solveExpression('19--45=5?'))
// -1

console.log(solveExpression('??*??=302?'))

// top answer

function solveExpression(exp) {
  exp = exp.replace('=','==').replace('--','+');
  for(var i = 0; i < 10; i++){
    if(eval(exp.replace(/\?/g,i)) && !exp.includes(i)){
        if(!/^00+$/.test(exp.replace(/\?/g,i).split('==')[1]))  return i;
    }
  }
  return -1;
}

// short best answer

function solveExpression(s) {
  let possibles = '0123456789'.split``.filter(d => !s.includes(d));
  for (let i = 0; i < possibles.length; i++) if (eval(s.replace(/\?/g, possibles[i]).replace(/=/, '===').replace(/\-\-/, '- -')) && !/^0\d|[^\d]0\d/.test(s.replace(/\?/g, possibles[i]).replace(/=/, '===').replace(/\-\-/, '- -'))) return +possibles[i];
  return -1;
}