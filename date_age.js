// https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript

function datingRange(age){
  return age > 14 ? Math.floor((age / 2)) + 7 + '-' + (age - 7) * 2 : Math.floor(age * .9) + '-' + Math.floor(age * 1.1)
}

datingRange = a => a > 14 ? `${~~(a / 2) + 7}-${a * 2 - 14}` : `${~~(a * 0.9)}-${~~(a * 1.1)}`;