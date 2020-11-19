// https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript

function tripleX(str){
  if (str.includes('x') && str.includes('xxx')){
    return str.indexOf('x') === str.indexOf('xxx')
  }
  return false
}

console.log(tripleX('abraxxxas'))
console.log(tripleX('xabraxxxas'))

// top answers

// one liner with regex

const tripleX = str => /^[^x]*xxx/.test(str);

// shorter answer with same logic

const tripleX = str => { 
  let x = str.indexOf('x')
  return x > -1 && x === str.indexOf('xxx') 
}

