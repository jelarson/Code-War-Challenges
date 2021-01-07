// https://www.codewars.com/kata/59a1ea8b70e25ef8e3002992/train/javascript

function describeTheShape( angles ){
  return angles > 2 ? `This shape has ${angles} sides and each angle measures ${180 - 360/angles}` : `this will be a line segment or a dot`
}

console.log(describeTheShape(6))