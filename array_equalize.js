// https://www.codewars.com/kata/580a1a4af195dbc9ed00006c/train/javascript

function equalize(array){
  return array.map((x,idx)=>{
    const itm = String(array[idx] - array[0])
    return Number(itm) < 0 ? itm : '+'+itm
  })
}

console.log(equalize([20,30,35,10]))