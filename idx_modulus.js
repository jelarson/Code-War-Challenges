// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript

function multipleOfIndex(array) {
  const arr = []
  for (let i = 0; i < array.length; i++){
    if (array[i]%i==0){
      arr.push(array[i])
    }
  }
  return arr
}