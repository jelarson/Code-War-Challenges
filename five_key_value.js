// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/solutions/javascript

function giveMeFive(obj){
  // for (var in obj)
  let ans = []
  Object.keys(obj).forEach(x=>{
    if (x.length == 5) {
      ans.push(x)
    }
    if (obj[x].length == 5) {
      ans.push(obj[x])
    }
  })
  return ans
}