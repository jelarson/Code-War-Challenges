// https://www.codewars.com/kata/59665001dc23af735700092b/train/javascript

function midtownNav(start,end) {
  // const startNums = start.replace(/([a-z])/gi, '')
  const startNums = start.match(/([0-9])\w+/gi,).map(el => el.replace(/([a-z])/gi, ''))
  const endNums = end.match(/([0-9])\w+/gi,).map(el => el.replace(/([a-z])/gi, ''))
  const ans = [startNums[0] - endNums[0], startNums[1] - endNums[1]]
  const firstDir = ans[1] > 0 ? 'south' : 'north'
  const secondDir = ans[0] > 0 ? 'east' : 'west'
  return `Walk ${Math.abs(ans[1])} blocks ${firstDir}, and ${Math.abs(ans[0])} blocks ${secondDir}`
}

console.log(midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St"))