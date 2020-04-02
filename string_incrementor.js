// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

function incrementString(strng) {
  let nums = strng.match(/\d+/g);
  if (strng.match(/[A-Za-z]/g) === null) {
    let result = String(Number(strng) + 1)
    if (result.length >= strng.length) {
      return result
    } else {
      let diffLen = strng.length - result.length
      return '0'.repeat(diffLen) + result
    }
  }
  let letters = strng.match(/[A-Za-z]/g).join('');
  if (nums === null) {
    return letters.concat('1')
  }
  let origLen = nums[0].length
  let newNum = Number(nums) + 1
  let newNumLen = String(newNum).length
  if (newNumLen >= origLen) {
    return letters.concat(newNum)
  } else {
    let diff = origLen - newNumLen
    let withZeroes = '0'.repeat(diff) + String(newNum)
    return letters.concat(withZeroes)
  }
}

console.log(incrementString('foo099'));
console.log(incrementString('foo'));
console.log(incrementString('foo0042'));
console.log(incrementString(''));
console.log(incrementString('foobar99'));
console.log(incrementString('foobar000'));
console.log(incrementString('2'));
console.log(incrementString('02'));
