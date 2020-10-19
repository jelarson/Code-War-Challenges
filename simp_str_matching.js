// https://www.codewars.com/kata/5bc052f93f43de7054000188/train/javascript

function solve(a,b){
  const splitStr = a.split('*')
  if (splitStr.length < 2){
    return a === b
  }
  return b.includes(splitStr[0]) && b.slice(b.indexOf(splitStr[0]) + splitStr[0].length).includes(splitStr[1])
}

console.log(solve("code*s","codewars"))
console.log(solve("codewar*s","codewars"))
console.log(solve("*","codewars"))
console.log(solve("aa","aaa"))
console.log(solve('aaa*aaa', 'aaa'))

// reg ex best answer

const solve =(a,b) => new RegExp(`^${a.replace('*','.*')}$`).test(b);

// top answer no regex

function solve(a,b){
  if (a.indexOf("*") < 0 && a.length !== b.length) {return false};  
  let firstPartA = a.substring(0, a.indexOf("*"));
  let lastPartA = a.substring(a.indexOf("*") + 1);
  return (firstPartA === b.substring(0, firstPartA.length) &&
          lastPartA === b.substring(b.length - lastPartA.length) &&
          b.length >= a.length - 1);
}

