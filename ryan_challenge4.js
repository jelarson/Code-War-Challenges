// DOM - document object model
// double equals compares values after coersion (converting value to a different type) - compares value after converting to same type
// !! double not notation - covert to boolean
// function definition hoisted to top - can be called before it is defined. Doens't work with const or let definition
// Scope - area we have access to variables. Context you have access to different variables. Global scope, block scope, function scope
// Closure - the scope created when a function is declared. What lexical environment does the function have access to?
// IIFE - immediately invoked function expression - define and execture function immediately. 

// https://www.codewars.com/kata/522551eee9abb932420004a0/solutions/javascript

function fibonacci (n) {
  const sequence = [0,1]
  if (n <= 2){
    return sequence[n-1]
  }
  for (let i = 2; i < n; i ++){
    const nextNum = sequence[sequence.length -2] + sequence[sequence.length-1]
    sequence.push(nextNum)
  }
  return sequence[n -1]
}

console.log(fibonacci(9))

// 0,1,1,2,3,5,8,13

// write out the sequence - take two previous nums and add them, push the answer to the existing array

// top answer

function nthFibo(n) {
  var cache=[0,0,1,1];
  while(cache.length<=n){
    cache[cache.length]=cache[cache.length-1]+cache[cache.length-2];
  }
  return cache[n];
}