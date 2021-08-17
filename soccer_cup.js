// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript

function uefaEuro2016(teams, scores){
  const winner = scores[0] == scores[1] ? 'teams played draw.' : scores[1] > scores[0] ? `${teams[1]} won!` : `${teams[0]} won!`
  return `At match ${teams[0]} - ${teams[1]}, ${winner}`
}