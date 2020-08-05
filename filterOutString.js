// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
  const newArr = []
  l.forEach(item => {
    if(typeof item !== 'string'){
      newArr.push(item)
    }
  })
  return newArr
}

// top answer

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}