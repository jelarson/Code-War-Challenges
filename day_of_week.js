// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript

function whatday(num) { 
  return num > 0 && num < 8 ? ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][num - 1] : 'Wrong, please enter a number between 1 and 7'
}