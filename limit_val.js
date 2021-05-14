// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit){
  let ans = true
    a.forEach(num=>{
      if(num > limit){
        ans = false
      }
    })
  return ans
}