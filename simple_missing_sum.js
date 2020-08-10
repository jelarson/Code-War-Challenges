// https://www.codewars.com/kata/5a941f3a4a6b34edf900006f/train/javascript

function solve(arr) {
  let newArr = [...arr]
  let currentIdx = 0

  arr.forEach(num => {
    for (let i = currentIdx + 1; i < arr.length; i++){
      newArr.push(num + arr[i])
    }
    currentIdx++
  })

  newArr =[...new Set(newArr.sort(function(a,b) { return a - b}))]
  // for (i = 1; i < Math.max(newArr); i++){
  //   if (!newArr.includes(i)){
  //     return i
  //   }
  // }
  return (newArr)

}

console.log(solve([4,1,2,3,12]))

// top answer

function solve(arr) {
  var sum = 0
  var newArr = arr.sort((a,b) => a-b )
  
  for (i of newArr){
    if (i > sum +1) break;
    sum += i
  }
  
  return sum + 1
}