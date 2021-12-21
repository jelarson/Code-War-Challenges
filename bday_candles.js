// https://www.codewars.com/kata/5805ed25c2799821cb000005/train/javascript

function cake(x, y){
  return y.split('').map((c,i)=>i%2==0?c.charCodeAt() : c.charCodeAt() - 96).reduce((a,b)=>a+b) / x > .7 ? "Fire!" : "That was close!"
}