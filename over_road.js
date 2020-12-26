// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript

function overTheRoad(address, n){
  const oddArr = []
  const evenArr = []
  for (let i = 1; i <= (n*2); i++){
    i % 2 === 0 ? evenArr.push(i) : oddArr.push(i)
  }
  return address % 2 === 0? oddArr.reverse()[evenArr.indexOf(address)] : evenArr.reverse()[oddArr.indexOf(address)]
}

console.log(overTheRoad(1,3))

console.log(overTheRoad(3,5))