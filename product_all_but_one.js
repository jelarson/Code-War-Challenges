// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

function productArray(numbers){
  const ans = []
  numbers.forEach(num=>{
    ans.push(numbers.reduce((a,b)=>a*b, 1) / num)
  })
  return ans
}

console.log(productArray([3,27,4,2]))

// top answers

function productArray(numbers)
{
  var sum = numbers.reduce((x, y) => x * y);
  return numbers.map(x => sum / x);
}

// short answer - map

function productArray(numbers){
  return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}

// shortest answer

const productArray=n=>n.map(a=>n.reduce((b,c)=>b*c)/a);