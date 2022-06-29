// https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript

function rndCode(){
  var letters = 'ABCDEFGHIJKLM';
  var numbers = '0123456789';
  var symbols = '~!@#$%^&*';
  return letters[Math.floor(Math.random()*letters.length - 1)] + letters[Math.floor(Math.random()*letters.length - 1)] + numbers[Math.floor(Math.random()*numbers.length - 1)] + numbers[Math.floor(Math.random()*numbers.length - 1)] + numbers[Math.floor(Math.random()*numbers.length - 1)] + numbers[Math.floor(Math.random()*numbers.length - 1)] + symbols[Math.floor(Math.random()*symbols.length - 1)] + symbols[Math.floor(Math.random()*symbols.length - 1)]
}

function rndCode(){
  
  var p1 = 'ABCDEFGHIJKLM';
  var p2 = '0123456789';
  var p3 = '~!@#$%^&*';
  return [p1,p1,p2,p2,p2,p2,p3,p3].map((v) => v[~~(Math.random() * v.length)]).join('');

}