// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

function noBoringZeros(n) {
  const numArr = String(n).split('').reverse()
  for(let i = 0; i < numArr.length; i++){
    if (numArr[i] == '0'){
      numArr[i] = '#'
    } else {
      i = n.length;
    }
  }
  return Number(numArr.reverse().join('').split('#').join(''))
}

console.log(noBoringZeros(1450))
console.log(noBoringZeros(-1450))

function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}