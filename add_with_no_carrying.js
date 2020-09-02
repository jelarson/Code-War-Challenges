// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

function add(num1, num2) {
  let nummy1 = String(num1).split('')
  let nummy2 = String(num2).split('')

  const minLen = Math.min(nummy1.length, nummy2.length)
  const lenDiff = Math.abs(nummy1.length - nummy2.length)
  let ans = []

  if (nummy1.length > minLen){
    const bjork = nummy1.splice(0, lenDiff)
    ans.push(...bjork)
  }
  if (nummy2.length > minLen){
    const bjork = nummy2.splice(0, lenDiff)
    ans.push(...bjork)
  }
  for(let i = 0; i < minLen; i++){
    ans.push(Number(nummy1[i]) + Number(nummy2[i]))
  }

 return Number(ans.join(''))
}

console.log(add(122, 81))

// 16, 18 = 214
// 122, 81 = 1103