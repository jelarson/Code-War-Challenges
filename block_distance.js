// https://www.codewars.com/kata/52998bf8caa22d98b800003a/train/javascript

function manhattanDistance(pointA, pointB){
  return (Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]))
}

console.log(manhattanDistance([5,4],[3,2]))
