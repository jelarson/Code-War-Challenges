// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript

function whoIsPaying(name){
  return name.length > 2 ? [name,name.slice(0,2)] : [name.slice(0,2)]
}