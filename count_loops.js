// https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript

function olympicRing(a){
    const rings = 'QqeRoOpPaAdDgbB'
    let count = 0
    a.split('').forEach(x=>{
      if (rings.includes(x)){
        count++
      }
      if (x === 'B'){
        count ++
      }
    })
    return count < 2 ? 'Not even a medal!' : count == 2 ? 'Bronze!' : count == 3 ? 'Silver!' : 'Gold!' 
  }

  const olympicRing = (str) =>{
    const out = [...str].map(el => 'qeopadgbQROPAD'.includes(el) ? 1 : el === 'B' ? 2 : 0).reduce((a, b)=> a+b, 0) / 2 
    return out < 2 ? 'Not even a medal!' : out < 3 ? 'Bronze!' : out < 4 ? 'Silver!' : 'Gold!'
  }