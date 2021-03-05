// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b )
{
   const sorted = [a,b].sort((a,b)=>(a-b))
   let sum = 0
   for (let i = sorted[0]; i <= sorted[1]; i++){
     sum+=i
   }
   return sum
}

console.log(getSum(0,-1))
console.log(getSum(0,1))