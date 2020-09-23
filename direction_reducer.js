// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr){
  let ans = []
  const obj = {
    'NORTH': 1,
    'SOUTH': -1,
    'EAST': 2,
    'WEST': -2
  }
  function splicer(arr1){
    let madeCuts = false
    let copy = [...arr1]
    if (copy.length <= 1){
      return copy
    }
    for (let i = 0; i < arr1.length - 1; i++){
      if (obj[arr1[i]] + obj[arr1[i+1]] === 0){
        if (copy.length === 2){
          copy = []
        } else {
          copy = arr1.slice(0, i).concat(arr1.slice(i+2))
        }
        madeCuts = true
        break
      }
    }
    if (!madeCuts){
      ans = copy
    } else{
      if (copy.length <= 1){
        ans = copy
      } else {
        splicer(copy)
      }
    }
  }
  splicer(arr)
  return ans
  }

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))
