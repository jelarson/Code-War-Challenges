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

// top answers

// absolute value

function jumpingNumber(n){
  let arr = n.toString().split('')
  for(i=0; i < arr.length-1; i++){
    if(Math.abs(arr[i] - arr[i+1]) !== 1 ){
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}

// one liner

const jumpingNumber = n => n.toString().split``.every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) === 1) ? 'Jumping!!' : 'Not!!';

// .every method

function jumpingNumber(n){
  return [...n+''].every((x,i,a)=>!i||x==+a[i-1]+1||x==a[i-1]-1)?'Jumping!!':'Not!!'
}