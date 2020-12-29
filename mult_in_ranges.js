// https://www.codewars.com/kata/583989556754d6f4c700018e/train/javascript

// Javascript: return multiples into an array
function multiples(s1,s2,s3){
  const arr = []
  const sorted = [s1,s2].sort((a,b)=>a-b)
  for (let i = sorted[1]; i < s3; i+=sorted[1]){
    if(i%sorted[0] === 0) arr.push(i)
  }
  return arr
}

console.log(multiples(2,4,40))