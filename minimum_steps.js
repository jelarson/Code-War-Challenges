// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript

function minimumSteps(numbers, value){
  const sorted = numbers.sort((a,b)=>a-b)
  if (sorted[0] > value){
    return 0
  }
  for(let i = 1; i < sorted.length; i++){
    if (sorted.slice(0,i+1).reduce((a,b)=>a+b,0) >= value){
      return i
    }
  }
}

console.log(minimumSteps([4,6,3], 7))
console.log(minimumSteps([8,9,10,4,2], 23))
console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464))