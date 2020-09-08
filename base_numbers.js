// https://www.codewars.com/kata/5f47e79e18330d001a195b55/train/javascript

function baseFinder(seq){
  const arr = seq.join('').split('')

  return [... new Set(arr)].length
}

console.log(baseFinder(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']))

// top answer

function baseFinder(seq){
  return new Set(seq.join``).size
}