// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

function sumMul(n,m){
  var ans = 0;
  for (let i = 0; i * n < m; i++) {
    ans += i * n
  }
  return ans > 0 ? ans : "INVALID"
}