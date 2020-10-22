// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  const str = text.toLowerCase().match(/[a-z]+/g)
  return str ? str.join('').split('').map(letter => letter.charCodeAt(0) -96).join(' ') : ''
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))
console.log(alphabetPosition("a"))
console.log(alphabetPosition(""))
console.log(alphabetPosition(""))

// top answer - no regex

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

// one liner

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');