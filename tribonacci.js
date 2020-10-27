// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
  for (let i = 2; i < n-1; i++){
    signature.push(signature[i] + signature[i-1] + signature[i-2])
  }
  return signature.slice(0,n)
}

// console.log(tribonacci([1,1,1],10))
// console.log(tribonacci([1,2,3],10))
// console.log(tribonacci([2,4,6],10))
console.log(tribonacci([.5,.5,.5],30))