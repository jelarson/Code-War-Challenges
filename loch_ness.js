// https://www.codewars.com/kata/55ccdf1512938ce3ac000056/train/javascript

function isLockNessMonster(s) {
  return ['tree fiddy', '3.50', 'three fifty'].some(v=>s.includes(v))
}