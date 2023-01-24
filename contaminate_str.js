// https://www.codewars.com/kata/596fba44963025c878000039/train/javascript

function contamination(text, char){
  return Array(text.length).fill(char).join('')
}

function contamination(text, char){
  return char.repeat(text.length)
}