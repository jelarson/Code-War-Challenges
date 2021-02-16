// https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript

var paintLetterboxes = function(start, end) {
  const arr = [0,0,0,0,0,0,0,0,0,0]
  for (let i = start; i <= end; i++){
    [...String(i)].forEach(x=>{
      arr[Number(x)]++
    })
  }
  return arr
}

console.log(paintLetterboxes(125,132))