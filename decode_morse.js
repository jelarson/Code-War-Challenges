// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function(morseCode){
  const obj = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '...---...': 'sos',
    '-.-.--': '!',
    '.-.-.-': '.'
  }
  const ans = []
  morseCode.split('  ').forEach(word => {
    const morseWord = []
    word.split(' ').forEach(letter => {
      morseWord.push(obj[letter])
    })
    ans.push(morseWord.join(''))
  })
  return ans.join(' ').toUpperCase().trim()
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
console.log(decodeMorse('... --- ...'))
console.log(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '))

// top answer using MORSE_CODE library

decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}

// one liner

decodeMorse = function(morseCode){
  return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}