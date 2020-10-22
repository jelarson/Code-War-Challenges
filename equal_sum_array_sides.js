// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr){
  for(let i = 0; i<arr.length; i++){
    const firstHalfSum = arr.slice(0, i+1).reduce(((a, b)=> a+b),0)
    const secondHalfSum = arr.slice(i).reduce(((a, b)=> a+b),0)
    if (firstHalfSum === secondHalfSum){
      return i
    }
  }
  return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([1,2,3,4,5,6]))

// top answer

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));