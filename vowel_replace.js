// https://www.codewars.com/kata/598ab63c7367483c890000f4/train/javascript

function stringTask(s){
  return s.replace(/[a,e,i,o,u,y]/gi, '').split('').map(a => '.' + a.toLowerCase()).join('')
}

console.log(stringTask('tour'))
console.log(stringTask('Codewars'))

// top answer - double replace
function stringTask(s){
  return s.toLowerCase().replace(/[aeiouy]/g, '').replace(/./g, v=>'.'+v);
}

