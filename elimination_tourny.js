// https://www.codewars.com/kata/5f631ed489e0e101a70c70a0/train/javascript

// const tourney = array => {
//   if (array.length === 1){
//     return array
//   }
//   const newArr = []
//   for (let i = 1; i < array.length; i+=2){
//     array[i] >= array[i - 1] ? newArr.push(array[i]) : newArr.push(array[i-1])
//   }
//   return tourney(newArr)
// }
function tourney(array, array2 = []) {
  array2.push(array)
  if (array.length === 1){
    return array2
  }
  const newArr = []
  for (let i = 1; i < array.length; i+=2){
    array[i] >= array[i - 1] ? newArr.push(array[i]) : newArr.push(array[i-1])
    if (i === array.length -2){
      newArr.unshift(array[array.length -1])
    }
  }
  return tourney(newArr, array2)
}

// console.log(tourney([9, 5, 4, 7, 6, 3, 8, 2]))
// console.log(tourney([9, 5, 4, 7, 6, 3, 8]))
// console.log(tourney([ 59, 62, 51, 56, 29, 70, 92, 49, 58, 39, 1, 3, 67, 82 ]))
console.log(tourney([50,79,37,43,75,65,95,39,39,34,85,68,47,50]))

// ryan's solution

const tourney = (array, results = []) => {
  if(!results.length) results.push(array)
  const matchups = array.reduce((obj, item, idx) => {
    const game = Math.floor(idx / 2)
    obj[game] = obj[game] ? [...obj[game], item] : [item]
    return obj
  }, {})
  const nextRound = Object.values(matchups).reduce((arr, items) => items.length === 2 ? [...arr, Math.max(...items)] : [...items, ...arr], [])
  results.push(nextRound)
  if(nextRound.length === 1){
    return results
  }
  return tourney(nextRound, results)
}

// top answer

const tourney = arr => {
  
  if (arr.length === 1)
    return [ arr ];
  
  let next = arr.length % 2 ? arr.slice(-1) : [];

  for (let i = 0; i < arr.length - 1; i += 2)
    next.push(Math.max(arr[i], arr[i + 1]));
  
  return [ arr ].concat(tourney(next));
  
}

// while loop

const tourney = array => {
  let finalResult = [array],
    roundResult = [...array],
    currentlyTracking = [];

  while (finalResult.slice(-1)[0].length > 1) {
    if (roundResult.length % 2 != 0) {
      currentlyTracking.unshift(roundResult.pop());
    }

    if (roundResult.length === 0) {
      finalResult.push(currentlyTracking.slice(0));
      roundResult = currentlyTracking.slice(0);

      currentlyTracking = [];
    
    } else {
      let doingChanges = currentlyTracking.push(
        Math.max(...roundResult.splice(0, 2))
      );
    }
  }
  return finalResult;
};