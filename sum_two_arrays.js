// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript

function addArrays(array1, array2) {
  let arrayToNumber1 = Number(array1.join(''));
  let arrayToNumber2 = Number(array2.join(''));
  const neg = arrayToNumber1 + arrayToNumber2 < 0
  if (neg){
    const arr = String((arrayToNumber1 + arrayToNumber2)*-1).split('').map(a => Number(a));
    arr[0] = arr[0]*-1
    return arr
  } else {
    return String(arrayToNumber1 + arrayToNumber2).split('').map(a => Number(a));
  }
}

console.log(addArrays([6,7], [6,7]))
console.log(addArrays([-6,7], [1,0]))

// top answer

// one liner

const addArrays = (arr1, arr2) => (arr1.length || arr2.length) ? `${(+arr1.join`` + +arr2.join``)}`.match(/-?\d/g).map(Number) : []

function addArrays(array1, array2) {
  let nbr1 = parseInt(array1.join('')) || 0
  let nbr2 = parseInt(array2.join('')) || 0
  let sum = Math.abs(nbr1 + nbr2)
  let sign = nbr1 + nbr2 < 0 ? -1 : 1
  let res = sum.toString().split('').map(x => parseInt(x))
  
  res[0] *= sign
  
  return nbr1 === 0 && nbr2 === 0 ? [] : res
}

function addArrays(array1, array2) {
  
  if (array1.length === 0) {
      return array2;
   } else if (array2.length === 0) {
      return array1;
   }

  const x = array1.join('');
  const y = array2.join('');

  const z = Number(x) + Number(y);

  const q = String(z).match(/-?\d/g).map(Number);
  
  return q;
}