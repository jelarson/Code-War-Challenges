// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

function dashatize(num) {
  if (isNaN(num)){
    return String(num)
  }
  let ans = []
  const arr = [...String(Math.abs(num))]
  let previousOdd = true
  arr.forEach(c => {
    if (c % 2 !== 0){
      if(!previousOdd){
        ans.push('-')
        }
      ans.push(c)
      ans.push('-')
      previousOdd = true
    } else {
      ans.push(c)
      previousOdd = false
    }
  })
  if (ans[ans.length -1] === '-'){
    ans = ans.slice(0, ans.length -1)
  }
  return ans.join('')
}

console.log(dashatize(274))
console.log(dashatize(5311))
console.log(dashatize(86320))