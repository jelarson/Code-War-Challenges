// https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/javascript

function sumConsecutives(s) {
  const ans = []
  let active = true
  let currentStrkNum = 0
  let currentStrk = []

  for (let i = 0; i < s.length; i++){
    currentStrkNum = s[i]
    
    if (s[i+1] === currentStrkNum){
      if (currentStrk.length < 1){
        currentStrk.push(s[i])
      }
      currentStrk.push(s[i+1])
    } else {
      if (currentStrk.length < 1){
        currentStrk.push(s[i])
      }
      ans.push(currentStrk.reduce(function(a,b){return a+b}, 0))
      currentStrk = []
    }
    }
  
  
  return ans
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))
console.log(sumConsecutives([1,1,7,7,3]))

// top answer with reducer

function sumConsecutives(s) {
  return s.reduce(function(prev, curr, i, arr) {
    if(curr != arr[i - 1]) prev.push(curr);
    else prev[prev.length - 1] += curr;
    return prev;
  }, []);
}

// top answer - for loop

function sumConsecutives(s) {
  var sum = 0,
  sums = [];
  for( var i = 0; i < s.length; i++){
    sum += s[i];
    if(s[i] != s[i+1]){
      sums.push(sum);
      sum = 0;
    }
  }
  return sums;
}