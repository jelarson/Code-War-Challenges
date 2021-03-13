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

//top answers

function makeAWindow(num) {
  var side = `|${'.'.repeat(num)}|${'.'.repeat(num)}|\n`.repeat(num)
  var centre = `|${'-'.repeat(num)}+${'-'.repeat(num)}|\n`
  return '-'.repeat(num * 2 + 3) + '\n' + side + centre + side + '-'.repeat(num * 2 + 3) 
}

// short answer
makeAWindow=(n,s='-'.repeat(n),d='.'.repeat(n),f=`-${s}-${s}-`,r=`|${d}|${d}|`,w=Array(n).fill(r))=>[f,...w,`|${s}+${s}|`,...w,f].join`\n`


