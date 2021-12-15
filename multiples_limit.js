// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
  let arr = []
  for (let i = 1; i <= limit; i++) {
    let a = integer * i
    if (a <= limit) {
      arr.push(a)
    } else {
      i = limit + 1
    }
  }
  return arr
}