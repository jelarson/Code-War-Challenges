// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

function pipeFix(numbers){
  const max = Math.max(...numbers)
  const min = Math.min(...numbers)
  const ans = []
  for (let i = min; i <= max; i++){
    ans.push(i)
  }
  return ans
}

console.log(pipeFix([2,4,7,9]))