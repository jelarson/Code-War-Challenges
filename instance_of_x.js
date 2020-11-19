// https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript

function tripleX(str){
  if (str.includes('x') && str.includes('xxx')){
    return str.indexOf('x') === str.indexOf('xxx')
  }
  return false
}

console.log(tripleX('abraxxxas'))
console.log(tripleX('xabraxxxas'))