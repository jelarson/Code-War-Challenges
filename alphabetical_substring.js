// https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

function longest(str) {
  let current = []
  let ans = [str[0]]
  let active = false
  for (let i = 0; i < str.length; i++){
    if (!active){
      current.push(str[i])
    }
    if ([str[i], str[i+1]].sort().join('') === str[i].concat(str[i+1])){
      current.push(str[i + 1])
      active = true
      if (current.length > ans.length){
        ans = current
      }
    } else {
      current = []
      active = false
    }
  }
  return ans.join('')
}
console.log(longest('asd'))
console.log(longest('nab'))
console.log(longest('asdfaaaabbbbcttavvfffffdf'))

// top answer - one liner with regex

longest = s => s.match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g).reduce((a, b) => a.length >= b.length ? a : b);


// for loop top answer

function longest(str) {
  let max = 0;
  let cur = 0;
  let pos = 0;
  for (let i = 1; i < str.length; ++i) {
    if (str[i-1] <= str[i]) {
      ++cur;
      if (cur > max) {
        max = cur;
        pos = i - max;
      }
    } else {
      cur = 0;
    }
  }
  return str.slice(pos, max+1+pos);
}