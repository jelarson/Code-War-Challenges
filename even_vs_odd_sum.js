// https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

function evenOrOdd(str) {
  const even = []
  const odd = []
  str.split('').forEach(num=>{
    num%2 === 0 ? even.push(Number(num)) : odd.push(Number(num))
  })
  const count = [even.reduce((a,b)=>a+b,0), odd.reduce((a,b)=>a+b,0)]
  return count[0] > count[1] ? "Even is greater than Odd" : count[0] < count[1] ? "Odd is greater than Even" : "Even and Odd are the same"
}
console.log(evenOrOdd('123'))
console.log(evenOrOdd('1223'))
console.log(evenOrOdd('12223'))