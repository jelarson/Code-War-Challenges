// https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript

function rndCode(){
  var letters = 'ABCDEFGHIJKLM';
  var numbers = '0123456789';
  var symbols = '~!@#$%^&*';
  return letters[Math.floor(Math.random()*letters.length - 1)] + letters[Math.floor(Math.random()*letters.length - 1)] + numbers[Math.floor(Math.random()*numbers.length - 1)] + numbers[Math.floor(Math.random()*numbers.length - 1)] + numbers[Math.floor(Math.random()*numbers.length - 1)] + numbers[Math.floor(Math.random()*numbers.length - 1)] + symbols[Math.floor(Math.random()*symbols.length - 1)] + symbols[Math.floor(Math.random()*symbols.length - 1)]
}