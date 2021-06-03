// https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

function paul(x){
  const obj = {
    'life':0,
    'eating':1,
    'kata':5,
    'Petes kata':10
  }
  let score = 0
  x.forEach(c=>{
    score += obj[c]
  })
  return score > 100 ? 'Miserable!' : score >= 70 ? 'Sad!' : score >= 40 ? 'Happy!' : 'Super happy!'