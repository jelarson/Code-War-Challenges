// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

function tripledouble(num1, num2) {
  const tripNums = []
  let ans = 0
  String(num1).split('').forEach((num, idx, arr)=>{
    if (idx < arr.length -2){
      if (num === arr[idx +1] && num === arr[idx+2]){
        tripNums.push(Number(num))
      }
    }
  })
  String(num2).split('').forEach((num, idx, arr)=>{
    if (idx < arr.length -1){
      if (num === arr[idx +1]){
        if (tripNums.includes(Number(num))){
          ans = 1
        }
      }
    }
  })
  return ans
}

console.log(tripledouble(451999277,41177722899))