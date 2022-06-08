// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript

function countGrade(scores){
  var obj = {'S':0, 'A':0, 'B':0, 'C':0, 'D': 0, 'X':0}
  scores.forEach(x=> {
    if (x == 100) {
      obj['S']++
    } else if (x >= 90) {
      obj['A']++
    } else if (x >= 80) {
      obj['B']++
    } else if (x >= 60) {
      obj['C']++
    } else if (x >= 0) {
      obj['D']++
    } else {
      obj['X']++
    }
  })
  return obj;
}