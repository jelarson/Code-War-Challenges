// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []


function partsSums(ls) {
  const ans = [0]
  const currentArr = []
  let lastArrIdx = ls.length - 1
  
  ls.forEach(num => {
    currentArr.push(ls[lastArrIdx])
    lastArrIdx -= 1
    ans.push(currentArr.reduce(function (x,y){return x+y},0))
  })
  return ans.reverse()
}

console.log(partsSums([0,1,3,6,10]))