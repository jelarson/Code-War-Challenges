// https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript

function infected(s) {
  let infected = 0;
  let total = 0;
  s.split('X').forEach(str=>{
    if(str.includes('1')){
      infected += str.length
    }
    total += str.length
  })
  return total > 0 ? 100*infected/total : 0;
}

console.log(infected('01000000X000X011X0X'))