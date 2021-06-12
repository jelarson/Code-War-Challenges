// https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript

function sabb(s, val, happiness){
  const arr = 'sababatical'.split('')
  let count = 0
  s.split('').forEach(c=>{
    if(arr.includes(c.toLowerCase())) {
      count ++
    }
  })
  return happiness + val + count > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}