// https://www.codewars.com/kata/5ffc226ce1666a002bf023d2/train/javascript

const solution = mtrx => {
  for(let i = 0; i < mtrx.length; i++){
    if (mtrx[i].includes('>') && mtrx[i].includes('x')){
      if (mtrx[i].indexOf('>') < mtrx[i].indexOf('x')){
        return true
      }
    }
  }
  return false
 }

 console.log(solution([['>', ' '], [' ', 'x']]))