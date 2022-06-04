// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

function threeInOne(arr){
  var ans = []
  for(let i = 1; i <= arr.length/3; i++){
    ans.push(arr.slice(3*(i-1),3*i).reduce((a,b)=>a+b,0))
  }
  return ans
}