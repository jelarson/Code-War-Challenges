const raffle = {
  bob: 5,
  cindy: 2,
  joe: 1,
  sally: 1, 
}

// random winner of raffle based on how many tickets owner has

// empty array
// push each name x amount of times
// run random number
// return that index

function raffleWinner(raffle){
const arr = []
Object.values(raffle).forEach((value, idx) => {
  arr.push(...Array(value).fill(Object.keys(raffle)[idx]))
})
return arr[Math.floor(Math.random() * arr.length)]
}

console.log(raffleWinner(raffle))

const weighted = (odds) => {
  const solution = Object.entries(odds).reduce((arr, pair) => {
    return [...arr, ...Array(pair[1]).fill(pair[0])]
  }, [])
  return solution[Math.floor(Math.random() * solution.length)]
}