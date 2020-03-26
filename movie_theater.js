// The new "Avengers" movie has just been released! There are a lot of people 

// at the cinema box office standing in a huge line. Each of them has a single 

// 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every 

// single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has 

// no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with 

// the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 

function tickets(array) {
  twentyFive = 0
  fifty = 0

  for (amount of array) {
    if (amount === 25) {
      twentyFive += 1
    }
    if (amount === 50) {
      if (twentyFive >= 1) {
        fifty += 1
        twentyFive -= 1
      } else {
        return 'NO'
      }
    }
    if (amount === 100) {
      if (fifty === 0 && twentyFive <= 2) {
        return 'NO'
      }
      if (fifty > 0 && twentyFive > 0) {
        fifty -= 1
        twentyFive -= 1
      }
      if (fifty === 0 && twentyFive > 2) {
        twentyFive -= 3
      }

    }
    if (amount !== 25 && amount !== 50 && amount !== 100) {
      return 'NO'
    }
  }
  return 'YES'
}

tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 50, 25, 100])

console.log(tickets([25, 25, 50]))
console.log(tickets([25, 25, 50, 100]))
console.log(tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 50, 25, 100]))
console.log(tickets([25, 25, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100]))
console.log(tickets([2, 5, 7]))
