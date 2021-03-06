// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

function removeParentheses(s){
  // return s.slice(0, s.indexOf('(')).concat(s.slice(s.indexOf(')') +1))
  return s.replace(/ *\([^)]*\) */g, "")
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

function recur2(s){
  if (s.includes('(')){
    const firstIdx = s.lastIndexOf('(')
    const secondIdx = s.slice(firstIdx).indexOf(')') + firstIdx
    return recur(s.slice(0, firstIdx).concat(s.slice(secondIdx + 1)))
  } else {
    return s
  }
}

console.log(recur2('a (bc d)e'))
console.log(recur2("example(unwanted thing)example"))
console.log(recur2("example (unwanted thing) example"))
console.log(recur2("a(b(c))"))

// top answer
// for loop

function removeParentheses(s){
  let r = 0
  let x = ''
  for (let c of s) {
    if (c=='(') r++
    if (r==0) x+=c
    if (c==')') r--
  }
  return x
}

// one liner regex

const removeParentheses = s => s.includes('(') ? removeParentheses(s.replace(/\([^()]*?\)/, '')) : s;

// double regex

function removeParentheses(s){
  while (s.match(/\([\w ]+\)/g)) {
    s = s.replace(/\([\w ]+\)/g ,'');
  }
  
  return s;
  
}

// filter

function removeParentheses(s){
  let lvl=0;
  return [...s].filter(c=>{ lvl+=c=='(';
                            let keep = !lvl;
                            lvl -= c==')';
                            return keep; })
               .join('')
}