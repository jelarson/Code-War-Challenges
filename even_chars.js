// https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

function evenChars(string) {
  if (string.length > 1 && string.length < 101){
    return string.split('').filter((e, idx)=> (idx+1)%2===0)
  } else {
    return "invalid string"
  }
}

console.log(evenChars("abcdefghijklm"))