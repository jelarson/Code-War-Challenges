// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

function leastLarger(a,i) {
  let ans = []
  return a.indexOf(Math.min(...a.filter(num => {
    if (num > a[i]){
      return true
    } else {
      return false
    }
  })))
}

console.log(leastLarger( [4, 1, 3, 5, 6], 0 ))

// top answers

// one liner - same logic

const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))