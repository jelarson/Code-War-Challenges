// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr){
  let length = Math.min(...arr.map(x=>x.length))
  return arr.map(x=>x.slice(0,length))
}