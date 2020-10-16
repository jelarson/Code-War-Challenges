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
  for(let i = 0; i <= 9; i++){
    if (eval(`${Number(exprArr[0].replace('?', i))} ${opp} ${Number(exprArr[1].replace('?', i))}`) === Number(a.replace('?', i))){
      return i
    }
  } 
  return -1
}

console.log(solveExpression('1+1=?'))
// 2
console.log(solveExpression('123*45?=5?088'))
// 6
console.log(solveExpression('-5?*-1=5?'))
// 0
console.log(solveExpression('-5?--1=5?'))
// -1
console.log(solveExpression('19--45=5?'))
// -1