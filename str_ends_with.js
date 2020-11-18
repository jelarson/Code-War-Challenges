// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
  return str.slice(-ending.length) === ending || ending.length === 0
}

console.log(solution('abcde', 'cde'))

// top asnwers

// endsWith method

function solution(str, ending){
  return str.endsWith(ending);
}

// regex

function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

// .match

function solution(str, ending){
  return str.match(ending+"$")==ending;
}