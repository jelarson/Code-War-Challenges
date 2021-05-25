// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

function findAdmin(list, lang) {
  const arr = []
  list.forEach(x=>{
    if (x['language'] == lang){
      arr.push(x)
    }
  })
  return arr
}