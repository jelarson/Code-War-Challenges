// https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript

function countWords(str) {
  return str.split(' ').filter(x=>x!='').length
}

function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}