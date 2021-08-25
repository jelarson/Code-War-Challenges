// https://www.codewars.com/kata/57faece99610ced690000165/train/javascript

function remove(s){
  let arr = [...s].reverse()
  for (let i = 0; i <= s.length; i++){
    if (arr[0] == '!'){
      arr.shift()
    } else {
      return arr.reverse().join('')
    }
  }
  return ''
}