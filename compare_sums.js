// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
  return a.map(c=>c**2).reduce((c,d)=>c+d) > b.map(e=>e**3).reduce((e,f)=>e+f)
}