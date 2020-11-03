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
  }
  if (newArr.length > 1 && newArr.length %2 !== 0){
    newArr.unshift(array[array.length-1])
  }
  return tourney(newArr, array2)
}

// console.log(tourney([9, 5, 4, 7, 6, 3, 8, 2]))
// console.log(tourney([9, 5, 4, 7, 6, 3, 8]))
console.log(tourney([ 59, 62, 51, 56, 29, 70, 92, 49, 58, 39, 1, 3, 67, 82 ]))