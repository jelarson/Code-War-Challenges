// https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript

function fix(paragraph){
  return paragraph.length > 0 ? paragraph.split('. ').map(s => s[0].toUpperCase().concat(s.slice(1))).join('. ') : paragraph 
}

console.log(fix(''))
console.log(fix('hi.'))
console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))

// top answer - regex
const fix = s => s.replace(/^\w|\.\s\w/g, x => x.toUpperCase());
