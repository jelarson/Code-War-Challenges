// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

function productArray(numbers){
  const ans = []
  numbers.forEach(num=>{
    ans.push(numbers.reduce((a,b)=>a*b, 1) / num)
  })
  return ans
}

console.log(productArray([3,27,4,2]))