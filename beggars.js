// https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript

function beggars(values, n){
  const arr = Array(n).fill(0)
  let idx = 0

  values.forEach((num) => {
    if (idx === n){
      idx = 0
    }
    arr[idx]+=num
    idx++
  })
  return arr
}

console.log(beggars([1,2,3,4,5],3))

// top answer

function beggars(values, n){
  var outputValues = [];
  for (var i = 0; i < n; i++) {
    var sum = 0;
    for (var j = i; j < values.length; j += n) {
      sum += values[j];
    }
    outputValues.push(sum);
  }
  return outputValues;
}