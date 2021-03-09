// https://www.codewars.com/kata/604287495a72ae00131685c7/train/javascript

function doubleton(num){
  return [...new Set(String(num + 1))].length == 2 ? num + 1 : doubleton(num + 1);
} 

console.log(doubleton(1234))