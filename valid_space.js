// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript

function validSpacing(s) {
  return !s.split(' ').includes('')
}

console.log(validSpacing('Hello world'))
console.log(validSpacing('Hello  world'))
console.log(validSpacing(' Hello world'))

// top answers

const validSpacing=s=>s.replace(/\s+/g," ").trim()==s;

function validSpacing(s) {
  return s.trim() == s && !s.includes("  ");
}

const validSpacing = s =>
  !/(?<=\B)\s|\s(?=\B)/.test(s);

const validSpacing = s => s.trim().split('  ').join('') === s