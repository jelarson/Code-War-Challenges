// https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript

function preFizz(n) {
  const arr = []
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr
}

console.log(preFizz(1))
console.log(preFizz(4))