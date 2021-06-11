// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript

function well(x){
  var count = [].concat.apply([], x).filter(c=>c.toLowerCase() == 'good').length;
  return count == 0 ? 'Fail!' : count < 3 ? 'Publish!' : 'I smell a series!'
}