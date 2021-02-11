// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

function numObj(s){
  return s.map(x=>{
    const obj = new Object()
    obj[String(x)] = String.fromCharCode(x)
    return obj
  })
}

console.log(numObj([118,117,120]))