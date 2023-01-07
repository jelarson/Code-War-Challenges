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