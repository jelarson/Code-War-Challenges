// https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript

function slope(points)
{
  [a,b,c,d] = points
  console.log(a,b,c,d)
  return a - c == 0 ? 'undefined' : String((b - d) / (a - c))
}