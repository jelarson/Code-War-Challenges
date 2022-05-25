// https://www.codewars.com/kata/5721a78c283129e416000999/solutions/javascript/me/best_practice

function pickIt(arr){
  //   for (
    return [arr.filter(x=>x%2==1),arr.filter(x=>x%2==0)];
  }