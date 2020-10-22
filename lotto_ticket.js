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