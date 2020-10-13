// https://www.codewars.com/kata/5f6d120d40b1c900327b7e22/train/javascript

function leaderboardSort(leaderboard, changes) {
  let copy = [...leaderboard]
  changes.forEach(change => {
    const result = change.split(' ')
    const idx = copy.indexOf(result[0])
    if (Number(result[1]) > 0){
      copy = [...copy.slice(0, idx - Number(result[1])), result[0], ...copy.slice(idx - Number(result[1]))]
      copy = [...copy.slice(0, copy.lastIndexOf(result[0])), ...copy.slice(copy.lastIndexOf(result[0])+1)]
    } else {
      const newIdx = copy.indexOf(result[0])
      
      copy = [...copy.slice(0, idx - Number(result[1])-1), ...copy.slice(idx - Number(result[1]))]
      copy = [...copy.slice(0, idx - Number(result[1])), result[0], ...copy.slice(idx - Number(result[1]))]
    }
  })
  return copy
}

console.log(leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], 
                            ['Dave +1', 'Fred +4', 'Brian -1']))
// console.log(leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], 
//                             ['Brian -1']))