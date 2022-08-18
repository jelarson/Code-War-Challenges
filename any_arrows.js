// https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

function anyArrows(arrows){
  var ans = false
  arrows.forEach(x=> {
    if (!x.hasOwnProperty('damaged') || x.damaged == false) {
      ans = true
    }
  })
  return ans
}