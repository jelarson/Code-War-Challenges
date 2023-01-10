// https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript

var ans = 0;
var hotpo = function(n){
    if (n==1) {
      return ans;
    } else {
      ans++;
      return n%2 == 0 ? hotpo((n/2)) : hotpo((3*n+1));
    }
    
}

var hotpo = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
  }
}