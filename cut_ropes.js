// https://www.codewars.com/kata/58ad388555bf4c80e800001e/train/javascript

function cutTheRopes(a) {
  const ropesLeft = []
  function recur(b){
    ropesLeft.push(b.length)
    const arr = b.map(num => num - Math.min(...b)).filter(num => num !== 0)
    if (arr.length >= 1){
      recur(arr)
    }
  }
  recur(a)
  return ropesLeft
}

console.log(cutTheRopes([3, 3, 2, 9, 7]))

// top answers

function cutTheRopes(a) {
  a=a.slice().sort((a,b)=>b-a);
  return Array(a.length).fill().map((_,i)=>i+1).reverse().filter(i=>a[i]!==a[i-1]);
}

// while loop

function cutTheRopes(a) {
  var res = [],
    b = a.slice(),
    min;

  while (b.length !== 0) {
    res.push(b.length);
    min = Math.min(...b);
    b = b.map(i => {
      return i - min;
    }).filter(i => i !== 0);
  }

  return res;
}

