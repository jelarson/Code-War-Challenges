// https://www.codewars.com/kata/57e90bcc97a0592126000064/train/javascript

function seaSick(x){
  let count = 0
  for(let i = 0; i < x.length; i++){
    if (x.slice(i-1,i+1) == '_~' || x.slice(i-1,i+1) == '~_'){
      count++
    }
  }
  return count > x.length/5 ? "Throw Up" : "No Problem"
}

console.log(seaSick('_~~~~~~~_~__~______~~__~~_~~'))
console.log(seaSick('~~_'))