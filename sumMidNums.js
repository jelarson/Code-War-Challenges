// https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript/me/best_practice

function sumArray(array) {
  if(array !== null){
  const sortedArr = array.sort(function(a,b){return a - b})
  return sortedArr.slice(1, sortedArr.length - 1).reduce(function(a,b){return a + b;}, 0)
  } else {
    return 0
  }
}

// top answer

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0