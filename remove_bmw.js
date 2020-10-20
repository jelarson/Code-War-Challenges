// https://www.codewars.com/kata/59de795c289ef9197f000c48/train/javascript

function removeBMW(str){
  // if (typeof(str) === 'string'){
    return str.replace(/[bmw]/gi, '')
  // } else {
  //   throw 'error'
  // }
}

console.log(removeBMW('bmwvolvoBMW'))
console.log(removeBMW('bmwvbolmwvoBM'))
console.log(removeBMW(['bmwvbolmwvoBM']))
console.log(removeBMW(2))

// top answer

function removeBMW(str) {
  if (typeof str !== "string") {
    throw new Error("This program only works for text.")
  }
  return str.replace(/[bmw]+/gi, "")
}

// short answer

function removeBMW(str){
  if (typeof str !== 'string') throw new Error("This program only works for text.");
  return str.replace(/[bmw]/gi,'');
}