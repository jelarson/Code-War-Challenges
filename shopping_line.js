// There is a queue for the self-checkout tills at the supermarket. 
// Your task is write a function to calculate the total time required 
// for all the customers to check out!

// input
// customers: an array of positive integers representing the queue.
// Each integer represents a customer, and its value is the amount of
// time they require to check out.
// n: a positive integer, the number of checkout tills.

// queueTime([2,3,10], 2)
// should return 12

function queueTime(customers, n) {
  let times = Array(n).fill(0)

  customers.forEach(customer => {
    const whereCustomerGoes = Math.min(...times)
    const indexToReplace = times.indexOf(whereCustomerGoes)
    times.splice(indexToReplace, 1, times[indexToReplace] + customer)
  })

  return Math.max(...times)

}

console.log(queueTime([], 1))
console.log(queueTime([1, 2, 3, 4, 5], 1))
console.log(queueTime([1, 2, 3, 4, 5], 2))



// send one customer to each open register
// find customer who will take least amount of time at their register
// assign next customer there - repeat until no more customers
// keep running sum of how many minutes it takes

function betterQueueTime(customers, n) {
  const finalTimes = customers.reduce((queues, nextCustomer) => {
    const nextAvailableQueue = queues.sort((a, b) => a - b)[0]
    return [nextAvailableQueue + nextCustomer, ...queues.slice(1)]
  }, Array(n).fill(0))
  return Math.max(...finalTimes)
}