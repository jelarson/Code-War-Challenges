// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

var arrayLeaders = numbers => {
  const ans = []
  numbers.forEach((num, idx) => {
    if (num > numbers.slice(idx+1).reduce((a,b)=>a+b, 0)){
      ans.push(num)
    }
  })
  return ans
}

console.log(arrayLeaders([1,2,3,4,0]))
console.log(arrayLeaders([16,17,4,3,5,2]))
console.log(arrayLeaders([-36,-12,-27]))

// top answers

// one liner with filter

var arrayLeaders = numbers => {
  return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)}

// short answer

arrayLeaders=n=>n.filter((e,i)=>e>n.slice(i+1).reduce((a,b)=>a+b,0))
