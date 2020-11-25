// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  const ans = []
  String(num).split('').forEach((c, idx, arr)=>{
    if (c > 0)ans.push(c + Array(arr.length-idx-1).fill(0).join(''))
  })
  return ans.join(' + ')
}

console.log(expandedForm(12))
console.log(expandedForm(70304))