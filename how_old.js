// https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript

function  calculateAge(a,b) {
  var age = b-a;
  var year = Math.abs(age) == 1 ? ' year' : ' years';
  return age > 0 ? "You are " + age + year + " old." : age < 0 ? "You will be born in " + (a-b) + year + "." : "You were born this very year!"; 
}