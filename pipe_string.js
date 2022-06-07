// https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript

function isolateIt(arr){
  return arr.map(x=>{
    if (x.length % 2 == 0) {
      return x.slice(0,x.length/2) + '|' + x.slice(x.length/2)
    } else {
      return x.slice(0,Math.floor(x.length/2)) + '|' + x.slice(Math.ceil(x.length/2))
    }
  })
}