// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, letter){  
  let count = 0;
  str.split('').forEach(x=>{
    if(x == letter)count++
  })
  return count
}