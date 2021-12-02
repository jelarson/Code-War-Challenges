// https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript

function toFreud(string) {
  return string.length > 1 ? string.split(' ').map(x=> 'sex').join(' ') : ''
}