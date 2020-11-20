// https://www.codewars.com/kata/5d0365accfd09600130a00c9/train/javascript

function solve(arr){
  const ans = []
  const maxs = []
  const mins = []
  arr.forEach(subArr=>{
    maxs.push(Math.max(...subArr))
    mins.push(Math.min(...subArr))
  })
  ans.push(maxs.reduce((a,b)=>a*b,1))
  ans.push(mins.reduce((a,b)=>a*b,1))
  for (let i = 0; i < maxs.length; i++){
    for (let b = 0; b < 2; b++){
      [maxs, mins][b][i]
    }
  }
  return [maxs, mins]
}

console.log(solve([[10,-15],[-1,-3]]))
console.log(solve([[1, 2],[3, 4]]))

// crazy long solution

function solve(arr){
  var max=-Infinity;
  if (arr.length==2)
  {
    for (var i=0; i<arr[0].length; ++i)
    for (var j=0; j<arr[1].length; ++j)
    if (arr[0][i]*arr[1][j]>max)
    max=arr[0][i]*arr[1][j];
    return max
  }
  if (arr.length==3)
  {
    for (var i=0; i<arr[0].length; ++i)
    for (var j=0; j<arr[1].length; ++j)
    for (var k=0; k<arr[2].length; ++k)
    if (arr[0][i]*arr[1][j]*arr[2][k]>max)
    max=arr[0][i]*arr[1][j]*arr[2][k];
    return max
  }
  if (arr.length==4)
  {
    for (var i=0; i<arr[0].length; ++i)
    for (var j=0; j<arr[1].length; ++j)
    for (var k=0; k<arr[2].length; ++k)
    for (var l=0; l<arr[3].length; ++l)
    if (arr[0][i]*arr[1][j]*arr[2][k]*arr[3][l]>max)
    max=arr[0][i]*arr[1][j]*arr[2][k]*arr[3][l];
    return max
  }
  if (arr.length==5)
  {
    for (var i=0; i<arr[0].length; ++i)
    for (var j=0; j<arr[1].length; ++j)
    for (var k=0; k<arr[2].length; ++k)
    for (var l=0; l<arr[3].length; ++l)
    for (var m=0; m<arr[4].length; ++m)
    if (arr[0][i]*arr[1][j]*arr[2][k]*arr[3][l]*arr[4][m]>max)
    max=arr[0][i]*arr[1][j]*arr[2][k]*arr[3][l]*arr[4][m];
    return max
  }
  if (arr.length==6)
  {
    for (var i=0; i<arr[0].length; ++i)
    for (var j=0; j<arr[1].length; ++j)
    for (var k=0; k<arr[2].length; ++k)
    for (var l=0; l<arr[3].length; ++l)
    for (var m=0; m<arr[4].length; ++m)
    for (var n=0; n<arr[5].length; ++n)
    if (arr[0][i]*arr[1][j]*arr[2][k]*arr[3][l]*arr[4][m]*arr[5][n]>max)
    max=arr[0][i]*arr[1][j]*arr[2][k]*arr[3][l]*arr[4][m]*arr[5][n];
    return max
  }
  return arr.length
}

// nested for loops

function solve(a) {
  let min = 1, max = 1;
  for (let x of a) {
    let cur = [];
    for (let y of x) cur.push(y * min), cur.push(y * max);
    min = Math.min(...cur);
    max = Math.max(...cur);
  }
  return max;
}

// short answer - for loop and reducer

function solve(arr){
  let a = arr[0];
  for(let i=1; i<arr.length; i++){
    a = arr[i].reduce((ar,v)=> [...ar, ...a.map(n=> v*n)], []);
  }
  return Math.max(...a);
}