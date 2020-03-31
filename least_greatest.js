// In this little assignment you are given a string of
// space separated numbers, and have to return the 
// highest and lowest number.

// highAndLow("1 2 -3 4 5"); // return "5 -3"

function highAndLow(numbers) {
  arr = []
  numbers.split(' ').forEach(num => {
    arr.push(Number(num))
  })
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}

console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"

function highAndLow1(numbers) {
  nums = numbers.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}

console.log(highAndLow1('1 2 -3 4 5'));
