// https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript

function maxRot(n){
  let ans = n
  let arr = String(n).split('')
  for(let i = 0; i < arr.length; i++){
    arr.push(arr.splice(i,1))
    const num = Number(arr.join(''))
    if(num > ans) ans = num
  }
  return ans
}