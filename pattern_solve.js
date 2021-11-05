// https://www.codewars.com/kata/5254bd1357d59fbbe90001ec/train/javascript

function getScore(n) {
  let ans = 0;
  for (let i = n; i > 0; i--){
    ans += i
  }
  return ans*50;
}