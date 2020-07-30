// https://www.codewars.com/kata/55143152820d22cdf00001bb/train/javascript

function test(n){ 
  let nineCount = 0

  let secondToLastNum = 0

  const numString = String(n)
  let len = numString.length - 1
  numString.split('').forEach(num => {
    if (len === 0){
      let lastTwoNum = Number(String(secondToLastNum) + String(num))
      for (let i = 1; i <= lastTwoNum; i++){
          String(i).split('').forEach(num => {
            if (num === '9') {
              nineCount++
            }
          })
    }
  }
    if (len === 1){
      secondToLastNum = num
      len += -1
    }
    if (len > 1){
      const secondDig = String(Array(len - 1).fill(0).join(''))
      let ninesToAdd = Number(num) * Number(String(len) + secondDig)
      if (num === '9'){
        ninesToAdd += Number('1' + secondDig) 
      }
      nineCount += ninesToAdd    
      len += -1
    }
    })

  return nineCount

  // innerFunc(){

  //   let arr = Array(String(n).length - 1).fill(0)
  //   let nineArr = Array(arr.length)
  //   let divFig = Number(String(n)[0] + arr.join(''))
  //   const newFig = n % divFig
  //   console.log(n % divFig)
  // }
  // console.log(String(n)[0])
  // let ninesCount = 0
  // for (let i = 1; i <= n; i++){
  //   String(i).split('').forEach(num => {
  //     if (num === '9') {
  //       ninesCount++
  //     }
  //   })
  // }
  // return ninesCount
}

console.log(test(900))

function number9(n){
  let ninesCount = 0
  for (let i = 1; i <= n; i++){
    String(i).split('').forEach(num => {
      if (num === '9') {
        ninesCount++
      }
    })
  }
  return ninesCount
}

console.log(number9(1000))