// https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript

function lastSurvivor(letters, coords) {
  let str = letters
  coords.forEach(x=>{
    str = str.slice(0,x)+str.slice(x+1)
  })
  return str
}