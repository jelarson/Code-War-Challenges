// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function(size) {
  const ans = []
  const list = []

  for (let i = 1; i <= size; i++){
    list.push(i)
    ans.push(Array(size))
  }
  ans[0] = list
  ans.forEach((arr, idx) => {
    arr[0] = idx + 1
  })
  for (let i = 1; i < size; i++){
    for (let b = 1; b < size; b++){
      ans[i][b] = ans[0][i] * ans [b][0]
    }
  }
  return ans
}

console.log(multiplicationTable(3))