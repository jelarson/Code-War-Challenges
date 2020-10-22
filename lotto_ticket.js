// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function bingo(ticket, win){
  let winCount = 0
  ticket.forEach(arr => {
    [...new Set(arr[0].split(''))].forEach(letter => {
      if (letter.charCodeAt(0) === arr[1]){
        winCount++
      }
    })
  });
  return winCount >= win ? "Winner!" : "Loser!"
}

// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))
// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))
// console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3))
console.log(bingo([ [ 'ZXTNVSTT', 73 ], [ 'YOYFFA', 89 ] ], 2))

// ryan's answer

function bingo(ticket, win){
  const wins = ticket.reduce((total, next) => total += +[...next[0]].some(char => char.charCodeAt() === next[1]),0)
  return wins >= win ? 'Winner!' : 'Loser!'
}

// top answer

function bingo(ticket, win){
  if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
  {
    return "Winner!";
  }
  return "Loser!";
}

// one liner

const bingo = (ticket, win) =>  ticket.reduce((s,[e,c])=> [...e].some(l=> l.charCodeAt(0) == c) ? s+1: s  ,0) >= win ? "Winner!" : "Loser!";