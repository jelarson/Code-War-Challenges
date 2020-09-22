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

