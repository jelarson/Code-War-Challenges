// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

function solve(arr){
  return arr.filter(x=>!arr.includes(x*-1))[0]
};

console.log(solve([-3,1,2,3,-1,-4,-2]))
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]))