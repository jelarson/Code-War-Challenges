// https://www.codewars.com/kata/59665001dc23af735700092b/train/javascript

function midtownNav(start,end) {
  const startNums = start.match(/([0-9])\w+/gi,).map(el => el.replace(/([a-z])/gi, ''))
  const endNums = end.match(/([0-9])\w+/gi,).map(el => el.replace(/([a-z])/gi, ''))
  const ans = [startNums[0] - endNums[0], startNums[1] - endNums[1]]
  const firstDir = ans[1] > 0 ? 'south' : 'north'
  const secondDir = ans[0] > 0 ? 'east' : 'west'
  return `Walk ${Math.abs(ans[1])} blocks ${firstDir}, and ${Math.abs(ans[0])} blocks ${secondDir}`
}

console.log(midtownNav("8th Ave and W 38th St", "7th Ave and W 36th St"))

// top answer

function midtownNav(...addrs) {
  
  const [ start, end ] = addrs.map(addr => addr.match(/(\d)\D*(\d+)/));

  const dir = (dist, ...names) => Math.abs(dist) + ' blocks ' + names[+(dist < 0)];
  
  return 'Walk ' + dir(end[2] - start[2], 'north', 'south') 
      + ', and ' + dir(end[1] - start[1], 'west', 'east');
  
}

// top short answer

function midtownNav(start, end) {
  const [ax, ay, bx, by] = (start + end).match(/\d+/g)
  const dx = ax - bx, dy = ay - by
  return `Walk ${Math.abs(dy)} blocks ${dy > 0 ? "south" : "north"}, and ${Math.abs(dx)} blocks ${dx > 0 ? "east" : "west"}`
}