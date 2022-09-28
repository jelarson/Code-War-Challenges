// https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7/train/javascript

function sumSquares(a) {
  return a.map(b=>b**2).reduce((c,d)=>c+d,0);
}