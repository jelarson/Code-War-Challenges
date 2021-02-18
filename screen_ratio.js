// https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript

function findScreenHeight(width, ratio) {
  const splitStr = ratio.split(':')
  return `${width}:${width / splitStr[0] * splitStr[1]}`
}

console.log(findScreenHeight(1024, '4:3'))