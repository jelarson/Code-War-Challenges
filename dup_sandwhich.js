// https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/train/javascript

function duplicateSandwich(a) {
  let firstIdx
  let lastIdx
  for (let i = 0; i < a.length; i++){
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
      firstIdx = a.indexOf(a[i]) +1
      lastIdx = a.lastIndexOf(a[i])
      i+=a.length
    }
  }
  return a.slice(firstIdx, lastIdx)
}

console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]))
// [2, 3, 4, 5, 6]
console.log(duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]))
// ["Hello", "Example", "hello"]
console.log(duplicateSandwich([true, false, true]))
// [false]

// top answer using .find method

const duplicateSandwich = (list) => {
  let duplicated = [...list].find(a => list.indexOf(a) !== list.lastIndexOf(a))
  return list.slice(list.indexOf(duplicated) + 1, list.lastIndexOf(duplicated))
}

// same logic as my solution, for return in for loop

function duplicateSandwich(a) {
  for(let i = 0; i < a.length - 1; i++)
    if(a.indexOf(a[i]) !== a.lastIndexOf(a[i]))
      return a.slice(a.indexOf(a[i]) + 1, a.lastIndexOf(a[i]));
}