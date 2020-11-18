// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

function jumpingNumber(n){
  const str = String(n)
  for (let i = 0;  i < str.length-1; i++){
    if (Number(str[i]) +1 !== Number(str[i+1]) && Number(str[i]) -1 !== Number(str[i+1])){
      return "Not!!"
    }
  }
  return "Jumping!!"
}

console.log(jumpingNumber(1))
console.log(jumpingNumber(23))
console.log(jumpingNumber(32))
console.log(jumpingNumber(123234545))
console.log(jumpingNumber(123234645))