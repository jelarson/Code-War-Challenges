// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

function removeParentheses(s){
  // return s.slice(0, s.indexOf('(')).concat(s.slice(s.indexOf(')') +1))
  // return s.replace(/ *\([^)]*\) */g, "")
  // const arr = s.split(/ *\([^)]*\) */g)
  // return arr
  return s.replace(/ *\([^)]*\) */g, " ")
}

console.log(removeParentheses('a (bc d)e'))
console.log(removeParentheses("example(unwanted thing)example"))
console.log(removeParentheses("example (unwanted thing) example"))
console.log(removeParentheses("a(b(c))"))

function recur(s){
  if (s.includes('(')){
    const firstIdx = s.indexOf('(')
    const secondIdx = s.indexOf(')') === s.lastIndexOf(')') ? s.indexOf(')') : s.lastIndexOf('(') < s.indexOf(')') ? s.lastIndexOf(')') : s.indexOf(')')
    return recur(s.slice(0, firstIdx).concat(s.slice(secondIdx + 1)))
  } else {
    return s
  }
}

console.log(recur('a (bc d)e'))
console.log(recur("example(unwanted thing)example"))
console.log(recur("example (unwanted thing) example"))
console.log(recur("a(b(c))"))