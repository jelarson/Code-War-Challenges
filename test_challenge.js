// automate secret santa

const names = ['jim', 'sally', 'henry', 'michael']

function secretSanta(names){
  let availableToBeMatched = names.slice()
  const ans = {}

  names.forEach((name)=> {
    const tempAvail = availableToBeMatched.filter((person)=> name !== person)
    let random = Math.floor(Math.random() * tempAvail.length)
    ans[name] = tempAvail[random]
    availableToBeMatched = availableToBeMatched.filter((person)=> tempAvail[random] !== person)

    if (ans[name] === undefined){
      const swap = ans[names[0]]
      ans[names[0]] = name
      ans[name] = swap
    }
  })

  return ans
}

console.log(secretSanta(names))

// {jim: sally, sally: henry, henry: jim}