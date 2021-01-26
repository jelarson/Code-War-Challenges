// https://www.codewars.com/kata/550e9fd127c656709400024d/train/javascript

function cubeSum(n, m){
  const sorted = [n,m].sort((a,b)=>a-b)
  let ans = 0
  for(let i = sorted[0] + 1; i <= sorted[1]; i++){
    ans+=i**3
  }
  return ans
}

console.log(cubeSum(5,0))