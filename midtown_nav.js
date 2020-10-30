// https://www.codewars.com/kata/59665001dc23af735700092b/train/javascript

function midtownNav(start,end) {
  const startNums = start.replace(/([a-z])/gi, '')
  const endNums = end.replace(/([a-z])/gi, '')
  return endNums
}

console.log(midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St"))