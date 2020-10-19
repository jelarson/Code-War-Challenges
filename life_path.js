// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/train/javascript

function lifePathNumber(dateOfBirth) {
  let ans = 0
  function recur(digits) {
    const newNum = Array.from(digits.toString()).map(Number).reduce(function(a,b){return a+b}, 0)
    if (String(newNum).length > 1){
      return recur(String(newNum))
    } else {
      return newNum
    }
  }
  dateOfBirth.split('-').forEach(num => {
    const data = recur(num)
    ans+= data
  })
  
  return recur(ans);
}

console.log(lifePathNumber('1879-03-14'))