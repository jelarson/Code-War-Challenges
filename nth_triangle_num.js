// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

function triangular( n ) {
  const arr = [0]
  for (let i = 0; i < n; i++){
    arr.push(arr[i] + 1)
  }
  return arr.reduce((a,b)=>a+b,0)
}

console.log(triangular(2))
console.log(triangular(4))

// top answers

// ternary

function triangular( n ) {
  return (n > 0) ? ((n * n) + n) / 2 : 0;
}

// sum instead of array

function triangular( n ) {
  var sum = 0;
    for(i = 0; i<=n ; i++){
       sum += i;
    }
  return sum;
}

// one liner

triangular = n => (n > 0) ? ((n * n) + n) / 2 : 0;