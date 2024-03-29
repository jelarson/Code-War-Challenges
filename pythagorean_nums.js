// https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript

function isPythagoreanTriple(integers) {
  var sorted = integers.sort((a,b) => a - b);
  return sorted[0]**2 + sorted[1]**2 == sorted[2]**2
}

function isPythagoreanTriple(nums) {
  const [a,b,c] = nums.sort((a,b) => a - b)

  return a**2 + b**2 === c**2
}

function isPythagoreanTriple([a,b,c],p=(a,b,c)=>a*a+b*b==c*c) {
  return p(a,b,c) || p(a,c,b) || p(c,b,a);
}