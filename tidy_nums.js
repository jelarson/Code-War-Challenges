// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

function tidyNumber(n){
  const str = String(n)
  for(let i =0; i < str.length -1; i++){
    if (str[i] > str[i+1]){
      return false
    }
  }
  return true
}

console.log(tidyNumber(2789))
console.log(tidyNumber(1089))

// top answers

// sort and compare

function tidyNumber(n){
  return [...n+=""].sort().join``==n
}

// while loop

function tidyNumber(n) {

  let m = 9;

  while (n) {

    if (n % 10 > m)
      return false;
    
    m = n % 10;
    n = n / 10 | 0;

  }

  return true;

}

// while loop

function tidyNumber(n) {
  let lastDigit = Infinity;
  while (n) {
    const newLastDigit = n % 10;
    if (newLastDigit > lastDigit) {
      return false;
    }
    lastDigit = newLastDigit;
    n = Math.floor(n / 10);
  }
  return true;
}

