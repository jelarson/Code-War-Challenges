// https://www.codewars.com/kata/5965144da82d479517000001/train/javascript

function weRateDogs(str, rating){
  return str.replace(/(.\/)/g, rating + '/')
}