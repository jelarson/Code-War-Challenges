// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  const ans = []
  string.split('').forEach(c=>{
    if (c === c.toUpperCase()){
      ans.push(' ')
    }
    ans.push(c)
  })
  return ans.join('');
}