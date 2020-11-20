// https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac/train/javascript

function add(x, y)
{
    let neg = false
    if (x < 0 && y < 0){
      neg = true
    }
    
    const xVal = Math.abs(x)
    const yVal = Math.abs(y)
    const arr1 = Array(xVal)
    const arr2 = Array(yVal)
    if (neg || x > 0 && y > 0){
      return neg ? [...arr1, ...arr2].length * 'b'.indexOf('a') : [...arr1, ...arr2].length
    } else {
      const max = xVal >= yVal ? xVal : yVal
      const min = xVal <= yVal ? xVal : yVal 
      let flip = false
      if (max === xVal && x < 0){
        flip = true
      }
      return flip ? Array(max).slice(min).length * 'b'.indexOf('a') : Array(max).slice(min).length
    }
}

function add1(x,y){
  let start = x
  (start++).repeat(y)
  return start
  // for (let i = 0; i < )
}

console.log(add(5,19))
console.log(add(-5,-19))
console.log(add(-27,18))
console.log(add(27,-18))

// top answers

// one liner

const add = (x,y) => y ? add(x^y,(x&y)<<1) : x;

// while loop

const add = (x, y)  => {
  while (y != 0) {
    const carry = x & y;    
    x = x ^ y;
    y = carry << 1;
 } 
 return x; 
}

function add(x, y)
{
    console.log(x,y)
    x/=10000000
    y/=10000000
    
    return Math.round(Math.log2((2**x)*(2**y))*10000000)
}

// disable test check

String.prototype.includes = _ => false;
let add = (x, y) => x + y;