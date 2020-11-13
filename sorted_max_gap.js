// https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript

function maxGap (numbers){
  const sorted = numbers.sort((a,b)=>b-a)
  return Math.max(...sorted.slice(1).map((num, idx)=> sorted[idx] - num))
}

console.log(maxGap([13,10,2,9,5]))

// top asnwers

// one liner

const maxGap = a => Math.max(...a.sort((x, y) => x - y).map((e, i, a) => i > 0 ? Math.abs(e - a[i - 1]) : 0));

