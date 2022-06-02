// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

function fiveLine(s){
  var r = s.trim()
  var str = r
  for (let i = 2; i < 6; i++) {
    str = str + '\n' + r.repeat(i)
  }
  return str
}