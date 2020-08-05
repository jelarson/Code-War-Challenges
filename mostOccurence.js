// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

function highestRank(arr){
  let occurences = 0
  let mostNum = 0

  arr.forEach(num => {
    let currentOccurence = 0
    arr.forEach(dig => {
      if (num === dig){
        currentOccurence++
      }
    })
    if (currentOccurence > occurences){
      mostNum = num
    }
    if (currentOccurence === occurences){
      if (num > mostNum){
        mostNum === num
      }
    }
  })
  return mostNum
  }

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))

// top answer

function highestRank(arr){
  var obj = {};
  arr.forEach(function(elem){
     if(obj[elem] === undefined)
       obj[elem] = 0;
     obj[elem]++;
  });
  var keys = Object.keys(obj), highest = 0, key;
  keys.forEach(function(elem){
     if(obj[elem] >= highest)
     {
        highest = obj[elem];
        key = elem;
     }
  })
  return parseInt(key);
}