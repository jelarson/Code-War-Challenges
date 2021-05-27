// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

function findAdmin(list, lang) {
  const arr = []
  list.forEach(x=>{
    if (x['language'] == lang && x['githubAdmin'] == 'yes'){
      arr.push(x)
    }
  })
  return arr
}