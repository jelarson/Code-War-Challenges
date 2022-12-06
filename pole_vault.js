// https://www.codewars.com/kata/5786f8404c4709148f0006bf/train/javascript

function startingMark(bodyHeight){
  let conv = 1.22 / .31;
  return Math.round((10.67 + conv * bodyHeight - conv * 1.83) * 100) / 100;
}