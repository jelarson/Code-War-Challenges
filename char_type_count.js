// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

function solve(s){
  const ans = [0,0,0,0]
  s.split('').forEach(letter=>{
    const charCode = letter.charCodeAt(0)
    if (65 <= charCode && charCode <= 90) ans[0]++
    else if (97 <= charCode && charCode <= 122) ans[1]++
    else if (48 <= charCode && charCode <= 57) ans[2]++
    else (ans[3]++)
  })
  return ans
 }

 console.log(solve("Codewars@codewars123.com"))