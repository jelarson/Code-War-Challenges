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

// top answer

// chain if and while loop

function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}

// no while loop

function bouncingBall(h, b, w) {
  if (h <= w || b >= 1) return -1;
  let r = Math.floor(Math.log(w/h)/Math.log(b)) * 2 + 1;
  if (Number.isNaN(r)) return -1;
  return r;
}

// recursive function

function bouncingBall(h,  bounce,  window) {
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
    return -1;
  }

  var newHeight = h * bounce;
  return bouncingBall(newHeight, bounce, window) + 2;
}

// recursive one liner

let bouncingBall =f= (h,b,w) => h<=0 || b<=0 || b>=1 || w>=h ? -1 : 2 + f(h*b,b,w)

