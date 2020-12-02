// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count (string) {  
  const obj = {}
   string.split('').forEach(let => {
     obj[let] ? obj[let]++ : obj[let] = 1
   })
   return obj
}

console.log(count("aba"))