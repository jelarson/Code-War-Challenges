// https://www.codewars.com/kata/58a66c208b88b2de660000c3/train/javascript

function missingValues(arr) {
  let x = 0
  let y = 0
  arr.forEach(b=>{
    let count = 0
    arr.forEach(c=>{
      if (b===c)count++
    })
    if (count === 1){
      x = b
    }
    if (count === 2){
      y = b
    }
  })
  return x*x*y
}

console.log(missingValues([1, 1, 1, 2, 2, 3]))

function missingValues(a) {
  const x = a.find( v => a.filter( w => v===w ).length===1 );
  const y = a.find( v => a.filter( w => v===w ).length===2 );
  return x*x*y;
}