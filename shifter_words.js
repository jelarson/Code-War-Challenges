// https://www.codewars.com/kata/603b2bb1c7646d000f900083/train/javascript

function shifter(s){
  if (s.length == 0) {
    return 0
  }
  let count = []
  const arr = ['H','I','M','N','O','S','W','X','Z']
  const words = [...new Set(s.split(' '))]
  words.forEach(x=>{
    let shifty = true
    x.split('').forEach(c=>{
      if(!arr.includes(c)) {
        shifty = false
      }
    })
    if (shifty) count.push(x)
  })
  return count.length
}

console.log(shifter('OS IS UPDATED'))
console.log(shifter('WHO IS WHO'))