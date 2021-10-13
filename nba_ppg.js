// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd/train/javascript

function pointsPer48(ppg, mpg) {
  return ppg > 0 ? Math.round(ppg/mpg*480)/10 : 0
}