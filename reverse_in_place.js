// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript

function reverseWords(str) {
  return str.split(' ').map(word => {
    return word.split('').reverse()
  }).join(' ').split(',').join('')
}

// top answer

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}