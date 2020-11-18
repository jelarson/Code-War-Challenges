// https://www.codewars.com/kata/51c89385ee245d7ddf000001/solutions/javascript

function solution(value){
  const c = `0000${value}`
  return `Value is ${c.slice(-5)}`
}

// top answers

// concat string

function solution(value){
  return "Value is " + ("00000" + value).slice(-5);
}

// pad start

// one liner

const solution = value => 'Value is ' + value.toString().padStart(5, '0');

