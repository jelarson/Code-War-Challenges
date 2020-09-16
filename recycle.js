// https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
]

function recycle(array) {
  const ans = [[], [], [], []]
  array.forEach((obj, idx) => {
    if (Object.values(obj).includes('paper')){
      ans[0].push(obj.type)
    }
    if (obj.material === 'glass' || obj.secondMaterial === 'glass'){
      ans[1].push(obj.type)
    }
    if (Object.values(obj).includes('organic')){
      ans[2].push(obj.type)
    }
    if (Object.values(obj).includes('plastic')){
      ans[3].push(obj.type)
    }
  })
  return ans
}

console.log(recycle(a))

// top answer - one liner

const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

function recycle(objects) {
  return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
}
