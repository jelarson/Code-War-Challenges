// https://www.codewars.com/kata/5b71af678adeae41df00008c/train/javascript

function shortestDistance(a, b, c) {
  const y = Math.sqrt((b*.5)**2 + c**2)
  const z = Math.sqrt(a**2 + (b*.5)**2)
  // return Math.sqrt(z**2 + c**2)
  return z + y
}

console.log(shortestDistance(1,2,3))

function shortestDistance(a, b, c) {
  return Math.min(
    Math.sqrt(Math.pow(a,2) + (b+c) * (b+c)),
    Math.sqrt(Math.pow(b,2) + (a+c) * (a+c)),
    Math.sqrt(Math.pow(c,2) + (a+b) * (a+b))
  );
}