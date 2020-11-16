// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript

function nextHappyYear(year){
  const arr = [...new Set([...String(year+1)])]
  return arr.length === 4 ? year+1 : nextHappyYear(year+1)
}

console.log(nextHappyYear(1987))
console.log(nextHappyYear(1123))

// top answers

// short answer

const nextHappyYear = year =>
  new Set(`${++year}`).size < 4 ? nextHappyYear(year) : year;

// while loop with regex

function nextHappyYear(year){
  do year+=1
  while ((/([0-9]).*?\1/).test(year));
  return year
  }

