// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
  const len = x.filter(x=>x=='good').length
  return len > 2 ? 'I smell a series!' : len > 0 ? 'Publish!' : 'Fail!'
}