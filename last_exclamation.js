// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

function remove (string) {
  return string[string.length - 1] == '!' ? string.slice(0,string.length - 1) : string;
}

const remove = s => s.replace(/!$/, '');

function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}