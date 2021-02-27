// https://www.codewars.com/kata/5bb3e299484fcd5dbb002912/train/javascript

function pyramid(balls) {
  let count = 0;
  let ballsPerRow = 0;
  
  for(let x=0; x<balls; x++) {
    count++;
    ballsPerRow = ballsPerRow + count;
    if(ballsPerRow == balls) {
      return count;
    }
    if(balls < ballsPerRow) {
      return count - 1;
    }
  }
}

console.log(pyramid(1))
console.log(pyramid(4))
console.log(pyramid(20))
console.log(pyramid(100))