// https://www.codewars.com/kata/587854330594a6fb7e000057/train/javascript

function mathEngine(arr) {
  const pos = arr.filter(x=>x>0).reduce((a,b)=>a*b,1)
  const neg = arr.filter(x=>x<0).reduce((a,b)=>a+b)
  return pos+neg
}

console.log(mathEngine([1, 2, 3, -4, -5]))