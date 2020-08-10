// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  const classArr = [...classPoints, yourPoints]
  const avg = classArr.reduce(function(a, b){return a + b;}, 0)/classArr.length;
  return yourPoints > avg ? true : false;
}

// top answer

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}