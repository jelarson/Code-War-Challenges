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
  if (array.length === 1){
    return array
  }
  const newArr = []
  for (let i = 1; i < array.length; i+=2){
    array[i] >= array[i - 1] ? newArr.push(array[i]) : newArr.push(array[i-1])
  }
  return tourney(newArr)
}

console.log(tourney([9, 5, 4, 7, 6, 3, 8, 2]))