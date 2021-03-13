// https://www.codewars.com/kata/59c03f175fb13337df00002e/train/javascript

function makeAWindow(num) {
    const edge = Array(num*2+3).fill('-').join('')
    const mid = Array(num).fill('-').join('')
    let window = ''
    for(let i = 1; i <= num; i++){
      let string = Array(num).fill('.').join('')
      window = window + '|'+string+'|'+string+'|\n'
    }
    return edge + '\n' + window + '|' + mid + '+' + mid + '|\n' + window + edge
}

console.log(makeAWindow(3))
