// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
  if (num <= 2){
    if (num === 2) {
      return true
    } else {
      return false
    }
  } else {
    if (num % 2 === 0){
      return false
    } else {
      let half = num /2 + 1
      for (let i = 3; i <= half; i+=2){
        if (num % i === 0){
          return false
        }
      }
      return true
    }
  }
}

console.log(isPrime(37))
console.log(isPrime(26))
console.log(isPrime(69))

// Top answer

function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}