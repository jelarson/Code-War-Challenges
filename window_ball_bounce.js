// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h,  bounce,  window) {
  if (bounce >= 1 || bounce < 0){
    return -1
  }
  let ans = 0
  while(h > window){
    ans+=2
    h*=bounce
  }
  return ans -1
}

console.log(bouncingBall(3.0, 0.66, 1.5))
console.log(bouncingBall(30.0, 0.66, 1.5))