// https://www.codewars.com/kata/56e67d6166d442121800074c/train/javascript

function draw(w){
  const max = Math.max(...w)
  let goob = Array(w.length).fill(Array(max).fill('■'))
    console.log(goob.length)
  return goob.map((x,b)=>{
    return x.map((c,i)=>{
      if (w[i] >= max - b){
        c = '□'
      }
      if (c == '□'){
        c = '■'
      } else {
        c = '□'
      }
      return c
    }).join('')
  }).join('\n')
}

console.log(draw([1,2,3,4]))

function draw(waves){
  for( var out='', n=waves.length, max = Math.max(...waves); max>0; max-- ){
    for( var i=0; i<n; i++ ) out += waves[i] < max ? '□' : '■';
    out += '\n';
  }
  return out.trim();
}