// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

// function race(v1, v2, g) {
//   const seconds = g / ((v2 - v1) / 3600)
//   return [Math.floor(seconds / 3600), Math.floor(seconds / 60), Math.floor(seconds % 60)]
// }

function race(v1, v2, g) {
  if (v1 >= v2) return null
  const seconds = g / ((v2 - v1) / 3600)
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(c=> Math.floor(c))
}

console.log(race(720, 850, 70))
console.log(race(80, 91, 37))

// top answers

// same logic, ternary in return
function race(v1, v2, g){
  let time=g/(v2-v1);
  return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}

// one liner

race=(v1,v2,g)=>(t=g/(v2-v1),t<0?null:[t,t*60%60,t*3600%60].map(Math.floor))

// date

function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }
  var time = new Date (g / (v2 - v1) * 3600 * 1000);
  return [time.getHours(), time.getMinutes(), time.getSeconds()];
}

