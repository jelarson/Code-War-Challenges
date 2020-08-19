// https://www.codewars.com/kata/5239f06d20eeab9deb00049b

// fibonacci(4); 
// should return  [0,1,1,2]

function fibonacci(n) {
  const sequence = [0,1]
  if (n === 2){
    return sequence
  }
  if (n === 1){
    return [0]
  }
  for (let i = 2; i < n; i ++){
    const nextNum = sequence[sequence.length -2] + sequence[sequence.length-1]
    sequence.push(nextNum)
  }
  return sequence
}

console.log(fibonacci(4))