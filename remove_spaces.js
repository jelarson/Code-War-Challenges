// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript

function spacey(array){
  const ans = []
  let temp = ''
  array.forEach(itm=>{
    temp+=itm
    ans.push(temp)
  })
  return ans
}

console.log(spacey(['kevin', 'has','no','space']))

function spacey(array){
  let string = ''
  return array.map( (e) => string += e )
}